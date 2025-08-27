import React from 'react'
import Navbar from './Navbar'
import Par from '../assets/Parfemium.png'
import mainImg from '../assets/main.png'
import Lemon from '../assets/LemonPar.png'
import Slider from './Slider'
import CryPar from '../assets/CryPar.png'
import Par3 from '../assets/3Par.png'
import GoldPar from '../assets/GoldPar.png'
import NaturePar from '../assets/NaturePar.png'
import PinkPar from '../assets/PinkPar.png'
import RichPar from '../assets/RichPar.png'
import Treasure from '../assets/Treasure.png'
import Footer from './Footer'

const Header = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <div className=' bg-[black]'>
      <div className="min-h-screen bg-[#000000] pb-[100px] bg-[radial-gradient(circle_at_34%,rgba(35,35,35,1)_5%,rgba(1,10,10,1)_45%)]">
        
          <div className=' flex justify-center gap-[120px] items-center'>
              <div className=' text-white flex flex-col justify-center items-start gap-[20px]'>
                  <h1 className=' text-6xl w-[760px] hover:text-[#ff8000] transition-all duration-[0.6s] font-extralight'>Elevate Your Spirit with Victory Scented Fragrances!</h1>
                  <p className=' text-2xl font-extralight hover:text-[#ff8000] transition-all duration-[0.6s] w-[500px]'>Shop now and embrace the sweet smell of victory with Local Face. </p>
                  <button className=' mt-[50px] px-6 py-3 rounded-xl text-white font-semibold 
                       bg-gradient-to-r from-[#842500] via-[#ab400a] to-[#d06330] 
                        hover:transform-gpu hover:scale-120 active:scale-80
                        transition-all duration-[0.5s] shadow-lg shadow-[#AB572D]/40'>Shop Now</button>
              </div>
              <img draggable="false" className=' w-[25%] hover:transform-gpu hover:scale-110 active:scale-90
                        transition-all duration-[0.5s] shadow-lg ' src={Par} alt="" />
      </div>
      
      </div>
      <main className=' relative flex justify-center '>
        <img className=' w-full opacity-30' src={mainImg} alt="" />
        <div className=' bg-black/20 backdrop-blur-[] absolute top-0 w-full h-[86vh] flex flex-col justify-center gap-[40px] items-center'>
          <h1 className=' text-[#c25119] text-5xl'>Welcome to Local Face </h1>
          <p className=' text-center text-[16px] text-[#FFFFFF] font-extralight w-[38%]'>Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire. Our curated collection, aptly named "Victory Scented," is a celebration of success and elegance, designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the tale of your achievements. At Local Face, we believe that every victory deserves a signature scent, and we are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey.</p>
        </div>
      </main>
      <section className=' h-[100vh]'>
        <div className=' flex '>
          <img className=' w-[40%]' src={Lemon} alt="" />
          <div className=' bg-[#000000] w-full flex flex-col gap-[30px] pt-[50px] items-center text-[white] pb-[100px] bg-[radial-gradient(circle_at_64%_33%,rgba(30,30,30,1)_15%,rgba(1,10,10,1)_55%)]'>
            <h1 className=' text-5xl hover:text-[#ff8000] transition-all duration-[0.6s]'>Our Values</h1>
            <p className=' w-[60%] text-xl font-extralight hover:text-[#ff8000] transition-all duration-[0.6s]'>        At Local Face, our perfume retail store is built on a foundation of passion and authenticity. We believe in celebrating the individuality of every customer, providing a diverse collection of scents that resonate with their unique personality and style. Our dedicated team of fragrance enthusiasts is committed to creating a welcoming and inclusive environment, where connections are forged, and inspiration thrives. </p>
            <p className=' w-[60%] text-xl font-extralight hover:text-[#ff8000] transition-all duration-[0.6s]'>        Embracing sustainability and continuous learning, Local Face strives to be more than just a shopping destination; we are a community that inspires and empowers individuals on their fragrance journey.
              
                   </p>
          </div>
            </div>
      </section>
      <section>
        <h1 className=' text-5xl text-[#AB572D] text-center'>Best selling products</h1>1
             <Slider/>
      </section>
      <section>
        <h1 className=' text-center text-[#AB572D] text-5xl'> Our Collections</h1>
        <div className=' py-[60px]'>
          <div className=' flex justify-center gap-[30px]'>
            <img className=' hover:transform-gpu hover:scale-107 active:rounded-4xl active:scale-80
                        transition-all duration-[0.5s]' src={CryPar} alt="" />
            <img className=' hover:transform-gpu hover:scale-107 active:rounded-4xl active:scale-80
                        transition-all duration-[0.5s]' src={Par3} alt="" />
          </div>
          <div className=' flex justify-center pt-[30px] gap-[30px]'>
            <img className=' hover:transform-gpu hover:scale-107 active:rounded-4xl active:scale-80
                        transition-all duration-[0.5s]' src={GoldPar} alt="" />
            <img className=' hover:transform-gpu hover:scale-107 active:rounded-4xl active:scale-80
                        transition-all duration-[0.5s]' src={NaturePar} alt="" />
          </div>
          <div className=' flex justify-center pt-[30px] gap-[35px]'>
            <img className=' hover:transform-gpu hover:scale-107 active:rounded-4xl active:scale-80
                        transition-all duration-[0.5s]' src={RichPar} alt="" />
            <img className=' hover:transform-gpu hover:scale-107 active:rounded-4xl active:scale-80
                        transition-all duration-[0.5s]' src={Treasure} alt="" />
            <img className=' hover:transform-gpu hover:scale-107 active:rounded-4xl active:scale-80
                        transition-all duration-[0.5s]' src={PinkPar} alt="" />
          </div>
        </div>
      </section>
      </div>
  )
}

export default Header