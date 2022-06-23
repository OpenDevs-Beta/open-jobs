import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next/types';
import React, { useEffect, useState } from 'react'
import { CardGrid } from '../../components/cardGrid';
import { Navbar } from '../../components/navBar';
import SearchBar from '../../components/SearchBar';
import { getAllJobs, getJobsPaginated } from '../../shared/middlewares/APImiddleware';
import { Footer } from '../../components/Footer';

import styles from '../../styles/Ofertas.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getAllJobs(12)
  return { props: { data } }

};

const Ofertas = ({ data }: { data: any }) => {

  const router = useRouter();

  const queryParam = router.query.query

  const [dataSaved, setDataSaved] = useState(data)
  const [ofertasSearch, setOfertasSearch] = useState(dataSaved)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const getMore = async () => {
    if (page === 1 || page -1 === totalPages) {
      setDataSaved(dataSaved)
    } else {
      const res = await getJobsPaginated(page, 12)
      let dataTemp = dataSaved.concat(res.data)
      setDataSaved(dataTemp)
    }
  }

  const getTotalPages = async () => {
    const res = await getJobsPaginated(page, 12)
      setTotalPages(res.meta.last_page)
  }

  const search = () => {
    if (queryParam === undefined || queryParam === '') {
      setOfertasSearch(dataSaved)
      setPage(page)
    }
    else {
      let dataChange = dataSaved.filter((oferta: any) => {
        // .normalize("NFD").replace(/[\u0300-\u036f]/g, "") Quitar tildes //
        return oferta.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(queryParam) ||
          oferta.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(queryParam) ||
          oferta.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().includes(queryParam) ||
          oferta.ubicacion.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(queryParam) ||
          oferta.ubicacion.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().includes(queryParam) ||
          oferta.ubicacion.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(queryParam) ||
          oferta.experiencia.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(queryParam) ||
          oferta.experiencia.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().includes(queryParam) ||
          oferta.experiencia.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(queryParam) ||
          oferta.empresa.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(queryParam) ||
          oferta.empresa.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().includes(queryParam) ||
          oferta.empresa.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(queryParam) ||
          // Con tildes
          oferta.nombre.includes(queryParam) ||
          oferta.nombre.toLowerCase().includes(queryParam) ||
          oferta.nombre.toUpperCase().includes(queryParam) ||
          oferta.ubicacion.toLowerCase().includes(queryParam) ||
          oferta.ubicacion.toUpperCase().includes(queryParam) ||
          oferta.ubicacion.includes(queryParam) ||
          oferta.experiencia.toLowerCase().includes(queryParam) ||
          oferta.experiencia.toUpperCase().includes(queryParam) || oferta.experiencia.includes(queryParam) ||
          oferta.empresa.nombre.toLowerCase().includes(queryParam) ||
          oferta.empresa.nombre.toUpperCase().includes(queryParam) ||
          oferta.empresa.nombre.includes(queryParam)
      })
      setOfertasSearch(dataChange)
      setPage(page)
    }
  }

  const handleScroll = (e: any) => {
    const target = e.target
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      if(page === totalPages) {
        setPage(page)
      }else {
      setPage(page + 1)
      }
    }
  }

  useEffect(() => {
    getMore()
    getTotalPages()
    }, [page])

  useEffect(() => {
    search()
  }, [queryParam, dataSaved])


  return (
    <div className={styles.ofertasContainer} onScroll={handleScroll}>
      <Navbar />
      <SearchBar />
      <CardGrid ofertas={ofertasSearch} />
      <Footer />
    </div>
  )
}


export default Ofertas
