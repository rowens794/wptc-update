import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Do you use WordPress?',
      answer:
        'No, my sites are 100% custom-built using the latest technologies and frameworks. This strategy avoids the issues associated with managing incompatible plugins, themes, etc., frequently found with WordPress.',
    },
    {
      question: 'How long does development take?',
      answer:
        'A standard 5-page site is researched, developed, and deployed in about 14 days. Of course, as the size or complexity of the site increases - the time increases.',
    },
    {
      question: 'Can I cancel anytime under monthly pricing?',
      answer:
        "Of course. If you're not happy, just let me know, and we can pull the plug on your contract.",
    },
  ],
  [
    {
      question: `Do your sites include blogging capabilities?`,
      answer:
        'Absolutely, blogging is an advanced features that require extra work to setup and manage, so it requires an additional surcharge - but I would be happy to discuss any additional cost prior to a project getting underway.',
    },
    {
      question: 'What if I get tired of the original design?',
      answer:
        'I offer a complete site redesign after two years of active service for my monthly customers free of charge.',
    },
  ],
  [
    {
      question:
        'What kind of work did you do in financial services prior to web design?',
      answer:
        'I was an investment manager that worked with institutional clients (primary foundation and endowment). That work led me to start a software product (Intellispect) based on nonprofit data, which then led to contract web development work.',
    },
    {
      question: 'What are the primary technologies you use to build websites?',
      answer:
        'I build with React, NextJS, HTML, CSS, and JavaScript. If a database is needed, I usually reach for MongoDB or SQL.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link href="#contact" className="text-gray-900 underline">
              reach out to me
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
