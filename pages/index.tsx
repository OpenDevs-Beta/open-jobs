import { GetStaticProps } from 'next/types';
import React from 'react'
import { Navbar } from '../components/navBar';
import { CardHomeGrid } from '../components/cardHomeGrid';
import { HomeSearcher } from '../components/HomeSearcher'
import { getAllJobs } from '../shared/middlewares/APImiddleware';
import styles from '../styles/index.module.css'
import { Testimonios } from '../components/hazte_open_bootcamper/testimonios';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getAllJobs()
//  console.log({data})
  return  {props: { data: data || null }}
}

function HomePage({data}:{data:any}) {

  return (
    <div className={styles.homepageContainer}>
        <Navbar />
        <HomeSearcher />
        <CardHomeGrid ofertas={data} />
    </div>
  )
}


export default HomePage