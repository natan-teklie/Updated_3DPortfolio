import React from "react";
import { words } from "../Constants";
import { Button } from "../components/Button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from "../components/HeroModels/Room";
import HeroLights from "../components/HeroModels/HeroLights";
import Particles from "../components/HeroModels/Particles";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP (()=>{
    gsap.fromTo('.hero-text h1',
      {y:50,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        stagger:0.2, 
        duration:1, 
        ease: 'power2.inOut'
      }
    )
  })
  const isTablet = useMediaQuery ({query: ' (Max-width:1024px) '});
  const isMobile = useMediaQuery ({query: ' (max-width: 768px) '})
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 ">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* Left:Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 ">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span> {word.text} </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-20">Hi, I am Natan a fullStack developer, ready to turn ideas into reality</p>
           
            <Button className = 'md:w-80 md:h-16 w-60 h-12' 
            id = ''
            text= 'See my work'/>
          </div>
        </header>
        {/* RIGHT: 3D Model */}
        <figure className="hero-3d-layout ">
<Canvas camera={{position:[0,0,15], fov:45}}>


<OrbitControls

enablePan= {false}
enableZoom={!isTablet}
maxDistance={20}
minDistance={5}
minPolarAngle={Math.PI/5}
maxPolarAngle={Math.PI/2}


/>
<HeroLights count = {100} />
<Particles/>
<group scale={isMobile?0.7:1} position={[0, -3.5,0]} rotation={[0, -Math.PI/4,0]}>


<Room/>
</group>

</Canvas>
        </figure>
      </div>
      {/* animated counter */}
      <AnimatedCounter/>
    </section>


  );
};

export default Hero;
