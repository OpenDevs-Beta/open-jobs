import { GetStaticProps } from 'next/types';
import React from 'react'
import { NavBar } from '../components/navBar';
import SearchBar from '../components/SearchBar';
import { getAllJobs } from '../shared/middlewares/APImiddleware';

function HomePage(props: any) {
  return (
    <div>
        <SearchBar />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  // Call from a middleware to fetch data
  const data = await getAllJobs();
  return {
    props: { data },
  };
};

export default HomePage