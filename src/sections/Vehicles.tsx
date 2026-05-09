import { IoIosArrowRoundForward } from "react-icons/io";
import { TbAutomaticGearbox } from "react-icons/tb";
import { PiEngine } from "react-icons/pi";
import { MdSpeed } from "react-icons/md";
import { GiPowerLightning } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import koenigsegImage from "@/assets/vehicles/koenigsegJesko.png";
import lamborginiImage from "@/assets/vehicles/lamborginiAdventador.png";
import porscheImage from "@/assets/vehicles/porsche911Gt3rs.png";
import spiderImage from "@/assets/vehicles/mclaren750sSpider.png";
import sennaImage from "@/assets/vehicles/mclarenSenna.png";

export default function Vehicles() {
  return (
    <section className="px-4 py-20 md:px-20 bg-gray-50" id="vehicles">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-2 lg:space-y-4">
            <p className="font-bold text-primary border-b-4 border-primary w-fit">
              OUR VEHICLES
            </p>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Explore Our Premium Vehicles
            </h1>
            <p className="text-gray-500 max-w-2xl">
              Discover a curated collection of luxury, sports, and performance
              cars designed to deliver comfort, style, and an unforgettable
              driving experience.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-col-reverse items-start md:items-end lg:flex-row lg:items-center gap-2 mt-6 lg:mt-0">
            <div className="flex items-center gap-x-1 lg:me-8">
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </div>
        </div>
        <CarouselContent className="-ml-1">
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 overflow-visible pt-34">
            <div className="p-1">
              <div className="relative overflow-visible rounded-lg bg-white pt-4">
                <div className="absolute -top-48 left-1/2 -translate-x-1/2 z-10">
                  <img
                    src={koenigsegImage}
                    alt="Image Properties"
                    className="w-96 max-w-none object-contain"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex flex-col items-center gap-x-2">
                    <h1 className="text-lg lg:text-2xl font-bold">
                      Koenigsegg Jesko
                    </h1>
                    <p className="text-xl text-primary">LIMOUSINE</p>
                  </div>
                  <div className="space-y-2">
                    <Separator />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <TbAutomaticGearbox
                          size={24}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700 text-lg">AUTOMATIC</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <PiEngine size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">3500 CC</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <MdSpeed size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">587 KM</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <GiPowerLightning size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">1280 HP</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="font-medium me-1">4.9</p>
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <p className="ms-2 text-gray-500">(90 reviews)</p>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">
                      $400/
                      <span className="text-2xl font-light text-gray-800">
                        day
                      </span>
                    </h1>
                  </div>
                  <a href="">
                    <button className="text-lg cursor-pointer flex items-center justify-center w-full gap-1 py-4 px-8 bg-primary text-white font-medium">
                      Rent a Car
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 overflow-visible pt-34">
            <div className="p-1">
              <div className="relative overflow-visible rounded-lg bg-white pt-4">
                <div className="absolute -top-48 left-1/2 -translate-x-1/2 z-10">
                  <img
                    src={lamborginiImage}
                    alt="Image Properties"
                    className="w-96 max-w-none object-contain"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex flex-col items-center gap-x-2">
                    <h1 className="text-lg lg:text-2xl font-bold">
                      Lamborgini Adventador
                    </h1>
                    <p className="text-xl text-primary">LIMOUSINE</p>
                  </div>
                  <div className="space-y-2">
                    <Separator />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <TbAutomaticGearbox
                          size={24}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700 text-lg">MANUAL</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <PiEngine size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">2200 CC</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <MdSpeed size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">1.288 KM</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <GiPowerLightning size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">1180 HP</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="font-medium me-1">4.9</p>
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <p className="ms-2 text-gray-500">(81 reviews)</p>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">
                      $210/
                      <span className="text-2xl font-light text-gray-800">
                        day
                      </span>
                    </h1>
                  </div>
                  <a href="">
                    <button className="text-lg cursor-pointer flex items-center justify-center w-full gap-1 py-4 px-8 bg-primary text-white font-medium">
                      Rent a Car
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 overflow-visible pt-34">
            <div className="p-1">
              <div className="relative overflow-visible rounded-lg bg-white pt-4">
                <div className="absolute -top-48 left-1/2 -translate-x-1/2 z-10">
                  <img
                    src={porscheImage}
                    alt="Image Properties"
                    className="w-96 max-w-none object-contain"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex flex-col items-center gap-x-2">
                    <h1 className="text-lg lg:text-2xl font-bold">
                      Porsche 911 GT3RS
                    </h1>
                    <p className="text-xl text-primary">LIMOUSINE</p>
                  </div>
                  <div className="space-y-2">
                    <Separator />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <TbAutomaticGearbox
                          size={24}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700 text-lg">AUTOMATIC</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <PiEngine size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">2100 CC</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <MdSpeed size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">1.538 KM</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <GiPowerLightning size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">940 HP</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="font-medium me-1">4.9</p>
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <p className="ms-2 text-gray-500">(47 reviews)</p>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">
                      $190/
                      <span className="text-2xl font-light text-gray-800">
                        day
                      </span>
                    </h1>
                  </div>
                  <a href="">
                    <button className="text-lg cursor-pointer flex items-center justify-center w-full gap-1 py-4 px-8 bg-primary text-white font-medium">
                      Rent a Car
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 overflow-visible pt-34">
            <div className="p-1">
              <div className="relative overflow-visible rounded-lg bg-white pt-4">
                <div className="absolute -top-48 left-1/2 -translate-x-1/2 z-10">
                  <img
                    src={spiderImage}
                    alt="Image Properties"
                    className="w-96 max-w-none object-contain"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex flex-col items-center gap-x-2">
                    <h1 className="text-lg lg:text-2xl font-bold">
                      Mclaren 750s Spider
                    </h1>
                    <p className="text-xl text-primary">LIMOUSINE</p>
                  </div>
                  <div className="space-y-2">
                    <Separator />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <TbAutomaticGearbox
                          size={24}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700 text-lg">AUTOMATIC</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <PiEngine size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">1800 CC</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <MdSpeed size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">2.129 KM</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <GiPowerLightning size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">1.020 HP</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="font-medium me-1">4.9</p>
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <p className="ms-2 text-gray-500">(121 reviews)</p>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">
                      $250/
                      <span className="text-2xl font-light text-gray-800">
                        day
                      </span>
                    </h1>
                  </div>
                  <a href="">
                    <button className="text-lg cursor-pointer flex items-center justify-center w-full gap-1 py-4 px-8 bg-primary text-white font-medium">
                      Rent a Car
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 overflow-visible pt-34">
            <div className="p-1">
              <div className="relative overflow-visible rounded-lg bg-white pt-4">
                <div className="absolute -top-48 left-1/2 -translate-x-1/2 z-10">
                  <img
                    src={sennaImage}
                    alt="Image Properties"
                    className="w-96 max-w-none object-contain"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex flex-col items-center gap-x-2">
                    <h1 className="text-lg lg:text-2xl font-bold">
                      Mclaren Senna
                    </h1>
                    <p className="text-xl text-primary">LIMOUSINE</p>
                  </div>
                  <div className="space-y-2">
                    <Separator />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <TbAutomaticGearbox
                          size={24}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700 text-lg">MANUAL</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <PiEngine size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">2200 CC</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <MdSpeed size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">129 KM</p>
                      </div>
                      <div className="flex items-center gap-x-1 p-2 bg-gray-100">
                        <GiPowerLightning size={24} className="text-gray-700" />
                        <p className="text-gray-700 text-lg">2.220 HP</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="font-medium me-1">4.9</p>
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <p className="ms-2 text-gray-500">(69 reviews)</p>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">
                      $340/
                      <span className="text-2xl font-light text-gray-800">
                        day
                      </span>
                    </h1>
                  </div>
                  <a href="">
                    <button className="text-lg cursor-pointer flex items-center justify-center w-full gap-1 py-4 px-8 bg-primary text-white font-medium">
                      Rent a Car
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
