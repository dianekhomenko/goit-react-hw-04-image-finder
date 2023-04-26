import React, { Component } from 'react';
import { Searchbar } from './Search/Searchbar';
import axios from 'axios';
import { Layout } from 'components/Layout.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Circles } from 'react-loader-spinner';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '34409732-2eb98e59aad866aa53f09776f';

export class App extends Component {
  state = {
    search: '',
    photos: [],
    page: 1,
    isLoading: false,
  };

  onSearch = e => {
    e.preventDefault();
    this.setState({
      search: e.currentTarget.elements.searchbar.value,
      page: 1,
    });
  };

  onLoad = e => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    this.loadPage();
  };

  async loadPage() {
    this.setState({
      isLoading: true,
    });
    const response = await axios.get(
      `?q=${this.state.search}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState(prevState => {
      return {
        photos: [...prevState.photos, ...response.data.hits],
        isLoading: false,
      };
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({ isLoading: true });
      const response = await axios.get(
        `?q=${this.state.search}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({
        photos: response.data.hits,
        page: 2,
        isLoading: false,
      });
    }
  }

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.onSearch} />
        {this.state.isLoading && (
          <Circles
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="circles-loading"
            wrapperClass="loader"
            visible={true}
          />
        )}
        <ImageGallery photos={this.state.photos} />
        {this.state.photos.length > 0 && <Button onLoad={this.onLoad} />}
      </Layout>
    );
  }
}
