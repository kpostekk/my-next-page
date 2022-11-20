import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TbBrandGithub, TbBrandLinkedin, TbDownload } from 'react-icons/tb'

export default function Home() {
  return (
    <div>
      <Head>
        <title>@kpostekk</title>
        <meta name="description" content="My portfolio page" />
      </Head>
      <div className="w-screen h-screen relative overflow-clip">
        <img className="w-full h-full absolute object-cover" src="/cover.jpg" />
        <video className="w-full h-full absolute object-cover" autoPlay muted loop playsInline src="/waves.mp4" />
        <div className="w-full h-full absolute">
          <div className="w-full h-full flex flex-col justify-center p-6 md:p-36 items-start gap-2 select-none">
            <div className="backdrop-blur bg-gray-800 bg-opacity-60 p-12 rounded-xl text-white grid gap-4">
              <h1 className="md:text-[44pt] text-[34pt] font-bold">@kpostekk</h1>
              <h2 className="italic">Krystian Postek - fullstack dev</h2>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-stretch gap-2">
              <div className="flex gap-6 items-center text-[24pt] backdrop-blur bg-gray-800 bg-opacity-60 p-6 rounded-xl text-white">
                <a className="hover:text-sky-600" href="https://github.com/kpostekk">
                  <TbBrandGithub />
                </a>
                <a className="hover:text-sky-600" href="https://www.linkedin.com/in/kpostekk/">
                  <TbBrandLinkedin />
                </a>
              </div>
              <div className="text-[18pt] backdrop-blur bg-gray-800 bg-opacity-60 p-6 rounded-xl text-white">
                <a href="/cv.pdf" className="hover:text-sky-600">
                  <p className="flex items-center gap-1 italic"><TbDownload /> curriculum vitae</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
