import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next/types';
import React, { useEffect, useState } from 'react'
import { CardGrid } from '../../components/cardGrid';
import { Navbar } from '../../components/navBar';
import SearchBar from '../../components/SearchBar';
import { getAllJobs, getJobsPaginated } from '../../shared/middlewares/APImiddleware';

import styles from '../../styles/Ofertas.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const {data} = await getAllJobs()
  return  {props: { data }} 
};

const Ofertas = ({data}:{data:any}) => {

  const router = useRouter();

  const queryParam = router.query.query

  const [dataSaved, setDataSaved] = useState(data)
  const [ofertasSearch, setOfertasSearch] = useState(dataSaved)
  const [page, setPage] = useState(1)

  const getMore = async () => {
    if (page === 1) {
      setDataSaved(dataSaved)
    } else {
      const res = await getJobsPaginated(page)
      let dataTemp = dataSaved.concat(res.data)
      setDataSaved(dataTemp)
    }
  }

  const search = () => {
    if (queryParam === undefined || queryParam === '') {
      setOfertasSearch(dataSaved)
      setPage(page)
    }
    else {
      let dataChange = dataSaved.filter((oferta: any) => {
        return oferta.nombre.includes(queryParam) || oferta.nombre.toLowerCase().includes(queryParam) || oferta.nombre.toUpperCase().includes(queryParam) ||
          oferta.ubicacion.toLowerCase().includes(queryParam) || oferta.ubicacion.toUpperCase().includes(queryParam) || oferta.ubicacion.includes(queryParam) ||
          oferta.experiencia.toLowerCase().includes(queryParam) || oferta.experiencia.toUpperCase().includes(queryParam) || oferta.experiencia.includes(queryParam) ||
          oferta.empresa.nombre.toLowerCase().includes(queryParam) || oferta.empresa.nombre.toUpperCase().includes(queryParam) || oferta.empresa.nombre.includes(queryParam)
      })
      setOfertasSearch(dataChange)
      setPage(page)
    }
  }

  const handleScroll = (e: any) => {
    const target = e.target
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      setPage(page + 1)
    }
  }

  useEffect(() => {
    getMore()
  }, [page])

  useEffect(() => {
    search()
  }, [queryParam, dataSaved])


  return (
    <div className={styles.ofertasContainer} onScroll={handleScroll}>
      <Navbar />
      <SearchBar query={queryParam} />
      <CardGrid ofertas={ofertasSearch} />
    </div>
  )
}


export default Ofertas
