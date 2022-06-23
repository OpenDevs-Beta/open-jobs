import fetch from 'isomorphic-unfetch'

const ENDPOINT = '/api/ofertas'

/**
 * Method to get all jobs
 * @returns Json data and isError
 */
export async function getAllJobs(limit?: any) {

  if (limit) {
    let response = await fetch(process.env.NEXT_PUBLIC_API_URL + ENDPOINT + `/?limit=${limit}`)
      .then(r => r.json())
      .catch(e => console.error(`Error al hacer petición de ofertas: ${e}`))

    return {
      data: response?.data?.data,
    }
  } else {
    let response = await fetch(process.env.NEXT_PUBLIC_API_URL + ENDPOINT)
      .then(r => r.json())
      .catch(e => console.error(`Error al hacer petición de ofertas: ${e}`))

    return {
      data: response?.data?.data,
    }
  }

}

/** 
 * Method to get jobs by page
 * @param page 
 * @returns Json data and isError
 */
export async function getJobsPaginated(page: any, limit?: any) {
  if (limit) {
    let response = await fetch(process.env.NEXT_PUBLIC_API_URL + ENDPOINT + `/?page=${page}` + `/?limit=${limit}`)
    .then(r => r.json())
    .catch(e => console.error(`Error al hacer petición de ofertas: ${e}`))

  return {
    data: response?.data?.data,
    meta: response?.data?.meta
  }
  } else {
  let response = await fetch(process.env.NEXT_PUBLIC_API_URL + ENDPOINT + `/?page=${page}`)
    .then(r => r.json())
    .catch(e => console.error(`Error al hacer petición de ofertas: ${e}`))

  return {
    data: response?.data?.data,
    meta: response?.data?.meta
  }
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
