import heroImage from "@/assets/hero.png";
import porscheImage from "@/assets/porsche911gt3rs.png";
import { Separator } from "@/components/ui/separator";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbCalendarClock } from "react-icons/tb";

export default function Hero() {
  return (
    <section
      className="relative h-[calc(100vh-90px)] flex flex-col lg:flex-row justify-center lg:justify-between text-center lg:text-start items-center lg:items-start gap-8 lg:gap-0 px-4 lg:p-20 mx-2 lg:mx-10 rounded-xl text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="lg:max-w-2/5 space-y-8">
        <h1 className="text-4xl md:text-6xl font-medium">
          Luxury car rental in Italy
        </h1>
        <a href="">
          <button className="cursor-pointer bg-primary px-6 py-2.5 rounded-lg">
            Rent Now
          </button>
        </a>
      </div>
      <div className="flex flex-col justify-end items-end gap-y-40">
        <div className="relative">
          <img
            src={porscheImage}
            alt="Hero Image"
            className="w-72 rounded-2xl"
          />
          <p className="absolute top-4 left-4 text-black text-xl ">$1600/day</p>
          <a href="" className="absolute top-3 right-4">
            <button className="bg-secondary hover:bg-primary transition duration-300 cursor-pointer rounded-full p-2">
              <IoIosArrowRoundForward size={20} />
            </button>
          </a>
        </div>
        <div className="flex max-w-72 ps-2">
          <p className="leading-tight text-sm text-white/60">
            Experience the thrill of driving the world’s most iconic luxury and
            performance cars with unmatched comfort and prestige.
          </p>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-28 md:-bottom-20 lg:-bottom-16 w-[95%] lg:w-[90%] bg-secondary border border-gray-400 rounded-xl p-4 md:py-5 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
          <div className="flex-1 min-w-45">
            <h1 className="text-sm md:text-lg text-white/60">
              Pick Up Address
            </h1>
            <p className="text-sm md:text-base text-white">
              From: address, airport, hotel, ....
            </p>
          </div>
          <div className="hidden lg:flex items-center">
            <Separator orientation="vertical" className="h-18" />
          </div>
          <div className="flex-1 min-w-45">
            <h1 className="text-sm lg:text-lg text-white/60">
              Drop Off Address
            </h1>
            <p className="text-sm lg:text-base text-white">
              Distance, Hourly, Flat Rate
            </p>
          </div>
          <div className="hidden lg:flex items-center">
            <Separator orientation="vertical" className="h-18" />
          </div>
          <div className="flex-1 min-w-35">
            <h1 className="text-sm lg:text-lg text-white/60">Pick Up Date</h1>
            <p className="text-sm lg:text-base text-white">NOV 19, 2026</p>
          </div>
          <div className="hidden lg:flex items-center">
            <Separator orientation="vertical" className="h-18" />
          </div>
          <div className="flex-1 min-w-35">
            <h1 className="text-sm lg:text-lg text-white/60">Pick Up Time</h1>
            <p className="text-sm lg:text-base text-white">12:25 am</p>
          </div>
          <div className="bg-primary flex flex-col items-center justify-center py-4 px-8 lg:px-12 rounded-lg gap-y-1 cursor-pointer hover:opacity-90 transition duration-300">
            <TbCalendarClock size={40} className="text-white/80" />
            <h1 className="text-sm md:text-lg text-white/80 text-nowrap">
              Book Now
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
