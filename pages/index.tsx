import { GetStaticProps } from 'next/types';
import React, { useEffect } from 'react'
import { CardHomeGrid } from '../components/cardHomeGrid';
import { HomeSearcher } from '../components/HomeSearcher'
import { NavBar } from '../components/navBar';
import { getAllJobs } from '../shared/middlewares/APImiddleware';

function HomePage(props: any) {

  const ofertas = props.data.data.data

  return (
    <div>
      <NavBar />
      <HomeSearcher />
      <CardHomeGrid ofertas={ofertas} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  // Call from a middleware to fetch data
  const data = await getAllJobs();
  return {
    props: { data },
  };
};

export default HomePage