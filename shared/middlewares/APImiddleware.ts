import fetch from 'isomorphic-unfetch'
import { useState } from 'react'

const ENDPOINT = '/api/ofertas'

/**
 * Method to get all jobs
 * @returns Json data and isError
 */
export async function getAllJobs(limit?: any) {

  let perPage = limit ? `?limit=${limit}` : ''

  let response = await fetch(process.env.NEXT_PUBLIC_API_URL + ENDPOINT + perPage)
    .then(r => r.json())
    .catch(e => console.error(`Error al hacer petición de ofertas: ${e}`))
  return {
    data: response?.data?.data,
    meta: response?.data?.meta
  }
}

/** 
 * Method to get jobs by page
 * @param page 
 * @returns Json data and isError
 */
export async function getJobsPaginated(page: any, limit: any, filters?: any) {

  let ciudad = filters?.ciudad ? `&ubicacion=${filters.ciudad}` : ''
  let salarioMin = filters?.salarioMin ? `&salarioMin=${filters.salarioMin}` : ''
  let salarioMax = filters?.salarioMax ? `&salarioMax=${filters.salarioMax}` : ''
  let experiencia = filters?.anos ? `&experiencia=${filters.anos}` : ''
  let nombre = filters?.search ? `&nombre=${filters.search}` : ''

  let response = await fetch(process.env.NEXT_PUBLIC_API_URL + ENDPOINT + '?' + ciudad + salarioMin + salarioMax + experiencia + nombre + `&page=${page}` + `&limit=${limit}`)
    .then(r => r.json())
    .catch(e => console.error(`Error al hacer petición de ofertas: ${e}`))
  return {
    data: response?.data?.data,
    meta: response?.data?.meta
  }

}

/*
 * Method to get job by Id
 * @param id 
 * @returns Json data and isError
 */
export async function getJobById(id: any) {

  let response = await fetch(process.env.NEXT_PUBLIC_API_URL + ENDPOINT + `/${id}`)
    .then(r => r.json())
    .catch(e => console.error(`Error al hacer petición de ofertaID: ${e}`))

  return {
    data: response?.data,
  }
}
