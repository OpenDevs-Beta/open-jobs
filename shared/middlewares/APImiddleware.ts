import fetch from 'isomorphic-unfetch'

export const getAllJobs = async () => {
  const res = await fetch('https://super-ttt-api.herokuapp.com/api/ofertas');
  const data = await res.json();
  return data;
}

export const getJobByID = async (params: any) => {
  const res = await fetch(`https://super-ttt-api.herokuapp.com/api/ofertas/${params.id}`);
  const data = await res.json();
  return data;
}

export const getAllJobsPaths = async () => {
  const req = await fetch('https://super-ttt-api.herokuapp.com/api/ofertas');
  const data = await req.json();
  const jobs = data.jobs;
  return jobs;
}