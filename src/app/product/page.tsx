import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa'; // Import the FontAwesome arrow icon

const Product = () => {
  return (
   
<section  className='mt-28'>
 <div className="flex justify-center m-4 p-4">
  <h1 className="text-black font-semibold text-center font-Ag text-3xl">
    Our Products
  </h1>
</div>

<div className='flex items-center justify-center w-full whitespace-nowrap'>
  <h3 className='bg-lime-50 h-16 w-16 font-semibold underline text-2xl p-4 ml-4 lg:ml-24 flex items-center justify-center'>
    Top
  </h3>
  <h3 className='font-semibold text-slate-500 mx-2 text-lg sm:text-2xl'>
    Bottom
  </h3>
  <h3 className='font-semibold text-slate-500 mx-2 text-lg sm:text-2xl'>
    Dress
  </h3>
  <h3 className='font-semibold text-slate-500 mx-2 text-lg sm:text-2xl'>
    Set
  </h3>
  <h3 className='font-semibold text-slate-500 mx-2 text-lg sm:text-2xl'>
    Knit
  </h3>
  <h3 className='font-semibold text-slate-500 mx-2 text-lg sm:text-2xl'>
    Outer
  </h3>
</div>




{/* Cards Container */}
<div className="container mx-auto p-4 m-4  bg-lime-50">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-slate-50 gap-4 ">
    
    {/* First Card */}
    <div className="flex flex-col justify-center items-center  rounded-lg">
      <Image 
        src="/images/frame4 (1).png" 
        alt="A description of the image"
        width={397}
        height={496}
        className="m-3 p-3 object-cover"
      />
      <p className="text-center text-lg font-semibold p-1 m-1">Eto V Neck Yellow</p>
      <p className="text-center text-lg font-semibold p-1 m-1">Rp. 129.000</p>
    </div>

    {/* Second Card */}
    <div className="flex flex-col justify-center items-center rounded-lg">
      <Image 
        src="/images/frame4 (2).png" 
        alt="A description of the image"
        width={397}
        height={496}
        className="m-3 p-3 object-cover"
      />
      <p className="text-center text-lg font-semibold p-1 m-1">Macaroon Dry Half</p>
      <p className="text-center text-lg font-semibold p-1 m-1">Rp. 139.000</p>
    </div>

    {/* Third Card */}
    <div className="flex flex-col justify-center items-center rounded-lg">
      <Image 
        src="/images/frame4 (3).png" 
        alt="A description of the image"
        width={397}
        height={496}
        className="m-3 p-3 object-cover"
      />
      <p className="text-center text-lg font-semibold p-1 m-1">Wave Stripe Hally</p>
      <p className="text-center text-lg font-semibold p-1 m-1">Rp. 130.000</p>
    </div>

    {/* Fourth Card */}
    <div className="flex flex-col justify-center items-center  rounded-lg">
      <Image 
        src="/images/frame4 (4).png" 
        alt="A description of the image"
        width={397}
        height={496}
        className="m-3 p-3 object-cover"
      />
      <p className="text-center text-lg font-semibold p-1 m-1">Eve Punching Floral</p>
      <p className="text-center text-lg font-semibold p-1 m-1">Rp. 229.000</p>
    </div>

    {/* Fifth Card */}
    <div className="flex flex-col justify-center items-center rounded-lg">
      <Image 
        src="/images/frame4 (5).png" 
        alt="A description of the image"
        width={397}
        height={496}
        className="m-3 p-3 object-cover"
      />
      <p className="text-center text-lg font-semibold p-1 m-1">Floral Waffle Tee</p>
      <p className="text-center text-lg font-semibold p-1 m-1">Rp. 119.000</p>
    </div>

    {/* Sixth Card */}
    <div className="flex flex-col justify-center items-centerg rounded-lg">
      <Image 
        src="/images/frame7.png" 
        alt="A description of the image"
        width={397}
        height={496}
        className="mr-3 p-3 object-cover"
      />
      <p className="text-center text-lg font-semibold p-1 m-1">Snap Pure Blouse</p>
      <p className="text-center text-lg font-semibold p-1 m-1">Rp. 225.000</p>
    </div>

  </div>
  
  <div className="flex justify-center items-center">
  <Link href="/collection">
  <button className="p-2 m-4 flex justify-center items-center rounded-2xl bg-white hover:bg-gray-300">
    Show More <FaArrowRight className="ml-2 h-5 w-5" />
  </button>
  </Link>
</div>
 
</div>
  </section>

  );
};

export default Product;
