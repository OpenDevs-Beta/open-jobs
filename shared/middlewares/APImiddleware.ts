import fetch from 'isomorphic-unfetch'

/**
 * Method to get all jobs
 * @returns Json data and isError
 */
export async function getAllJobs() {
  
  let response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/')
  .then(r => r.json())
  .catch(e => console.error(`Error al hacer petición de ofertas: ${e}`))

  return {
    data: response?.data?.data,
    isLoading: response ? false: true
  }  
}

/**
 * Method to get job by Id
 * @param id 
 * @returns Json data and isError
 */
export async function getJobById(id: number) {

	let response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/${id}`)
		.then(r => r.json())
    .catch(e => console.error(`Error al hacer petición de ofertaID: ${e}`))
  
  return {
    data: response.data.data,
    isLoading: response ? false: true
  }  
}
