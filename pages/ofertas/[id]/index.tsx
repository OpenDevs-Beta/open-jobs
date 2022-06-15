import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { getAllJobs, getJobByID } from '../../../shared/middlewares/APImiddleware'

const IndexOferta: NextPage = ({ jobData }: any): JSX.Element => {

  const [testData, setTestData] = useState(jobData)
  
  return (
    <div style={{marginTop: '80px'}}>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths | any = async () => {
  try {
    const jobsFetched = await getAllJobs()
    const paths = jobsFetched.map(({ id }: any) => ({ params: { id: `${id}` }}))
    return {
      paths,
      fallback: false
    }
} catch (error) {
    console.log(error)
  }
}

export const getStaticProps: GetStaticProps | any = async ({ params }: any) => {
  try {
    const id = params.id
    const jobFetched = await getJobByID(id)
    return {
      props: {
        jobData: jobFetched
      }
    }
  } catch (error) {
    console.log(`[ERROR]: ${error}`)
  }
}

export default IndexOferta