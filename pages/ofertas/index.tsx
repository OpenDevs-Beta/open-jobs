import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next/types';
import React, { useEffect, useState } from 'react'
import { CardGrid } from '../../components/cardGrid';
import { Navbar } from '../../components/navBar';
import SearchBar from '../../components/SearchBar';
import { getAllJobs, getJobsPaginated } from '../../shared/middlewares/APImiddleware';
import { Footer } from '../../components/Footer';

import styles from './Ofertas.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getAllJobs(12)
  return { props: { data } }

};

const Ofertas = ({ data }: { data: any }) => {

  const router = useRouter();

  const queryParam = router.query.query

  const queryFilters = router.query

  const [dataSaved, setDataSaved] = useState(data)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const getTotalPages = async () => {
    const res = await getJobsPaginated(page, 12)
    setTotalPages(res.meta.last_page)
  }

  const handleScroll = (e: any) => {
    const target = e.target
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      if (page === totalPages) {
        setPage(page)
      } else {
        setPage(page + 1)
      }
    }
  }


  const search = async () => {
    if (Object.keys(queryFilters).length === 0) {
      const res = await getJobsPaginated(1, 12)
      setDataSaved(res.data)
    }
    else {
      const res = await getJobsPaginated(1, 12, queryFilters)
      setDataSaved(res.data)
    }
    setPage(1)
  }

  const getMore = async () => {
    if (page === 1 || page - 1 === totalPages) {
      setDataSaved(dataSaved)
    } else {
      if (Object.keys(queryFilters).length === 0) {
        const res = await getJobsPaginated(page, 12)
        let dataTemp = dataSaved.concat(res.data)
        setDataSaved(dataTemp)
      } else {
        const res = await getJobsPaginated(page, 12, queryFilters)
        let dataTemp = dataSaved.concat(res.data)
        setDataSaved(dataTemp)
      }
    }
  }

  useEffect(() => {
    getMore()
    getTotalPages()
  }, [page])

  useEffect(() => {
    search()
  }, [queryFilters])


  return (
    <div className={styles.ofertasContainer} onScroll={handleScroll}>
      <Navbar />
      <SearchBar />
      <CardGrid ofertas={dataSaved} />
      <Footer />
    </div>
  )
}


export default Ofertas
