import { GetStaticPaths, GetStaticProps } from 'next'
import { Navbar } from '../../components/navBar'
import DivBanner from '../../components/ofertas_components/DivBanner'
import { getAllJobs, getJobById } from '../../shared/middlewares/APImiddleware'

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getAllJobs()

  const paths = data?.map((oferta: any) => ({
      params: { id: oferta?.id + '' }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { data } = await getJobById(params?.id)
  return { props: { data } }
}

const IndexOferta = ({data}:{data:any }) => {

  return (
    <div style={{marginTop: '80px'}}>
      <Navbar />
      <DivBanner />
    </div>
  )
}


export default IndexOferta