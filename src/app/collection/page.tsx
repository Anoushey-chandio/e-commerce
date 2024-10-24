import Image from 'next/image';

const Collection = () => {
  return (
    <section className='mt-28'>
      <div className="flex justify-center m-4 p-4">
        <h1 className="text-black font-semibold text-center font-Ag text-3xl">
          Season Collections
        </h1>
      </div>

      <div className="container mx-auto p-4 m-4 bg-white-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
          
          {/* First Card */}
          <div className="flex flex-col justify-center items-center shadow-lg rounded-lg">
            <Image 
              src="/images/Frame 4.png" 
              alt="A description of the image"
              width={397}
              height={496}
              className="m-3 p-3 object-cover"
            />
            <h2 className="text-center text-2xl text-black font-semibold p-2 m-2">Spring</h2>
            <button className="bg-slate-100 w-20 p-1 rounded-md m-3 text-2xl font-Ag hover:bg-lime-50">
              More
            </button>
          </div>
    
          {/* Second Card */}
          <div className="flex flex-col justify-center items-center shadow-lg rounded-lg">
            <Image 
              src="/images/Frame 5.png" 
              alt="A description of the image"
              width={397}
              height={496}
              className="m-3 p-3 object-cover"
            />
            <h2 className="text-center text-2xl text-black font-semibold p-2 m-2">Summer</h2>
            <button className="bg-slate-100 w-20 p-1 rounded-md m-3 text-2xl font-Ag hover:bg-lime-50">
              More
            </button>
          </div>
    
          {/* Third Card */}
          <div className="flex flex-col justify-center items-center shadow-lg rounded-lg">
            <Image 
              src="/images/Frame 6.png" 
              alt="A description of the image"
              width={397}
              height={496}
              className="m-3 p-3 object-cover"
            />
         <h2 className="text-center text-2xl text-black font-semibold p-2 m-2">Winter</h2>
            <button className="bg-slate-100 w-20 p-1 rounded-md m-3 text-2xl font-Ag hover:bg-lime-50">
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
