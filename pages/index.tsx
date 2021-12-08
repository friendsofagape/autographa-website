/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Menu from '@/layout/Menu'
import Feature from '@/components/Feature'

import AppleLogo from '../public/logos/apple.svg'
import WindowsLogo from '../public/logos/windows.svg'
import LinuxLogo from '../public/logos/linux.svg'

import { CodeIcon, PencilIcon, SupportIcon, CloudUploadIcon, GlobeIcon, GlobeAltIcon, DesktopComputerIcon, DatabaseIcon, CollectionIcon, TemplateIcon, StatusOfflineIcon, LibraryIcon } from '@heroicons/react/outline';


export default function Index() {
  return (
    <>
      <div className="pb-52 bg-primary bg-gradient-to-tr from-primaryDHue to-primaryLHue">
        <div className="container mx-auto">
          <Menu />
          <div className="py-40 text-center">
            <h1 className="my-5 text-white text-8xl uppercase font-bold tracking-wider text-shadow-xl">Autographa</h1>
            <p className="text-xl font-semibold leading-8">Scripture drafting and editing made simple</p>

            <div className="w-2/5 my-24 mx-auto flex">
              <div className="w-1/2 mx-10 items-center">
                <a
                  href="#"
                  className="whitespace-nowrap block items-center justify-center px-8 py-4 border border-transparent rounded-lg shadow-sm 
                            text-2xl font-bold text-secondary bg-white hover:text-white hover:bg-secondary "
                >
                  Try it online
                </a>
              </div>
              <div className="w-1/2 mx-10 flex flex-col items-center">
                <a
                  href="#"
                  className="whitespace-nowrap block items-center justify-center px-8 py-4 border border-transparent rounded-lg shadow-sm 
                            text-2xl font-bold text-white bg-secondary hover:text-secondary hover:bg-white"
                >
                  Download
                </a>
                <div className="flex gap-5 my-5">
                  <AppleLogo className="h-8 text-white" />
                  <WindowsLogo className="h-8 text-white" />
                  <LinuxLogo className="h-8 text-white" />
                </div>
                <span className="text-white font-medium tracking-wider">MacOSX, Windows, &amp; Linux</span>
              </div>
            </div>


            <ul className="grid grid-cols-4 w-2/3 mx-auto uppercase font-semibold cursor-pointer">
              <li className="text-white hover:text-secondary border-b border-white hover:border-secondary pb-6">Translation mode</li>
              <li className="relative border-b border-secondary hover:text-white hover:border-white">OBS mode<span className="absolute right-0 left-0 mx-auto w-24 p-1 px-2 rounded-full -mt-7 text-white font-bold text-xxs bg-highlight">coming soon</span></li>
              <li className="relative border-b border-secondary hover:text-white hover:border-white">Audio mode<span className="absolute right-0 left-0 mx-auto w-24 p-1 px-2 rounded-full -mt-7 text-white font-bold text-xxs bg-highlight">coming soon</span></li>
              <li className="relative border-b border-secondary hover:text-white hover:border-white">Machine Translation<span className="absolute right-0 left-0 mx-auto w-24 p-1 px-2 rounded-full -mt-7 text-white font-bold text-xxs bg-highlight">coming soon</span></li>
            </ul>

          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <img className="mx-auto -mt-80 w-2/3 rounded-xl shadow-lg" src="/images/editor.png" alt="" />
        <div className="mx-auto w-2/3 bg-secondary p-16 px-20 m-20 leading-loose text-2xl text-center text-white rounded-xl shadow-lg ">
          To equip the bible translation community with a free, state of the art, minimalist, yet effective alternative to existing USFM software designed specially with the technologically challenged Mother tongue translator (MTT) in mind.
        </div>
      </div>

      <div className="container mx-auto my-80">

        <h2 className="heading">Why another translation tool?</h2>

        <div className="my-40 grid grid-cols-2 items-center">
          <div className="px-40">
            <h3 className="heading">Free &amp; Open Source</h3>
            <p className="mb-20 prose">Autographa is free and open source and made available to all without any restrictions. Contributions are welcome!</p>
            <h3 className="heading">Cross-Platform</h3>
            <p className="prose">Autographa is available both as a desktop application (Windows, Linux and MacOS) and as a website so that you can work from anywhere.</p>
          </div>
          <div className="p-10 bg-primary bg-gradient-to-tr from-primaryDHue to-primaryLHue rounded-xl">
            <img className="rounded-xl shadow-xl" src="/images/editor-audio.png" alt="" />
          </div>
        </div>

        <div className="my-40 grid grid-cols-2 items-center">
          <div className="px-40 order-last">
            <h3 className="heading">User Centric</h3>
            <p className="mb-20 prose">The application is built from the ground up get you started with little or no training while enabling both beginners and vetrens to their best work!</p>
            <h3 className="heading">Performance</h3>
            <p className="prose">We use the latest technology to maximize performance and provide you with an uninterrupted work flow.</p>
          </div>
          <div className="p-10 bg-primary bg-gradient-to-tr from-primaryDHue to-primaryLHue rounded-xl">
            <img className="rounded-xl shadow-xl" src="/images/editor-audio.png" alt="" />
          </div>
        </div>

        <div className="my-40 grid grid-cols-2 items-center">
          <div className="px-40">
            <h3 className="heading">Multilingual</h3>
            <p className="mb-20 prose">Autographa&apos;s User Interface is localized into Hindi,Arabic, Portuguese and Spanish and it supports rendering and editing complex scripts like Awami Nastaliq (right to left).</p>
            <h3 className="heading">CCBT ready</h3>
            <p className="prose">Autographa has shown great success in being used on the field for translation projects using the Church Centric Bible Translation paradigm.</p>
          </div>
          <div className="p-10 bg-primary bg-gradient-to-tr from-primaryDHue to-primaryLHue rounded-xl">
            <img className="rounded-xl shadow-xl" src="/images/editor-audio.png" alt="" />
          </div>
        </div>




      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-40">
          <h2 className="heading">Features</h2>
          <div className="my-40 mx-auto grid grid-cols-3 gap-10">
            <Feature icon={<CodeIcon className="w-7" />} text="open source" ></Feature>
            <Feature icon={<PencilIcon className="w-7" />} text="USFM Editing" ></Feature>
            <Feature icon={<SupportIcon className="w-7" />} text="Translation Helps" ></Feature>
            <Feature icon={<CloudUploadIcon className="w-7" />} text="USFM Import" ></Feature>
            <Feature icon={<GlobeIcon className="w-7" />} text="Multi-language" tags={["LTR"]}></Feature>
            <Feature icon={<TemplateIcon className="w-7" />} text="Modular" tags={["OBS", "Audio", "MT"]}></Feature>
            <Feature icon={<StatusOfflineIcon className="w-7" />} text="offline mode" ></Feature>
            <Feature icon={<GlobeAltIcon className="w-7" />} text="Web App" ></Feature>
            <Feature icon={<DesktopComputerIcon className="w-7" />} text="Desktop App" tags={["Windows", "Mac OSX", "Linux"]} ></Feature>
            <Feature icon={<LibraryIcon className="w-7" />} text="Cross Platform" className="col-start-2"></Feature>
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="container mx-auto py-10">

        </div>
      </div>

    </>

  )
}
