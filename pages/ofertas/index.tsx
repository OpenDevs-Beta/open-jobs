import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next/types';
import React from 'react'
import { CardGrid } from '../../components/cardGrid';
import { Navbar } from '../../components/navBar';
import SearchBar from '../../components/SearchBar';
import { getAllJobs } from '../../shared/middlewares/APImiddleware';

import styles from '../../styles/Ofertas.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const {data, isLoading} = await getAllJobs()
  return  {props: { data, isLoading }} 
};

const Ofertas = ({data, isLoading}:{data:any, isLoading:boolean}) => {

  const router = useRouter();

  const queryParam = router.query.query
  

  return (
    <div className={styles.ofertasContainer}>
      <Navbar />
      <SearchBar query={queryParam} />
      <CardGrid ofertas={data} />
    </div>
  )
}



export default Ofertas
