import { FaCarBurst } from "react-icons/fa6";
import { RiVipCrownFill } from "react-icons/ri";
import { MdOutlineSpeed } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

export default function Service() {
  return (
    <section className="px-4 py-20 bg-gray-50" id="service">
      <div className="grid grid-rows-1 lg:grid-cols-3 gap-10 px-4 md:py-10 md:px-10">
        <div className="space-y-3">
          <p className="font-bold text-primary border-b-4 border-primary w-fit">
            OUR SERVICES
          </p>
          <h1 className="text-5xl font-bold">Premium Rental Services</h1>
          <p>
            Experience world-class luxury car rental services tailored for
            comfort, elegance, and exceptional performance on every journey.
          </p>
        </div>
        <div className="relative p-10 bg-white flex gap-x-4 rounded-2xl">
          <div>
            <p className="text-2xl font-medium [writing-mode:vertical-rl] rotate-180 text-gray-200">
              SERVICES - 01
            </p>
          </div>
          <div>
            <FaCarBurst className="w-14 h-14 text-primary p-2 bg-primary/20 rounded-full mb-4" />
            <div>
              <h2 className="text-xl font-bold mb-2">Exotic Car Rental</h2>
              <p className="text-gray-500">
                Drive the world’s most prestigious luxury and hypercars with
                unmatched elegance.
              </p>
            </div>
          </div>
          <div className="text-lg absolute -bottom-5 right-6 py-2 px-6 bg-gray-100 rounded-md">
            <p>1</p>
          </div>
        </div>

        <div className="relative p-10 bg-white flex gap-x-4 rounded-2xl">
          <div>
            <p className="text-2xl font-medium [writing-mode:vertical-rl] rotate-180 text-gray-200">
              SERVICES - 02
            </p>
          </div>
          <div>
            <RiVipCrownFill className="w-14 h-14 text-primary p-2 bg-primary/20 rounded-full mb-4" />
            <div>
              <h2 className="text-xl font-bold mb-2">VIP Chauffeur</h2>

              <p className="text-gray-500">
                Enjoy first-class chauffeur services designed for luxury,
                comfort, and privacy.
              </p>
            </div>
          </div>
          <div className="text-lg absolute -bottom-5 right-6 py-2 px-6 bg-gray-100 rounded-md">
            <p>2</p>
          </div>
        </div>

        <div className="relative p-10 bg-white flex gap-x-4 rounded-2xl">
          <div>
            <p className="text-2xl font-medium [writing-mode:vertical-rl] rotate-180 text-gray-200">
              SERVICES - 03
            </p>
          </div>
          <div>
            <MdOutlineSpeed className="w-14 h-14 text-primary p-2 bg-primary/20 rounded-full mb-4" />
            <div>
              <h2 className="text-xl font-bold mb-2">Hypercar Experience</h2>

              <p className="text-gray-500">
                Experience extraordinary speed from elite automotive machines.
              </p>
            </div>
          </div>
          <div className="text-lg absolute -bottom-5 right-6 py-2 px-6 bg-gray-100 rounded-md">
            <p>3</p>
          </div>
        </div>

        <div className="relative p-10 bg-white flex gap-x-4 rounded-2xl">
          <div>
            <p className="text-2xl font-medium [writing-mode:vertical-rl] rotate-180 text-gray-200">
              SERVICES - 04
            </p>
          </div>
          <div>
            <BsShieldCheck className="w-14 h-14 text-primary p-2 bg-primary/20 rounded-full mb-4" />
            <div>
              <h2 className="text-xl font-bold mb-2">Secure Protection</h2>
              <p className="text-gray-500">
                Every journey is protected with professional standards .
              </p>
            </div>
          </div>
          <div className="text-lg absolute -bottom-5 right-6 py-2 px-6 bg-gray-100 rounded-md">
            <p>4</p>
          </div>
        </div>

        <div className="relative p-10 bg-white flex gap-x-4 rounded-2xl">
          <div>
            <p className="text-2xl font-medium [writing-mode:vertical-rl] rotate-180 text-gray-200">
              SERVICES - 05
            </p>
          </div>
          <div>
            <IoLocationOutline className="w-14 h-14 text-primary p-2 bg-primary/20 rounded-full mb-4" />
            <div>
              <h2 className="text-xl font-bold mb-2">Global Availability</h2>
              <p className="text-gray-500">
                Access premium luxury car rentals across exclusive destinations
                worldwide.
              </p>
            </div>
          </div>
          <div className="text-lg absolute -bottom-5 right-6 py-2 px-6 bg-gray-100 rounded-md">
            <p>5</p>
          </div>
        </div>
      </div>
    </section>
  );
}
