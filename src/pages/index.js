import Image from 'next/image'
import { Inter } from 'next/font/google'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className="bg-white container mx-auto xl:mx-0 p-0 xl:p-5 w-100 "
    >
       <SectionOne />
       <SectionTwo />
       <SectionThree />
       <SectionFour />
       <SectionFive />
    </main>
  )
}
