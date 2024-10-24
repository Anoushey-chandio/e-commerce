import Image from 'next/image';
import { FaStar } from 'react-icons/fa'; // Importing FontAwesome star icon

const Feedback = () => {
  return (
    <section className='mt-28' >
      <div className="flex justify-center m-4 p-4">
        <h1 className="text-black font-bold text-center font-Ag text-3xl">
          What They Said
        </h1>
      </div>

      <div className="container mx-auto p-4 m-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
          
          {/* First Card */}
          <div className="flex flex-col justify-center items-center shadow-lg rounded-lg bg-lime-50">
            <Image 
              src="/images/f-b1.png" 
              alt="A description of the image"
              width={328}
              height={410}
              className="m-3 p-3 object-cover"
            />
            <p className="text-center text-lg font-semibold p-2 m-2">Essence Long Denim</p>
            <div className="flex space-x-1">
              <FaStar className="h-6 w-6 text-yellow-300" />
              <FaStar className="h-6 w-6 text-yellow-300" />
              <FaStar className="h-6 w-6 text-yellow-300" />
              <FaStar className="h-6 w-6 text-yellow-300" />
              <FaStar className="h-6 w-6 text-yellow-300" />
            </div>
            <h3>-Lisa-</h3>
            <p className="p-2 m-2">
              “I like these pants. They fit perfectly for me. 
              The material is so comfortable that it can be used anywhere. 
              It is also suitable to be combined with all types of my clothes.”
            </p>
          </div>

          {/* Second Card */}
          <div className="flex flex-col justify-center items-center shadow-lg rounded-lg bg-lime-50">
            <Image 
              src="/images/f-b2.png" 
              alt="A description of the image"
              width={328}
              height={410}
              className="m-3 p-3 object-cover"
            />
            <p className="text-center text-lg font-semibold p-2 m-2">Andcable Knit Top</p>
            <div className="flex space-x-1">
              <FaStar className="h-6 w-6 text-yellow-300" />
              <FaStar className="h-6 w-6 text-yellow-300" />
              <FaStar className="h-6 w-6 text-yellow-300" />
              <FaStar className="h-6 w-6 text-yellow-300" />
              <FaStar className="h-6 w-6 text-yellow-300" />
            </div>
            <h3>-Celine-</h3>
            <p className="p-2 m-2">
              “I like knitted materials. I bought this shirt because the design
              is very pretty and comfortable to wear casually. The material is also neat
              and good. I love shopping here and I’ll be a frequent customer at this store.”
            </p>
          </div>

          {/* Third Card */}
          <div className="flex flex-col justify-center items-center shadow-lg rounded-lg bg-lime-50">
            <Image 
              src="/images/f-b3.png" 
              alt="A description of the image"
              width={329}
              height={411}
              className="m-3 p-3 object-cover"
            />
            <p className="text-center text-lg font-semibold p-2 m-2">Candy Stripe Boxy</p>
            <div className="flex space-x-1">
              <FaStar className="h-6 w-6 text-yellow-300" />
              <FaStar className="h-6 w-6 text-yellow-300" />
              <FaStar className="h-6 w-6 text-yellow-300" />
              <FaStar className="h-6 w-6 text-yellow-300" />
              <FaStar className="h-6 w-6 text-yellow-300" />
            </div>
            <h3>-Tiffany-</h3>
            <p className="p-2 m-2">
              “This shirt is very pretty and nice. The color is cute too.
              At first, I bought it as a present for my friend but I also wanted
              it, so we ended up going out wearing twin clothes haha.”
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Feedback;

