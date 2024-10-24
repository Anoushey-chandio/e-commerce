import Image from 'next/image';
import Link from 'next/link';

const Discount = () => {
  return (
    <section className='mt-28'>
      <div className="container mx-auto p-4 m-4 bg-lime-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Left Images */}
          <div className="flex justify-center ml-20 items-center">
            <Image 
              src="/images/image 3.png" 
              alt="A description of the image"
              width={242}
              height={269}
            />
          </div>

          <div className="flex justify-center items-center">
            <Image 
              src="/images/image 4.png" 
              alt="A description of the image"
              width={189}
              height={299}
            />
          </div>

          {/* Center part */}
          <div className="flex flex-col justify-center items-center p-4 text-center">
            <h1 className="font-semibold text-2xl lg:text-3xl mb-2">Get 50% Off</h1>
            <p className="text-base lg:text-lg text-gray-600 mb-4">
            for all new product purchases
            min. purchase Rp. 350.000
            </p>
            <Link href="/product">
  <button className="bg-gray-50 text-black px-4 py-2 rounded-2xl hover:bg-gray-300 transition">
    ShopNow
  </button>
</Link>
          </div>

          {/* Right Images */}
          <div className="flex justify-center items-center">
            <Image 
              src="/images/image 5.png" 
              alt="A description of the image"
              width={459}
              height={259}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Discount;
