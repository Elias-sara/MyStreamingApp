import React from 'react';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';
import Banner from '../../component/Banner/Banner';
import RowList from '../../component/Rows/RowList/RowList';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
