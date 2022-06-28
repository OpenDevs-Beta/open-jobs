import { useState } from 'react'
import { useRouter } from 'next/router'

import styles from './Searcher.module.css'

export const HomeSearcher = () => {

    const router = useRouter()
    const [oferta, setOferta] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push('/ofertas/?search=' + oferta)
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
              <span onClick={() => router.push('/ofertas/?skill=Javascript')}>Javascript</span>
              <span onClick={() => router.push('/ofertas/?ciudad=Madrid')}>Madrid</span>
              <span onClick={() => router.push('/ofertas/?skill=Python')}>Python</span>
              <span onClick={() => router.push('/ofertas/?search=Frontend')}>Frontend</span>
              <span onClick={() => router.push('/ofertas/?skill=Node.js')}>Node.js</span>
              <span onClick={() => router.push('/ofertas/?remote=true')}>Remoto</span>
            </div>
        </div>
    )

}