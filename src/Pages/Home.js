/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
// import me from './img/me.jpg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills-section' },
  { name: 'Projects', href: '#projects-section' },
  { name: 'Contact', href: '#contact' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="isolate bg-zinc-900">
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-white hover:text-gray-200">
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <main>
        <div id='about' className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>

                <h1 className="text-white text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Front-end Developer
                </h1>
                
                <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-center">
                  I'm Lester Ivan, a Front-end Developer based in the Philippines who builds modern-day UI components. My knowledge leveraged in using HTML5, CSS, Javascript, and React JS library for building user interfaces. I am working closely with testers, designers, web designers, and project managers to create a robust and effective application.
                </p>

                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href="#projects-section"
                    className="scroll-smooth inline-block rounded-lg bg-indigo-600 px-10 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    HIRE
                    {/* <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span> */}
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
