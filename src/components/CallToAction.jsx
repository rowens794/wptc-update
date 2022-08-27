import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Let's Chat About Your Project
          </h2>
          <p className="mt-4 text-gray-300">
            Give me a call or send me a note, and we can find a time to discuss
            what you want to achieve. There's no cost, and I am happy to share
            how you can best reach your goals - even if it's not with me.
          </p>
          <div className="mt-8 flex justify-center">
            <button className=" rounded border border-gray-400 px-4 py-2 text-white transition-all hover:border-white">
              <a href="#contact">Get a Free Design Mockup</a>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
