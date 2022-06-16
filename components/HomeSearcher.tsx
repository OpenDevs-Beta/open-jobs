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
              <Link href="#">
                <a>Javascript</a>
              </Link>
              <Link href="#">
                <a>Madrid</a>
              </Link>
              <Link href="#">
                <a>Python</a>
              </Link>
              <Link href="#">
                <a>Front-end</a>
              </Link>
              <Link href="#">
                <a>Node.js</a>
              </Link>
              <Link href="#">
                <a>Remoto</a>
              </Link>
            </div>
        </div>
    )

}