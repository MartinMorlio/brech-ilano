import Carousel from 'components/Carousel'
import Layout from 'components/Layout'
import Products from 'components/Products'
import Head from 'next/head'
// import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop Brech Ilano</title>
        <meta name="description" content="Store Brech Ilano" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
        <link rel="icon" href="/brech-ilano.ico" />
      </Head>
      <main>
        <Layout />
        <Carousel />
        <Products />
      </main>
    </>
  )
}
