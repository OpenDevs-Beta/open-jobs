import { useState } from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/Searcher.module.css'
import Link from 'next/link'

export const HomeSearcher = () => {

    const router = useRouter()
    const [oferta, setOferta] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push('/ofertas/?query=' + oferta)
    }

    return (
        <div className={styles.searcher}>
            <h1>
                <span>Ya era hora</span> 
                <br/>
                <span>Solo las mejores ofertas</span>
            </h1>
            <div className={styles.searcherForm}>
              <form method="post" onSubmit={handleSubmit}>
                  <input 
                      id="oferta"
                      name="oferta"
                      type="text"
                      onChange={e => setOferta(e.target.value)}
                      value={oferta}
                      placeholder="Busca en Open Jobs"
                  />
                  <button type="submit" className={styles.searcherHomeButton}>Buscar</button>
              </form>
            </div>
            <div className={styles.searcherHomeFilters}>
              <span onClick={() => router.push('/ofertas/?query=Javascript')}>Javascript</span>
              <span onClick={() => router.push('/ofertas/?query=Madrid')}>Madrid</span>
              <span onClick={() => router.push('/ofertas/?query=Python')}>Python</span>
              <span onClick={() => router.push('/ofertas/?query=Frontend')}>Frontend</span>
              <span onClick={() => router.push('/ofertas/?query=Node.js')}>Node.js</span>
              <span onClick={() => router.push('/ofertas/?query=Remoto')}>Remoto</span>
            </div>
        </div>
    )

}