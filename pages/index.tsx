import { GetStaticProps } from 'next/types';
import React from 'react'
import { Navbar } from '../components/navBar';
import { CardHomeGrid } from '../components/cardHomeGrid';
import { HomeSearcher } from '../components/HomeSearcher'
import { getAllJobs } from '../shared/middlewares/APImiddleware';
import styles from '../styles/index.module.css'

function HomePage(props: any) {

  const ofertas = props.data.data.data

  return (
    <div className={styles.homepageContainer}>
        <Navbar />
        <HomeSearcher />
        <CardHomeGrid ofertas={ofertas} />
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