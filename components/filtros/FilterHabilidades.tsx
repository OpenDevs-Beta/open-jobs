import { useEffect } from "react"
import { useRouter } from "next/router"

import styles from "../../styles/SearchFilter.module.css"

const FilterHabilidades = () => {

  const router: any = useRouter()

  const handleClick = (filter: string) => {
    router.query.skill != filter ? router.query.skill = filter : router.query.skill = ''
    router.push({ pathname: '/ofertas', query: router.query })
  }

  // TODO: Modificar cuando se tenga la api del back
  return (
    <div className={styles.filter}>
      <div onClick={() => handleClick('development')}>
        { router.query.skill == 'development' ? 
          (<span className={styles.selected}>Development</span>)
        :
          (<span>Development</span>)
        }
      </div>
      <div onClick={() => handleClick('data')}>
        { router.query.skill == 'data' ? 
          (<span className={styles.selected}>Data</span>)
        :
          (<span>Data</span>)
        }
      </div>
      <div onClick={() => handleClick('sysops and cybersecurity')}>
        { router.query.skill == 'sysops and cybersecurity' ? 
          (<span className={styles.selected}>Sysops and cybersecurity</span>)
        :
          (<span>Sysops and cybersecurity</span>)
        }
      </div>
      <div onClick={() => handleClick('quality assurance')}>
        { router.query.skill == 'quality assurance' ? 
          (<span className={styles.selected}>Quality assurance</span>)
        :
          (<span>Quality assurance</span>)
        }
      </div>
      <div onClick={() => handleClick('digital product')}>
        { router.query.skill == 'digital product' ? 
          (<span className={styles.selected}>Digital product</span>)
        :
          (<span>Digital product</span>)
        }
      </div>
    </div>
  )
}

export default FilterHabilidades