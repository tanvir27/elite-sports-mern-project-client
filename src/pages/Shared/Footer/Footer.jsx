import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-700">
      <div className="container mx-auto py-6 px-4">
        <div className="grid text-center grid-cols-1 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Elite Sports </h1>
            <div className="flex flex-col items-center ">
              <p className="text-sm mb-2">
                Stay updated with our latest news and offers!
              </p>
              <div className="flex mt-2">
                <form className="flex mb-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 mr-2 w-40 bg-slate-800 "
                  />
                  <button className="bg-slate-800 hover:bg-slate-600 px-4 py-2">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
            <p className="mb-2">Address: 123 Bansree, Rampura, Dhaka </p>

            <p className="mb-2">Phone: +8801776858436</p>

            <p className="mb-2"> Email: elitesports@gmail.com</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Useful links</h3>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <p>Join us on social media</p>
            <div className="flex mt-2 justify-center">
              <Link href="https://www.facebook.com">
                <FaFacebook className="text-2xl mr-2" />
              </Link>
              <Link href="https://www.instagram.com">
                <FaInstagram className="text-2xl mr-2" />
              </Link>
              <Link href="https://www.twitter.com">
                <FaTwitter className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-4">
          <p className="font-semibold">
            &copy; Elite Sports Academy 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
