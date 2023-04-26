import React, { Component } from 'react';
import { Searchbar } from './Search/Searchbar';
import axios from 'axios';
import { Layout } from 'components/Layout.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { func } from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '34409732-2eb98e59aad866aa53f09776f';

export class App extends Component {
  state = {
    search: '',
    photos: [],
    page: 1,
  };

  onSearch = e => {
    e.preventDefault();
    this.setState({
      search: e.currentTarget.elements.searchbar.value,
      page: 1,
    });
  };

  onLoad = e => {
    console.log('load');

    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      const response = await axios.get(
        `?q=${this.state.search}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ photos: response.data.hits });
    }
  }

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery photos={this.state.photos} />
        {this.state.photos.length > 0 && <Button onLoad={this.onLoad} />}
      </Layout>
    );
  }
}
