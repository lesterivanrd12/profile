import CentrusFs from '../img/CentrusFs.png';
import IUNA from '../img/IUNA.png';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

// Model
const projects = [
    {
      id: 1,
      name: 'Centrus Financial Strategies',
      href: 'https://centrusfs.com/',
      imageSrc: {CentrusFs},
      imageAlt: "Centrus FS",
    },
    {
      id: 2,
      name: 'IUNA Biz',
      href: 'https://iuna.biz/',
      imageSrc: {IUNA},
      imageAlt: "IUNA Biz",
    },
    // More projects...
  ]
  

//   View
  export default function Projects() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Projects</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a
                        href={project.href}
                        target="_blank"
                        rel='noreferrer'>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {project.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }  