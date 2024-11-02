import { BarChart3, Zap, Users, Shield, Clock, MessageSquare } from 'lucide-react'

const features = [
  {
    name: 'Advanced Analytics',
    description: 'Gain deep insights into your workflow with our powerful analytics dashboard.',
    icon: BarChart3,
  },
  {
    name: 'Real-time Collaboration',
    description: 'Work together seamlessly with your team, no matter where they are located.',
    icon: Users,
  },
  {
    name: 'Lightning Fast Performance',
    description: 'Experience unparalleled speed and efficiency in all your tasks.',
    icon: Zap,
  },
  {
    name: 'Robust Security',
    description: 'Your data is protected with state-of-the-art encryption and security measures.',
    icon: Shield,
  },
  {
    name: 'Automated Workflows',
    description: 'Save time with intelligent automation of repetitive tasks.',
    icon: Clock,
  },
  {
    name: '24/7 Support',
    description: 'Our dedicated support team is always ready to assist you.',
    icon: MessageSquare,
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful Features to Boost Your Productivity
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover how our tools can transform your workflow and drive success.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-md mb-4">
                <feature.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  )
}