import Image from 'next/image';

const Feature = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Our Featured Collections</h1>
      <div className="flex justify-between items-center">
        {/* Left Column */}
        <div className="flex flex-col items-center">
          <Image 
            src="/images/grid5.png" 
            alt="Left Image 1" 
            width={397} 
            height={396}
            className="mb-2" 
          />
          <Image 
            src="/images/grid4.png" 
            alt="Left Image 2" 
            width={397} 
            height={396} 
          />
        </div>

        {/* Center Column */}
        <div>
          <Image 
            src="/images/grid3.png" 
            alt="Center Image" 
            width={398} 
            height={690} 
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center">
          <Image 
            src="/images/grid2.png" 
            alt="Right Image 1" 
            width={397} 
            height={396}
            className="mb-2" 
          />
          <Image 
            src="/images/grid1.png" 
            alt="Right Image 2" 
            width={397} 
            height={396} 
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
