import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Bespoke } from '@/components/Bespoke'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Contact } from '@/components/Contact'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tell Your Story Online</title>
        <meta
          name="description"
          content="I help financial services profesisionals tell their story online, in a compelling and engaging way."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <Bespoke /> */}
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Pricing />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
