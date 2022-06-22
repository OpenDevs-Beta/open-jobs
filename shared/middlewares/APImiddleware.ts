import fetch from "isomorphic-unfetch";

const ENDPOINT = "/api/ofertas";

/**
 * Method to get all jobs
 * @returns Json data and isError
 */
export async function getAllJobs({
  sortBy,
  sortType,
}: {
  sortBy?: string;
  sortType?: string;
} = {}) {
  let query = [];

  if (sortBy) {
    query.push(`sortBy=${sortBy}`);
  }

  if (sortType) {
    query.push(`sortType=${sortType}`);
  }

  let url = process.env.NEXT_PUBLIC_API_URL + ENDPOINT;

  if (query.length > 0) {
    url += `?${query.join("&")}`;
  }

  debugger;

  console.log(url);

  let response = await fetch(url)
    .then((r) => r.json())
    .catch((e) => console.error(`Error al hacer petición de ofertas: ${e}`));

  return {
    data: response?.data?.data,
  };
}

/**
 * Method to get jobs by page
 * @param page
 * @returns Json data and isError
 */
export async function getJobsPaginated(page: any) {
  let response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + ENDPOINT + `/?page=${page}`
  )
    .then((r) => r.json())
    .catch((e) => console.error(`Error al hacer petición de ofertas: ${e}`));

  return {
    data: response?.data?.data,
  };
}

/*
 * Method to get job by Id
 * @param id
 * @returns Json data and isError
 */
export async function getJobById(id: any) {
  let response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + ENDPOINT + `/${id}`
  )
    .then((r) => r.json())
    .catch((e) => console.error(`Error al hacer petición de ofertaID: ${e}`));

  return {
    data: response?.data,
  };
}
