import { MdHealthAndSafety } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { RiVipCrownFill } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function Advantage() {
  return (
    <section className="mx-10 px-4 bg-secondary rounded-xl" id="advantage">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 px-4 md:py-10 md:px-14">
        <div className="space-y-4">
          <div className="text-white flex items-center gap-2">
            <MdHealthAndSafety className="w-20 h-20" />
            <h2 className="text-xl font-semibold">Safety First</h2>
          </div>
          <p className="text-white/60">
            Experiences staff and profesionally trained chauffeurs
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-white flex items-center gap-2">
            <FaGears className="w-20 h-20" />
            <h2 className="text-xl font-semibold">Reasonable Rates</h2>
          </div>
          <p className="text-white/60">
            We can offer you the right vechile at the right price to fit your
            budget
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-white flex items-center gap-2">
            <RiVipCrownFill className="w-20 h-20" />
            <h2 className="text-xl font-semibold">VIP Experience</h2>
          </div>
          <p className="text-white/60">
            Enjoy premium comfort, exclusive services, and luxury rides
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-white flex items-center gap-2">
            <FaMapMarkedAlt className="w-20 h-20" />
            <h2 className="text-xl font-semibold">Nationwide Service</h2>
          </div>
          <p className="text-white/60">
            We provide our transportation services nation wide
          </p>
        </div>
      </div>
    </section>
  );
}
