import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <section>
    <footer className="bg-gray-50 text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        
        {/* Column 1 */}
        <div className="text-center  md:text-left">
          <h2 className="font-bold text-2xl  mt-10 ml-5">MEJIWOO</h2>
          <h3 className="font-extralight  text-xl ml-5">미지우 </h3>
        </div>

        {/* Column 2 */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-4">About Us</h3>
          <ul>
            <li>News</li>
            <li>Official Store</li>
            <li>Company</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-4">Get Help</h3>
          <ul>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Payment</li>
            <li>Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#"><img src="/images/f-icon.png" alt="Google" className="w-6 h-6"/></a>
            <a href="#"><img src="/images/ins-1.png" alt="Facebook" className="w-6 h-6"/></a>
            <a href="#"><img src="/images/twt.png" alt="Instagram" className="w-6 h-6"/></a>
            <a href="#"><img src="/images/yt.png" alt="Twitter" className="w-6 h-6"/></a>
          </div>
        </div>

        {/* Column 5 */}
        <div className="border-t border-gray-600 mt-40">
          <div className="text-center">
            <p>Guide Terms & Conditions Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
    <div className="bg-black w-full h-12 flex items-center justify-center">
  <p className="text-white flex items-center">
    <FaCopyright className="mr-2" /> 2023 MEJIWOO. All Rights Reserved
  </p>
</div>

    </section>
  );
}
