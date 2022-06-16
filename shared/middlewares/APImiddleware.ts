import fetch from 'isomorphic-unfetch'

const ENDPOINT = '/api/ofertas'

/**
 * Method to get all jobs
 * @returns Json data and isError
 */
export async function getAllJobs() {
  
  let response = await fetch(process.env.NEXT_PUBLIC_API_URL + ENDPOINT)
  .then(r => r.json())
  .catch(e => console.error(`Error al hacer petición de ofertas: ${e}`))

  return {
    data: response?.data?.data,
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
  
  console.log({response})

  return {
    data: response?.data,
  }  
}
