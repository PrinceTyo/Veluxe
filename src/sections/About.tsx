import { FaGlobeAmericas } from "react-icons/fa";
import { IoFlashSharp } from "react-icons/io5";

export default function About() {
  return (
    <section
      className="px-4 py-40 md:px-30 bg-gray-50 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-center gap-10 lg:gap-12"
      id="about"
    >
      <div className="w-1/2">
        <img
          src="https://i.pinimg.com/1200x/7a/1d/0b/7a1d0ba64186f24d8e841db4bb959a72.jpg"
          alt="Image About"
          className="h-140 w-[95vh] object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2 space-y-8">
        <div className="space-y-6">
          <p className="font-bold text-primary border-b-4 border-primary w-fit">
            OUR ABOUT
          </p>
          <h1 className="text-5xl font-bold">
            Premium Cars, Premium Experience
          </h1>
          <p>
            We deliver an exclusive driving experience through a curated
            collection of luxury and hypercars designed for comfort, prestige,
            and performance. From unforgettable road trips to elite events,
            every journey is crafted to reflect sophistication, power, and
            timeless style.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 py-4 px-6 border-s-5 border-primary bg-white rounded-lg">
            <FaGlobeAmericas className="w-12 h-12 text-primary" />
            <h2 className="text-2xl font-semibold">Global Elite Access</h2>
          </div>
          <div className="flex items-center gap-3 py-4 px-6 border-s-5 border-primary bg-white rounded-lg">
            <IoFlashSharp className="w-12 h-12 text-primary" />
            <h2 className="text-2xl font-semibold">Fast Instant Booking</h2>
          </div>
        </div>
        <div className="space-y-6">
          <p>
            Delivering world-class luxury and hypercar experiences with
            unmatched elegance, performance, and premium service.
          </p>
          <a href="">
            <button className="cursor-pointer py-2.5 px-8 bg-primary rounded-lg text-white font-medium">
              Discover More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
