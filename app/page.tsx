import CircularGallery from "@/components/CircularGallery";
import ResumeDownloadBtn from "@/components/ResumeDownloadBtn";
import Image from "next/image";
import React from 'react'

const page = () => {
  return (
    /* Flex container with column direction, centered items, minimum height of the screen, and padding on the y-axis
       py-2 adds padding of 0.5rem (8px) on the top and bottom*/
    <main className="">
      <section className="flex-row items-center justify-center">
        <div className="text-center"> 
          <h1 className="mb-6">Hey, I'm just Ken</h1>
          <p className="text-lg max-w-lg mx-auto font-inter">
            Connect with me on LinkedIn or check out my GitHub for my latest projects and contributions.
          </p>
          <div className= "flex-row justify-center items-center space-x-4">
            <button className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full mt-6">
              <a href="/resume.pdf" download>
                LinkedIn
              </a>
            </button>
            <button className="bg-white hover:bg-purple-500 text-black font-bold py-2 px-4 rounded-full mt-6">
              <a href="/resume.pdf" download>
                GitHub
              </a>
            </button>
            
          </div>
        </div>
        <div className="hide-on-mobile">
          <Image
            src="/images/ken-duong.png"
            alt="Ken Duong"
            width={550}
            height={550}
          />
        </div>
      </section>

      <section className="justify-center items-center bg-dark">
        <div className="text-white mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-8">About Me</h1>
          <p className="text-lg max-w-4xl">
            Hello! My name is Ken Duong, a junior majoring in Computer System Engineering at Arizona State University.
            I was born in <a href="https://vietnam.travel/places-to-go/southern-vietnam/ho-chi-minh-city" target="_blank" rel="noopener noreferrer"><span className="text-blue-500 font-bold hover:underline">Ho Chi Minh City</span></a>, Vietnam, the origin country of the famous dish “pho.” 
            I am excited about exploring many new things, especially visiting foreign countries and immersing myself in their cultures. 
            Going into a new environment helped me learn to adapt quickly and be ready and courageous when facing challenges.
            I am interested in everything related to music, such as concerts, genres like Hip-hop, R&B, and, most recently, alternative rock and pop punk. My favorite artists currently include Dog Park, Malcolm Todd, and Daniel Caesar. 
          </p>
        </div>

        <div className="relative h-[600px] w-full overflow-hidden">
          <CircularGallery
            bend={-0.8}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.09}
            // Optionally load a custom font for the labels.
            // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
            fontUrl=""
            font="bold 30px Orbitron"
            scrollSpeed={0.5}
            itemScale={1}
          />
        </div>
      </section>

      <section className="items-center justify-center bg-dark">
        <div className="flex flex-col items-center text-white py-12">
          <h1 className="text-4xl font-bold mb-8">Resume</h1>
          <p className="text-lg mb-8 text-center max-w-2xl">
            Here is my resume, detailing my experience and skills.
          </p>
          <ResumeDownloadBtn />
        </div>
      </section>
      
    </main>
  )
}

export default page
