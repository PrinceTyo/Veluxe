import ctaImage from "@/assets/cta.png";

export default function Cta() {
  return (
    <section className="mx-10 px-4">
      <div className="relative overflow-visible bg-secondary rounded-xl">
        <div className="flex items-center justify-between px-20 py-16">
          <div className="space-y-8 max-w-xl">
            <h1 className="text-5xl text-white font-bold">
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

          <div className="relative">
            <img
              src={ctaImage}
              alt="Cta Image"
              className="relative z-10 h-full w-150"
            />

            <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-3 h-116 bg-gray-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
