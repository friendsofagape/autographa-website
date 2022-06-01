import { Popover } from '@headlessui/react'
import MobileMenu from '@/layout/MobileMenu'

import { MenuIcon } from '@heroicons/react/outline'
import AutographaLogo from '../../public/logos/autographa.svg'

export default function Menu() {
  return (
    <Popover className="relative sticky top-0 z-50 bg-primary ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b border-white border-opacity-20 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <AutographaLogo className="text-white h-10" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
            </Popover.Button>
          </div>

          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-base font-medium text-white hover:text-gray-900">
              Features
            </a>
            <a href="https://autographa-docs.netlify.app/" className="text-base font-medium text-white hover:text-gray-900">
              Docs
            </a>
            {/* <a href="#" className="text-base font-medium text-white hover:text-gray-900">
              Success Stories
            </a> */}
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <a href="#" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-900">
              Try It
            </a> */}
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary hover:bg-white hover:text-secondary"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      <MobileMenu />

    </Popover>
  )
}
