import { useState } from 'react'
import { useRouter } from 'next/router'

import styles from './HomeSearcher.module.css'

export const HomeSearcher = () => {

    const router = useRouter()
    const [oferta, setOferta] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push('/ofertas/?query=' + oferta)
    }

    return (
        <div className={styles.homeSearcher}>
            <h1>
                <span>Ya era hora</span> 
                <br/>
                <span>Solo las mejores ofertas</span>
            </h1>
            <form method="post" onSubmit={handleSubmit}>
                <input 
                    id="oferta"
                    name="oferta"
                    type="text"
                    onChange={e => setOferta(e.target.value)}
                    value={oferta}
                    placeholder="Busca en Open Jobs"
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
    )

}