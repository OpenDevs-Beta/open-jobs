import fetch from 'isomorphic-unfetch'

const ENDPOINT = '/api/ofertas'

export const getAllJobs = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + ENDPOINT);
  const data = await res.json();
  return data;
}

export const getJobByID = async (params: any) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + ENDPOINT + `${params.id}`);
  const data = await res.json();
  return data;
}