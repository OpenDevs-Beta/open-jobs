import { GetStaticPaths, GetStaticPathsContext, GetStaticPathsResult, GetStaticProps, NextPage } from "next"
import { useState } from "react"

const IndexOferta: NextPage = ({ data }: any): JSX.Element => {

  const [testData, setTestData] = useState(data)
  
  return (
    <div style={{marginTop: '80px'}}>
      if putting numbers on Id params and take out different results, that means this is working successfully:
      <p>{ testData.id } - { testData.title } - { testData.body }</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths | any = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dataFetched = await res.json()
    const paths = dataFetched.map(({id}: any) => ({ params: { id: `${id}` }}))
    return {
      paths,
      fallback: false
    }
} catch (error) {
    console.log(error)
  }
}

export const getStaticProps: GetStaticProps | any = async ({ params }: any) => {
  console.log(params)
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
    const dataFetched = await res.json()
    return {
      props: {
        data: dataFetched
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export default IndexOferta