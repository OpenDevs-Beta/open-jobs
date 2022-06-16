import fetch from 'isomorphic-unfetch'

/**
 * Method to get all jobs
 * @returns Json data and isError
 */
export async function getAllJobs() {
  let isError: boolean = false

	let response: Response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/')
		.then(r => r.json())
    .catch(e => ({ isError: true, e }))
  
  return {
    data: isError ? [] : response,
    isError: isError,
    isLoading: response ? false: true
  }  
}

/**
 * Method to get job by Id
 * @param id 
 * @returns Json data and isError
 */
export async function getJobById(id: number) {
  let isError: boolean = false

	let response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/${id}`)
		.then(r => r.json())
    .catch(e => ({ isError: true, e }))
  
  return {
    data: isError ? [] : response,
    isError: isError,
    isLoading: response ? false: true
  }  
}
