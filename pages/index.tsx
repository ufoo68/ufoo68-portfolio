import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Main from '@/components/Main'
import { client } from '@/libs/client'
import { Work } from '@/libs/types'

const Home = ({ works }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Main works={works} />
    </div>
  )
}

export const getStaticProps = async (context) => {
  const works = await client.get({ endpoint: 'works' })

  return {
    props: {
      works: works.contents as Work[] ?? [],
    }
  }
}

export default Home