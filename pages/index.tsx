import { GetStaticProps } from 'next/types';
import React from 'react'
import { Navbar } from '../components/navBar';
import { CardHomeGrid } from '../components/cardHomeGrid';
import { HomeSearcher } from '../components/HomeSearcher'
import { getAllJobs } from '../shared/middlewares/APImiddleware';
import styles from './index.module.css'
import { Footer } from '../components/Footer';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getAllJobs(11)
  return  {
    props: { data: data || null },
    revalidate: 10,
}
}

function HomePage({data}:{data:any}) {

  return (
    <div className={styles.homepageContainer}>
        <Navbar />
        <HomeSearcher />
        <CardHomeGrid ofertas={data} />
        <Footer />
    </div>
  )
}


export default HomePage