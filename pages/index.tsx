import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'

export default function Home() {
  return (
    <div>
      <Head>
        <title>@kpostekk</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="w-screen h-screen relative overflow-clip">
        <div className="w-full h-full absolute">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline src="/waves.mp4" />
        </div>
        <div className="w-full h-full absolute">
          <div className="w-full h-full flex flex-col justify-center p-6 md:p-36 items-start gap-4 select-none">
            <div className="backdrop-blur-sm bg-gray-800 bg-opacity-40 p-6 rounded-xl text-white grid gap-4">
              <h1 className="md:text-[44pt] text-[34pt] font-bold">@kpostekk</h1>
              <h2 className="italic">Krystian Postek - fullstack dev</h2>
            </div>
            <div className="flex gap-2 text-[24pt] backdrop-blur-sm bg-gray-800 bg-opacity-40 p-6 rounded-xl text-white">
              <a className="hover:text-sky-600" href="https://github.com/kpostekk">
                <TbBrandGithub />
              </a>
              <a className="hover:text-sky-600" href="https://www.linkedin.com/in/kpostekk/">
                <TbBrandLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
