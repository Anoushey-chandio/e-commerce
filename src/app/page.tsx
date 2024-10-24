import Image from 'next/image';
import BestSeller from './seller/page'; // Adjusted path
import Collection from './collection/page';
import Discount from './discount/page';
import Product from './product/page';
import Feature from './feature/page';
import Feedback from './feedback/page';
import Signup from './signup/page';

const Hero = () => {
  return (
    <>
      <section className='mt-16' >
     

        <div className="container mx-auto p-4 bg-lime-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mx-10">
            
            {/* Left Images */}
            <div className="flex justify-center items-center">
              <Image 
                src="/images/image 21.png" 
                alt="A description of the image"
                width={151}
                height={536}
                className="m-3 p-3 object-cover"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image 
                src="/images/image 22.png" 
                alt="A description of the image"
                width={230}
                height={525}
                className="m-3 p-3 object-cover"
              />
            </div>

            {/* Center part */}
            <div className="flex flex-col justify-center items-center p-4">
              <h1 className="font-semibold text-3xl mb-2">MEJIWOO</h1>
            <h1 className="font-semibold text-3xl mb-2">미지우 </h1>
            <div className="border-t border-gray-600 w-full my-4"></div>

              <p className="text-xs font-extralight text-gray-900 mb-4 ml-2"><h3>make your everyday look prettier with MEJIWOO Korean Made</h3></p>
              
            </div>

            {/* Right Images */}
            <div className="flex justify-center items-center">
              <Image 
                src="/images/image 20.png" 
                alt="A description of the image"
                width={208}
                height={535}
                className="m-3 p-3 object-cover"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image 
                src="/images/image 10.png" 
                alt="A description of the image"
                width={194}
                height={537}
                className="m-3 p-3 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Render collection Section */}
      <section>
        <Collection />
      </section>

      {/* Render BestSeller Section */}
      <section>
        <BestSeller />
      </section>

      {/* Render discount Section */}
      <section>
        <Discount />
      </section>

        {/* Render discount Section */}
        <section>
        <Product />
      </section>

      {/* Render feature Section */}
      <section>
        <Feature />
      </section>

      {/* Render feedback Section */}
      <section>
        <Feedback />
      </section>

      {/* Render signup Section */}
      <section>
        <Signup />
      </section>
    </>
  );
};

export default Hero;


















    
