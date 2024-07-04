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
    description: "the cat is cute",
    time: "15m ago",
    icon: "iggy.png",
    color: "#00C9A7",
  },
  {
    name: "Sahil",
    description: "you launched without me?",
    time: "12m ago",
    icon: "sahil.png",
    color: "#00C9A7",
  },
  {
    name: "yelo",
    description: "when can I call it",
    time: "10m ago",
    icon: "yelo.jpg",
    color: "#00C9A7",
  },
  {
    name: "Ansem",
    description: "let me run the socials dawg",
    time: "7m ago",
    icon: "ansem.jpg",
    color: "#00C9A7",
  },
  {
    name: "Jason Derulo",
    description: "bought some",
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
    navigator.clipboard.writeText('soon...');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the message after 2 seconds
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-orange-200 overflow-clip relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
      }}
    >
      <div className='absolute top-0 left-0 right-0 border-y-2 border-black py-2 text-3xl md:text-7xl rotate-45 translate-x-[20%] translate-y-[50%] font-custom'>
        <Marquee speed={170}>
          $maxi $maxi $maxi $maxi $maxi $maxi $maxi $maxi $maxi $maxi $maxi $maxi $maxi $maxi $maxi&nbsp;
        </Marquee>
      </div>
      
      <div className='absolute top-5 left-5 right-5 z-20'>
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
      
      <div className="absolute top-5 left-5 flex flex-col items-center z-10">
        <div className="flex flex-row">
          <a href="https://x.com/fairydotsol" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={Xlogo} alt="Xlogo" className="w-10 h-10 rounded-md" />
          </a>
          <a href="https://t.me/fairysolana" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={TG} alt="Tg logo" className="w-10 h-10" />
          </a>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div
          className="flex justify-center items-center h-full"
        >
          <motion.img
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            src="/maxi.png"
            alt="Tunes"
            className="-mt-[7.5%] w-[50%] md:w-[30%] h-auto border rounded-md"
          />
        </div>
      </div>
      
      <div className='absolute bottom-5 left-5 right-5 flex justify-center'>
        <div className='flex flex-col sm:flex-row justify-center bg-slate-100 rounded-xl md:rounded-full z-10 items-center gap-1 md:gap-4 px-5 py-3 max-w-full border-2 border-slate-400'>
          <button
            onClick={handleCopy}
            className="text-sm bg-orange-400 text-white py-2 px-4 rounded-full md:hover:bg-orange-500 border-2 border-white transition-colors duration-300 z-10 whitespace-nowrap"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <div className='text-xs sm:text-sm md:text-base overflow-x-auto whitespace-nowrap'>
            soon...
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;