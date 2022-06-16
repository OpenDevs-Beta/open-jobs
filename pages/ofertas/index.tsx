import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next/types';
import React, { useEffect, useState } from 'react'
import { CardGrid } from '../../components/cardGrid';
import { Navbar } from '../../components/navBar';
import SearchBar from '../../components/SearchBar';
import { getAllJobs } from '../../shared/middlewares/APImiddleware';

import styles from '../../styles/Ofertas.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const {data} = await getAllJobs()
  return  {props: { data }} 
};

const Ofertas = ({data}:{data:any}) => {

  const router = useRouter();

  const queryParam = router.query.query
  

  const [ofertasSearch, setOfertasSearch] = useState(data)

  const search = () => {
    if (queryParam === undefined || queryParam === '') {
      setOfertasSearch(data)
    }
    else {
      let dataChange = data.filter((oferta: any) => {
        return oferta.nombre.includes(queryParam) || oferta.nombre.toLowerCase().includes(queryParam) || oferta.nombre.toUpperCase().includes(queryParam) ||
          oferta.experiencia.toLowerCase().includes(queryParam) || oferta.experiencia.toUpperCase().includes(queryParam) || oferta.experiencia.includes(queryParam) ||
          oferta.descripcion.toLowerCase().includes(queryParam) || oferta.descripcion.toUpperCase().includes(queryParam) || oferta.descripcion.includes(queryParam) ||
          oferta.empresa.nombre.toLowerCase().includes(queryParam) || oferta.empresa.nombre.toUpperCase().includes(queryParam) || oferta.empresa.nombre.includes(queryParam)
      })
      setOfertasSearch(dataChange)
    }
  }

  useEffect(() => {
    search()
  }, [queryParam])


  return (
    <div className={styles.ofertasContainer}>
      <Navbar />
      <SearchBar query={queryParam} />
      <CardGrid ofertas={ofertasSearch} />
    </div>
  )
}


export default Ofertas
