import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import logoImage from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-secondary mx-4 md:mx-10 mb-10 px-8 py-1 md:py-20 md:px-20 space-y-10 text-white rounded-xl">
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-10 md:gap-20">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-x-2">
            <img src={logoImage} alt="Logo" className="h-14" />
            <h1 className="font-semibold text-3xl">Veluxe</h1>
          </div>

          <blockquote className="italic text-white/80">
            Veluxe delivers premium luxury and performance vehicles with modern
            design, advanced technology, and unforgettable driving experiences.
          </blockquote>

          <div className="flex items-center gap-x-4 pt-2">
            <a href="#">
              <FaWhatsapp size={22} />
            </a>
            <a href="#">
              <FaInstagram size={22} />
            </a>
            <a href="#">
              <FaFacebook size={22} />
            </a>
            <a href="#">
              <FaPinterest size={22} />
            </a>
            <a href="#">
              <RiTwitterXFill size={22} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold mb-4">Contact Info</h1>

          <p className="text-md text-white/80">
            Jl. Luxury Avenue No. 88, Jakarta, Indonesia
          </p>

          <p className="text-md text-white/80">+62-812-3456-7890</p>

          <p>
            <a
              href="mailto:info@veluxe.com"
              className="text-md cursor-pointer hover:text-primary transition duration-300"
            >
              info@veluxe.com
            </a>
          </p>

          <p>
            <a
              href="https://www.veluxe.com"
              className="text-md cursor-pointer hover:text-primary transition duration-300"
            >
              www.veluxe.com
            </a>
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold mb-4">Quick Links</h1>

          <p>
            <a
              href="#"
              className="text-md cursor-pointer hover:text-primary transition duration-300"
            >
              Home
            </a>
          </p>

          <p>
            <a
              href="#about"
              className="text-md cursor-pointer hover:text-primary transition duration-300"
            >
              About Us
            </a>
          </p>

          <p>
            <a
              href="#service"
              className="text-md cursor-pointer hover:text-primary transition duration-300"
            >
              Services
            </a>
          </p>

          <p>
            <a
              href="#vehicles"
              className="text-md cursor-pointer hover:text-primary transition duration-300"
            >
              Vehicles
            </a>
          </p>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col md:flex-row items-start lg:items-center justify-between text-lg md:text-md gap-4">
        <p className="text-white/80 w-full md:w-3/4 lg:w-full">
          © 2026 Veluxe. All rights reserved.
        </p>

        <div className="flex items-center justify-start md:justify-end gap-x-4 w-full">
          <p>
            <a
              href="#"
              className="cursor-pointer hover:text-primary transition duration-300"
            >
              Privacy Policy
            </a>
          </p>

          <p>
            <a
              href="#"
              className="cursor-pointer hover:text-primary transition duration-300"
            >
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
