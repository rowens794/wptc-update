import { Container } from '@/components/Container'

export function Bespoke() {
  return (
    <section
      id="bespoke"
      aria-label="Features for investing all your money"
      className="sm:py-18 border-b-4 border-cyan-500 bg-gray-800 py-20"
    >
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col gap-4 md:flex-row md:gap-16">
          <h2 className="my-auto w-full text-center text-3xl font-medium tracking-tight text-white lg:text-2xl">
            Bespoke Solutions for Financial Service Providers
          </h2>
          <p className="mt-2 text-left text-lg font-light text-gray-300">
            I spent the first decade of my career as an investment advisor. I
            learned to convey the value of professional financial management to
            clients. Now, I use that experience to create compelling web
            solutions for financial service providers.
          </p>
        </div>
      </Container>
    </section>
  )
}
