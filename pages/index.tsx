import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Main from '@/components/Main'
import { micrecmsClient } from '@/libs/microcms-client'
import { Work } from '@/libs/types'
import Head from 'next/head'

const Home = ({ works }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>ufoo68 portfolio</title>
        <meta
          name="viewport"
          content="maximum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main works={works} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const works = await micrecmsClient.get({ endpoint: 'works' })

  return {
    props: {
      works: works.contents as Work[] ?? [],
    }
  }
}

export default Home