import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center
      max-xl:flex-col-reverse gap-16 max-container
    ">
      <div className="flex-1">
          <img src={offer}
            width={773}
            height={687}
            className="object-contain w-full"
          />
      </div>
      <div className="flex justify-between flex-col">
        
         <h2 className='font-falanquin text-4xl captilize font-bold max-w-lg'>
            <span className='text-coral-red'> Special </span> 
            <span className='text-coral-red'>Offer </span>
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            Embark on a shopping journey that redefines your 
            experience with unbeatable deals. Fron premier 
            selection to incredible savings, we offer to 
            unparalleled value that sets us apart.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill
            your unique desires, surpassing the loftiest expectations.
            Your journey with us is nothing short of exceptional.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label='Shop Now' iconURL={arrowRight}/>
            <Button label='Learn More'
              iconURL=''
              backgroundColor="bg-black"
              borderColor="border-slate-gray"
            />
          </div>
      </div>

    </section>
  )
}

export default SpecialOffer