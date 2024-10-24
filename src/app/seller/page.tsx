import Image from 'next/image';

const BestSeller = () => {
  return (
    <section  className='mt-32' >
      {/* Section Title */}
      <div className="flex justify-center m-4 p-4">
        <h1 className="text-black font-semibold text-center text-3xl">
          Best Seller
        </h1>
      </div>

      {/* Cards Container */}
      <div className="container mx-auto p-4 m-4 shadow-lg box-shadow-lime bg-white-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
          
          {/* First Card */}
          <div className="flex flex-col justify-center items-center shadow-lg rounded-lg">
            <Image 
              src="/images/frame7.png" 
              alt="A description of the image"
              width={397}
              height={496}
              className="m-3 p-3 object-cover"
            />
            <p className="text-center text-lg font-semibold p-1 m-1">Euphoria Crop Blouse</p>
            <p className="text-center text-lg font-semibold p-1 m-1">Rp.125.000</p>
          </div>
          
          {/* Second Card */}
          <div className="flex flex-col justify-center items-center shadow-lg rounded-lg">
            <Image 
              src="/images/frame8.png" 
              alt="A description of the image"
              width={397}
              height={496}
              className="m-3 p-3 object-cover"
            />
            <p className="text-center text-lg font-semibold p-1 m-1">Venus Halter Dress</p>
            <p className="text-center text-lg font-semibold p-1 m-1">Rp. 180.000</p>
          </div>

          {/* Third Card */}
          <div className="flex flex-col justify-center items-center shadow-lg rounded-lg">
            <Image 
              src="/images/frame9.png" 
              alt="A description of the image"
              width={397}
              height={496}
              className="m-3 p-3 object-cover"
            />
            <p className="text-center text-lg font-semibold p-1 m-1">Snap Pure Blouse</p>
            <p className="text-center text-lg font-semibold p-1 m-1">Rp. 129.000</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BestSeller;
