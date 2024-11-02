import Image from 'next/image'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function SaasHero() {
    return (
        <div className="bg-gradient-to-br from-indigo-100 to-white min-h-screen flex items-center">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="absolute top-4 right-4">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold border border-indigo-600 hover:bg-indigo-50 transition duration-300 ease-in-out">
                                Sign In
                            </button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                            Streamline Your Workflow with Our All-in-One Solution
                        </h1>
                        <p className="text-xl text-gray-600">
                            Empower your team to collaborate efficiently and increase productivity
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center justify-center">
                                Get Started Free
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border border-indigo-600 hover:bg-indigo-50 transition duration-300 ease-in-out">
                                Schedule a Demo
                            </button>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                            <ul className="space-y-2">
                                {['Real-time Collaboration', 'Analytics Dashboard', '24/7 Support'].map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 italic">
                                &ldquo;This solution has transformed our team&apos;s productivity. Highly recommended!&rdquo;
                            </p>
                            <p className="text-gray-800 font-semibold mt-2">- Jane Doe, CEO of TechCorp</p>
                        </div>
                    </div>
                    <div className="relative h-96 sm:h-[32rem]">
                        <Image
                            src="/placeholder.png"
                            alt="Product interface"
                            fill
                            className="rounded-lg shadow-2xl object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}