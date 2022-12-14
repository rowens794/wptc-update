import { useState } from 'react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'

const plans = [
  {
    name: 'Consultation',
    featured: false,
    price: { Monthly: '$0' },
    description: `You want to talk to someone about a project you've been thinking about? I love discussing project strategy. `,
    button: {
      label: 'Schedule Consultation',
      href: '#contact',
    },
    features: [
      '100% Free',
      'No Sales Pressure',
      'Alternative Aware (WordPress, Agency, Custom)',
      'Free Design Mockup',
    ],
  },
  {
    name: 'Monthly Plan',
    featured: false,
    price: { Monthly: '$249 / Month' },
    price2: { Monthly: '$149 / Month' },
    description: `You're ready to move forward. Get your project done with no upfront charges or lengthy commitments.`,
    button: {
      label: 'Get a Free Design Mockup',
      href: '#contact',
    },
    features: [
      'Up to 5 Page Project',
      'Copywriting & Design Included',
      'Ongoing Support/Oversight',
      'Unlimited Content Edits',
      'Free Site Hosting',
    ],
  },
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  price2,
  description,
  button,
  features,
  featured = false,
  logomarkClassName,
  i,
}) {
  return (
    <section
      className={clsx(
        'flex h-full flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white'
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        <Logo className={clsx('h-6 w-6 flex-none', logomarkClassName)} />
        <span className="ml-4">{name}</span>
      </h3>
      {i > 0 ? (
        <p
          className={clsx(
            'relative mt-5 flex text-xl tracking-tight text-red-700 line-through'
          )}
        >
          {price.Monthly}
        </p>
      ) : null}

      {i > 0 ? (
        <>
          <p
            className={clsx(
              'relative mt-1 flex text-3xl tracking-tight',
              featured ? 'text-white' : 'text-gray-900'
            )}
          >
            {price2.Monthly}
          </p>
          <span className="text-sm font-light italic">Until Sept. 15th</span>
        </>
      ) : null}

      {i === 0 ? (
        <p
          className={clsx(
            'relative mt-5 flex text-3xl tracking-tight',
            featured ? 'text-white' : 'text-gray-900'
          )}
        >
          {price.Monthly}
        </p>
      ) : null}

      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700'
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700'
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-cyan-500'
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        color={featured ? 'cyan' : 'gray'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>
    </section>
  )
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState('Monthly')

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <div className=" mx-auto max-w-3xl px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Easy to Understand Pricing
          </h2>
          <p className="text mt-2 font-light text-gray-700">
            Project pricing is simple - 1 monthly fee, cancel anytime, and you
            don't pay anything until your project is complete.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className={
                'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300 [clip-path:inset(0_50%_0_0)]'
              }
            >
              {['Monthly', 'Annually'].map((period) => (
                <div
                  key={period}
                  className={clsx(
                    'py-2 text-center text-sm font-semibold text-white [&:not(:focus-visible)]:focus:outline-none',
                    period === 'Annually' && '-ml-px'
                  )}
                >
                  {period}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 md:grid-cols-2 lg:max-w-none">
          {plans.map((plan, i) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
