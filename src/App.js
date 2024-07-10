import React, { useState } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from './bg1.png'; // Ensure the correct path to your bg.png';
import Xlogo from "./XLogo.jpg";
import TG from "./TG.png";
import { cn } from "./lib/utils";
import { AnimatedList } from './animated-list';
import Marquee from "react-fast-marquee"; 

let notifications = [
  {
    name: "Iggy Azalea",
    description: "YOU FUCKIN BITCH!!",
    time: "15m ago",
    icon: "iggy.png",
    color: "#00C9A7",
  },
  {
    name: "yelo",
    description: "Yea so just call me sometime📞📞",
    time: "10m ago",
    icon: "yelo.jpg",
    color: "#00C9A7",
  },
  {
    name: "Ansem",
    description: "Na I don't have a kid",
    time: "7m ago",
    icon: "ansem.jpg",
    color: "#00C9A7",
  },
  {
    name: "Jason Derulo",
    description: "Dinner at 7??",
    time: "5m ago",
    icon: "JasonDerulo.jpg",
    color: "#00C9A7",
  },
];

notifications = Array.from({ length: 1 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl overflow-hidden"
          style={{
            backgroundColor: color,
          }}
        >
          <img src={icon} alt="Icon" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('updating...');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the message after 2 seconds
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-zinc-600 overflow-clip relative"
    >
      
      <div className='absolute top-5 left-5 right-5 z-20'>
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>

      <div className='absolute top-0 left-0 right-0 border-y-4 bg-white border-zinc-950 py-2 text-3xl md:text-7xl rotate-45 translate-x-[20%] translate-y-[50%] font-custom'>
        <Marquee speed={170}>
          $GIGANA $GIGANA $GIGANA $GIGANA $GIGANA $GIGANA $GIGANA $GIGANA $GIGANA $GIGANA $GIGANA&nbsp;
        </Marquee>
      </div>

      <div className='absolute top-[10%] text-center font-custom text-7xl text-zinc-300 z-10'>
        GIGANA
      </div>
      
      <div className="absolute bottom-10 right-10 flex flex-col items-center z-10">
        <div className="flex flex-row">
          <a href="https://x.com/" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={Xlogo} alt="Xlogo" className="w-14 h-14 rounded-md" />
          </a>
          <a href="https://t.me/" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={TG} alt="Tg logo" className="w-14 h-14" />
          </a>
        </div>
      </div>
      <div className='grid gap-4'>
        <div className="flex flex-col justify-center items-center">
          <div
            className="flex justify-center items-center h-full"
          >
            <img
              src="/giga.png"
              alt="Tunes"
              className="-mt-[7.5%] w-[55%] md:w-[35%] h-auto border rounded-md"
            />
          </div>
        </div>
        
        <div className='md:absolute md:bottom-10 md:left-10 flex justify-center'>
          <div className='flex flex-col sm:flex-row justify-center bg-slate-100 rounded-xl md:rounded-full z-10 items-center gap-1 md:gap-4 px-5 py-3 max-w-full border-2 border-slate-400'>
            <button
              onClick={handleCopy}
              className="text-sm bg-zinc-700 text-white py-2 px-4 rounded-full md:hover:bg-zinc-800 border-2 border-white transition-colors duration-300 z-10 whitespace-nowrap"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <div className='text-xs sm:text-sm md:text-base overflow-x-auto whitespace-nowrap'>
              updating...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;