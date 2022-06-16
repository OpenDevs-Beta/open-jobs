import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getAllJobs, getJobById } from '../../../shared/middlewares/APImiddleware'

export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await getAllJobs()

  const paths = Object.values(data.data.data.data).map((oferta: any) => ({
      params: { id: oferta.id }
  })) 

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
  const {data, isLoading} = await getJobById(params.id.toString())
  return { props: { data, isLoading} }
}

const IndexOferta = ({data, isLoading}:{data:any, isLoading:boolean}) => {

  return (
    <div style={{marginTop: '80px'}}>
        
    </div>
  )
}


export default IndexOferta