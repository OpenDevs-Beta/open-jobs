import { GetStaticProps } from 'next/types';
import React from 'react'
import { Navbar } from '../components/navBar';
import { CardHomeGrid } from '../components/cardHomeGrid';
import { HomeSearcher } from '../components/HomeSearcher'
import { getAllJobs } from '../shared/middlewares/APImiddleware';
import styles from '../styles/Index.module.css'

function HomePage(props: any) {

  const {data, isError, isLoading} = props.data.data.data

  return (
    <div className={styles.homepageContainer}>
        <Navbar />
        <HomeSearcher />
        <CardHomeGrid ofertas={data} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllJobs()
  return { props: { data } }
}

export default HomePage