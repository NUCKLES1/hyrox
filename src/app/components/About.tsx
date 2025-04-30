import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className="w-full pb-22 mt-22 h-auto lg:px-10">
    <div className="bg-[#ffed00] mx-auto p-4 text-4xl text-black uppercase w-88">
      <p>about the race</p>
    </div>
    <div className="w-full lg:flex">
      <div className="lg:w-[50%]">
        <div className="text-xl mt-20 pb-10 p-4">
          <p>
          HYROX combines both running & functional workout stations, where participants run 1km, followed by 1 functional workout station, repeated eight times.
          </p>
          <p className="mt-10">
          Each race is hosted indoors in expansive exhibition halls, creating an immersive and electrifying race, where your spectators can support you from the very beginning to the very end.
          </p>
          <p className="mt-10">
          This race format remains consistent across the globe, enabling global leaderboards & a cumulative World Championships at the end of each race season.
          </p>
          <p className="mt-10">
          Accommodating both professional athletes, and everyday fitness enthusiasts looking to take their training to the next level, HYROX is the sport for everybody.
          </p>
        </div>
      </div>
      <div className="w-[50%] max-sm:w-full max-sm:mt-22 max-sm:h-80 h-[110vh]">
        <Image src="/leg.jpg" width={100} height={100} alt="" className="w-full h-full object-cover"/> 
        </div>
    </div>
  </div>
  )
}

export default About