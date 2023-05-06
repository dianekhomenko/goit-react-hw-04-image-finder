import React, { useEffect, useRef, useState } from 'react';
import { Searchbar } from './Search/Searchbar';
import axios from 'axios';
import { Layout } from 'components/Layout.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Circles } from 'react-loader-spinner';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '34409732-2eb98e59aad866aa53f09776f';

export const App = () => {
  const [search, setSearch] = useState('');
  const [photos, setPhotos] = useState([]);
  const page = useRef(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (search !== '') {
      async function getData() {
        setIsLoading(true);
        const response = await axios.get(
          `?q=${search}&page=${page.current}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setPhotos(response.data.hits);
      }

      getData();
      page.current += 1;
      setIsLoading(false);
    }
  }, [search]);

  const onSearch = e => {
    e.preventDefault();
    setSearch(e.currentTarget.elements.searchbar.value);
    page.current = 1;
    e.currentTarget.elements.searchbar.value = '';
  };

  const onLoad = () => {
    page.current += 1;

    setIsLoading(true);
    async function getData() {
      const response = await axios.get(
        `?q=${search}&page=${page.current}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setPhotos(prevState => [...prevState, ...response.data.hits]);
    }
    getData();
    setIsLoading(false);
  };

  return (
    <Layout>
      <Searchbar onSubmit={onSearch} />
      {isLoading && (
        <Circles
          height="80"
          width="80"
          color="#3f51b5"
          ariaLabel="circles-loading"
          wrapperClass="loader"
          visible={true}
        />
      )}
      <ImageGallery photos={photos} />
      {photos.length > 0 && <Button onLoad={onLoad} />}
    </Layout>
  );
};
