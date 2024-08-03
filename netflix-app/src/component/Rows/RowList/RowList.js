import React from 'react';
import Row from '../Row/Row';
import requests from '../../../utils/requests';

const RowList = () => {
  return (
    <>
      <Row 
        key="netflix-originals"
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row 
        key="trending-now"
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row 
        key="top-rated-movies"
        title="Top Rated Movies"
        fetchUrl={requests.fetchTopRatedMovies}
      />
      <Row 
        key="action-movies"
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row 
        key="comedy-movies"
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row 
        key="horror-movies"
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row 
        key="romance-movies"
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row 
        key="documentaries"
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
      <Row 
        key="tv-shows"
        title="TV Shows"
        fetchUrl={requests.fetchTvShows}
      />
    </>
  );
};

export default RowList;
