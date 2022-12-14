import Head from 'next/head'
import { TbBrandGithub, TbBrandLinkedin, TbDownload } from 'react-icons/tb'

export default function Home() {
  return (
    <div>
      <Head>
        <title>@kpostekk</title>
        <meta name="description" content="My portfolio page" />
        <meta name="theme-color" content="black" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <div className="w-screen h-screen relative overflow-clip">
        <img className="w-full h-full absolute object-cover" src="/cover.jpg" />
        <video className="w-full h-full absolute object-cover" autoPlay muted loop playsInline src="/waves.mp4" />
        <div className="w-full h-full absolute z-40">
          <div className="w-full h-full flex flex-col justify-center p-4 md:p-36 items-start gap-4 select-none">
            <div className="backdrop-blur bg-gray-800 bg-opacity-60 md:p-12 p-8 rounded-xl text-white grid gap-4">
              <h1 className="md:text-[44pt] text-[34pt] font-bold">@kpostekk</h1>
              <h2 className="italic">Krystian Postek - fullstack dev</h2>
              <p className="select-text">JavaScript/TypeScript, Python, MongoDB, Postgres, GraphQL</p>
              <a></a>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-stretch gap-2">
              <div className="flex gap-6 items-center text-[28pt] backdrop-blur bg-gray-800 bg-opacity-60 p-6 rounded-xl text-white">
                <a href="https://github.com/kpostekk">
                  <TbBrandGithub />
                </a>
                <a href="https://www.linkedin.com/in/kpostekk/">
                  <TbBrandLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
