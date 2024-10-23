import { SiGoogle, SiFacebook } from 'react-icons/si';

const Signup = () => {
  return (
    <section className='bg-lime-50 p-4 m-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
      
      {/* Left Side */}
      <div className='flex flex-col justify-center'>
        <h1 className='font-bold text-4xl p-2 mb-10 mt-14 ml-4 md:ml-16'>
          Get more benefits <br />
          by Sign Up & Join <br />
          Mejiwoo Community!
        </h1>
        <div className='mt-14'>
          <p className='text-lg text-gray-900 font-semibold p-2 flex items-center'>
            <span className='mr-2'>♦</span>
            FREE Special Gift to a new member
          </p>
          <p className='text-lg text-gray-900 font-semibold p-2 flex items-center'>
            <span className='mr-2'>♦</span>
            Get 2x JIWOO Points to purchase items
          </p>
          <p className='text-lg text-gray-900 font-semibold p-2 flex items-center'>
            <span className='mr-2'>♦</span>
            Get special voucher code every month
          </p>
          <p className='text-lg text-gray-900 font-semibold p-2 flex items-center'>
            <span className='mr-2'>♦</span>
            Claim Voucher Disc. Up To 50%
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex flex-col justify-center'>
        <form className='p-6'>
          <input
            type='text'
            name='name'
            className='box border border-gray-300 rounded-md p-2 mb-4 w-full outline-white'
            placeholder='Enter your user name'
            required
          />

          <input
            type='email'
            name='email'
            className='box border border-gray-300 rounded-md p-2 mb-4 w-full outline-white'
            placeholder='Enter your email'
            required
          />

          <input
            type='password'
            name='password'
            className='box border border-gray-300 rounded-md p-2 mb-4 w-full outline-white'
            placeholder='Enter your Password'
            required
          />
          <br />
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 mr-2" />
            <p className='ml-2'>I agree to all the Terms and Privacy Policy</p>
          </label>

          <div className="flex justify-center items-center">
            <button className="p-2 m-4 flex justify-center items-center font-medium rounded-2xl bg-white hover:bg-gray-100">
              SIGNUP
            </button>
          </div>
          
          <p className='flex justify-center items-center'>
            ________________________Or__________________________
          </p>
          <br />

          <div className="flex justify-center items-center">
            <button className="p-2 m-4 flex justify-center items-center font-medium rounded-2xl bg-white shadow-md">
              <SiGoogle className="mr-2" size={20} />
              SIGNUP WITH GOOGLE
            </button>
          </div>

          <div className="flex justify-center items-center">
            <button className="p-2 m-2 flex justify-center items-center font-medium rounded-2xl bg-white shadow-md">
              <SiFacebook className="mr-2" size={20} />
              SIGNUP WITH FACEBOOK
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
