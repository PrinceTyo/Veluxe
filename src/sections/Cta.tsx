import ctaImage from "@/assets/cta.png";

export default function Cta() {
  return (
    <section className="md:mx-10 px-4">
      <div className="relative overflow-visible bg-secondary rounded-xl h-96">
        <div className="flex flex-col lg:flex-row items-center justify-between px-10 md:px-20 py-16">
          <div className="space-y-8 max-w-xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold">
              Drive Luxury Beyond Limits
            </h1>

            <p className="text-white/80">
              Experience elite performance and unforgettable journeys with our
              exclusive hypercar collection.
            </p>

            <a href="">
              <button className="cursor-pointer py-2.5 px-8 bg-primary rounded-lg text-white font-medium">
                Rental Now
              </button>
            </a>
          </div>

          <div className="hidden lg:flex relative">
            <img
              src={ctaImage}
              alt="Cta Image"
              className="relative z-10 h-full w-150"
            />

            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -top-16 w-40 h-96 bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
