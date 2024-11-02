import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 29,
    features: [
      'Up to 5 team members',
      '5GB storage',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: 79,
    features: [
      'Up to 20 team members',
      '50GB storage',
      'Advanced analytics',
      'Priority email support',
      'API access',
    ],
    cta: 'Try Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'Unlimited team members',
      '500GB storage',
      'Custom analytics',
      '24/7 phone support',
      'API access',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
  },
]

export default function PricingSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose the Perfect Plan for Your Team
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple, transparent pricing that grows with you
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-indigo-600 text-white text-center py-2 text-sm font-semibold uppercase">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    className={`w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                      plan.popular
                        ? 'bg-indigo-600 hover:bg-indigo-700'
                        : 'bg-gray-800 hover:bg-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800"
          >
            Compare all plan features
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}