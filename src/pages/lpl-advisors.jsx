import Head from 'next/head'

import { Hero } from '@/components/lpl/Hero'
import { PrimaryFeatures } from '@/components/lpl/PrimaryFeatures'
import { BringValue } from '@/components/lpl/BringValue'
import { WhatLPLNeeds } from '@/components/lpl/WhatLPLNeeds'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Pricing } from '@/components/Pricing'
import { Contact } from '@/components/Contact'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

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
        <BringValue />
        <PrimaryFeatures />
        <WhatLPLNeeds />
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
