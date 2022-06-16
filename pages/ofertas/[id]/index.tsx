import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getAllJobs, getJobById } from '../../../shared/middlewares/APImiddleware'

const IndexOferta: NextPage = (props: any): JSX.Element => {
  
  const {data, isError, isLoading} = props.data.data

  return (
    <div style={{marginTop: '80px'}}>
        
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await getAllJobs()

  const paths = Object.values(data.data.data.data).map((oferta: any) => ({
      params: { id: oferta.id.toString() }
  })) 

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
  const data = await getJobById(params.id)
  return { props: { data } }
}

export default IndexOferta