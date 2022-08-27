import Head from 'next/head'

import { Hero } from '@/components/SubmissionSuccess'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Design for LPL Advisors</title>
        <meta
          name="description"
          content="I help LPL Advisors tell their story online, in a compelling and engaging way."
        />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
