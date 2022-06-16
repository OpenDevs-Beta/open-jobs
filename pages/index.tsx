import { GetStaticProps } from 'next/types';
import React from 'react'
import { Navbar } from '../components/navBar';
import { CardHomeGrid } from '../components/cardHomeGrid';
import { HomeSearcher } from '../components/HomeSearcher'
import { getAllJobs } from '../shared/middlewares/APImiddleware';
import styles from '../styles/index.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const {data, isLoading} = await getAllJobs()
  return  {props: { data, isLoading }} 
}

function HomePage({data, isLoading}:{data:any, isLoading:boolean}) {

  return (
    <div className={styles.homepageContainer}>
        <Navbar />
        <HomeSearcher />
        <CardHomeGrid ofertas={data} />
    </div>
  )
}


export default HomePage