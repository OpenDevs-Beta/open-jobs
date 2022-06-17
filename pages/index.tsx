import { GetStaticProps } from 'next/types';
import React from 'react'
import { Navbar } from '../components/navBar';
import { CardHomeGrid } from '../components/cardHomeGrid';
import { HomeSearcher } from '../components/HomeSearcher'
import { getAllJobs } from '../shared/middlewares/APImiddleware';
import styles from '../styles/index.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getAllJobs()
//  console.log({data})
  return  {props: { data: data || null }}
}

function HomePage({data}:{data:any}) {

  return (
    <>
        <Navbar />
        <HomeSearcher />
        <CardHomeGrid ofertas={data} />
    </>
  )
}


export default HomePage