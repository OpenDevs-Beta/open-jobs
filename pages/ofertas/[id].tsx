import { GetStaticPaths, GetStaticProps } from 'next'
import { Navbar } from '../../components/navBar'
import Banner from '../../components/ofertas/Banner'
import OfertaDetail from '../../components/ofertas/OfertaDetail'
import { getAllJobs, getJobById } from '../../shared/middlewares/APImiddleware'
import { Footer } from '../../components/Footer';

export const getStaticPaths: GetStaticPaths = async () => {

  const { data } = await getAllJobs(1000)

  const paths = data?.map((oferta: any) => ({params: { id: oferta?.id?.toString() }}))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { data } = await getJobById(params?.id)
  return {
    props: { data: data || null },
    revalidate: 10,
}
}

const IndexOferta = ({data}:{data:any }) => {

  return (
    <div>
      <Navbar />
      <Banner />
      <OfertaDetail data={data} />
      <Footer />
    </div>
  )
}


export default IndexOferta