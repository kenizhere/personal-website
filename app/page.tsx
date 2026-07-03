import CircularGallery from "@/components/CircularGallery";
import GitHubBtn from "@/components/GitHubBtn";
import LinkedInBtn from "@/components/LinkedInBtn";
import ResumeDownloadBtn from "@/components/ResumeDownloadBtn";
import ViewPDF from "@/components/ViewPDF";
import Image from "next/image";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import React from 'react'
import ViewPDFWrapper from "@/components/ViewPDFWrapper";





const page = () => {
  return (
    /* Flex container with column direction, centered items, minimum height of the screen, and padding on the y-axis
       py-2 adds padding of 0.5rem (8px) on the top and bottom*/
    <main className="">
      <section className="flex-row items-center justify-center px-4 py-2">
        <div className="text-center"> 
          <h1 className="mb-6">Hey, I'm just Ken</h1>
          <p className="text-lg max-w-lg mx-auto font-inter">
            Connect with me on LinkedIn or check out my GitHub for my latest projects and contributions.
          </p>
          <div className= "flex-row justify-center items-center space-x-5">
            <LinkedInBtn />
            <GitHubBtn />
            
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

      <section className="justify-center items-center px-4 py-2 bg-dark mt-20">
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
            fontUrl="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            font="bold 30px Montserrat"
            scrollSpeed={0.5}
            itemScale={1}
          />
        </div>
      </section>

      <section className="items-center justify-center py-2 px-4 bg-dark mt-20">
        <div className="text-center text-white py-8 px-4">
          <h1 className="font-bold mb-8">Resume</h1>
          <p className="text-lg mb-8 text-center">
            Here is my resume, detailing my experience and skills.
          </p>
          <ResumeDownloadBtn />
        </div>
        <div className="mt-8">
          <ViewPDFWrapper filePath="/files/Duc Duy Lam (Ken) Duong_Resume.pdf"/>
        </div>
      </section>
    </main>
  )
}

export default page
