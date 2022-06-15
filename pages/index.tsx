import { GetStaticProps } from 'next/types';
import React from 'react'
import { HomeSearcher } from '../components/HomeSearcher'
import { getAllJobs } from '../shared/middlewares/APImiddleware';

import styles from '../styles/index.module.css'

function HomePage() {
    return (
      <div className={styles.homepageContainer}>
          <HomeSearcher />
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