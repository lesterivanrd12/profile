import css from '../img/css.png';
import reactimg from '../img/reactimg.png';
import bootstrap from '../img/bootstrap.png';
import htmlimg from '../img/htmlimg.png';
import js from '../img/js.png';
import mongodb from '../img/mongodb.png';
import nodejs from '../img/nodejs.png';
import resume from '../assets/resume.pdf';

export default function Skills() {
    return (
      <div id='projects-section' className="relative overflow-hidden bg-white w-full pt-60">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src={reactimg}
                            alt="React JS"
                            className="h-300 w-full object-cover object-center animate-bounce"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={htmlimg}
                            alt="HTML"
                            className="h-300 w-full object-cover object-center animate-bounce"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={nodejs}
                            alt="Node JS"
                            className="z-50 h-300 w-full object-cover object-center animate-bounce"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={bootstrap}
                            alt="Bootstrap"
                            className="h-300 w-full object-cover object-center animate-bounce"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={css}
                            alt="CSS"
                            className="h-300 w-full object-cover object-center animate-bounce"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={js}
                            alt="Javascript"
                            className="h-300 w-full object-cover object-center animate-bounce"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={mongodb}
                            alt="MongoDB"
                            className="h-300 w-full object-cover object-center animate-bounce"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href={resume}
                  target="_blank"
                  rel='noreferrer'
                  className="flex w-fit rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >
                    DOWNLOAD RESUME
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="px-0.5 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                    </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }