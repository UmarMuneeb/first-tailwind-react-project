import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import { useState } from 'react'
import Button from '../components/Button'
import {shoes,statistics} from '../constants'
import ShoeCard from '../components/ShoeCard'
const text="Shop Now"


const Hero = () => {
  const[bigShoeImg,setbigShoeImg]=useState(bigShoe1)
  return (
    <section id="home"
      className="w-full flex xl:flex-row  
      flex-col justify-center min-h-screen 
      max-container">
        <div className="relative xl:w-2/5 
        flex flex-col justify-center items-start
         w-full max-xl:padding-x pt-28">
          <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
          <h1 className='mt-10 font-falanquin text-8xl max-sm:text-[72px]
          max-sm:leading-[82] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
            <br/>
            <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm'>Disover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
          <Button label={text} iconURL={arrowRight}/>
          <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
              {statistics.map((stat,index)=>(
                <div key={stat.label}>
                  <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                  <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
                </div>
              ))}
          </div>
        </div>
        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen 
        max-xl:py-40 bg-primary bg-hero bg-cover'>
            <img src={bigShoeImg}
            alt='Show Collection'
            width={610}
            height={500}
            className='object-contain z-10'>
            </img>
            <div className='flex jus sm:gap-6 gap-4 absolute -bottom-[-3%]
              sm:left-[18%] max-sm:px-6'>
              {shoes.map((shoe)=>(
                <div key={shoe.id}>
                  <ShoeCard
                   imgURL={shoe}
                   changeBigShoeImage={(shoe)=>(setbigShoeImg(shoe))}
                   bigShoeImg={bigShoeImg}/>
                </div>
              ))}
            </div>
        </div>

    </section>
  )
}

export default Hero