import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next/types';
import React from 'react'
import { CardGrid } from '../../components/cardGrid';
import { Navbar } from '../../components/navBar';
import SearchBar from '../../components/SearchBar';
import { getAllJobs } from '../../shared/middlewares/APImiddleware';

import styles from '../../styles/Ofertas.module.css'

const Ofertas: NextPage = (props: any) => {

  const router = useRouter();

  const queryParam = router.query.query

  const ofertas = props.data.data.data

  return (
    <div className={styles.ofertasContainer}>
      <Navbar />
      <SearchBar query={queryParam} />
      <CardGrid ofertas={ofertas} />
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

export default Ofertas
