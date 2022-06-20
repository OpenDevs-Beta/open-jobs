import { useEffect, useRef, useState } from 'react'
import styles from '../styles/FilterModal.module.css'

const FilterModal = ({ children, divId, setIsModalOpen }: any) => {

  const handleClickModal = (e:any) => {
    e.preventDefault()
    setIsModalOpen(false)
  }

  return (
    <>
    <div onClick={(e) => handleClickModal(e)} className={ styles.modal }>
      <div id={divId} className={styles.filterModalContainer}>
        {children}
      </div>
    </div>
    </>
  )
}

export default FilterModal