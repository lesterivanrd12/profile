
export default function CTA() {
    return (
      <div className="isolate bg-zinc-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="text-slate-100 block">Ready to dive in?</span>
            <span className="block text-white">Start your free trial today.</span>
          </h2>
          <div id="contact" className="flex lg:mt-0 lg:flex-shrink-0">
            <div className="mt-8 px-3 flex gap-x-4 sm:justify-center">
                  <a
                    href="#projects-section"
                    className="inline-block rounded-lg bg-indigo-600 px-10 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    HIRE
                    {/* <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span> */}
                  </a>
            </div>
            <div className="mt-8 px-3 flex gap-x-4 sm:justify-center">
                  <a
                    href="https://www.linkedin.com/in/lester-ivan-dalaguit-69282720b/"
                    target="_blank"
                    rel='noreferrer'
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-10 py-1.5 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                  >
                    LEARN MORE
                    {/* <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span> */}
                  </a>
            </div>
          </div>
        </div> 
      </div>
    )
  }
  