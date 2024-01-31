import { Link } from "react-router-dom";
import ImageCarousel from "../components/Carousel";

const images = ["/images/Sustainability.jpg", "/images/Sustainability2.jpg"];

const SustainabilityPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-28">
      <h1 className="text-5xl max-md:text-4xl max-sm:text-3xl">
        Sustainability Development
      </h1>
      <div className="flex items-center max-[800px]:flex-col max-[800px]:justify-center max-[800px]:gap-6">
        <div className="w-[600px] max-sm:w-[400px] max-[420px]:w-[300px] max-[1330px]:w-[400px] bg-cover bg-[url('/images/servicesBg.jpg')] max-[800px]:w-[600px] flex justify-center items-center text-white py-16 mx-auto">
          <div className="w-[400px] max-[1330px]:w-[300px] max-[800px]:w-[400px] max-sm:w-[300px] max-[420px]:w-[200px] flex flex-col gap-12">
            <h1 className="text-5xl max-[1330px]:text-3xl">
              Sustainability Developemnt
            </h1>
            <p className="leading-relaxed">
              NexTek Myanmar Construction is dedicated to sustainable
              development, integrating renewable energy sources and eco-friendly
              materials into our projects. Through rigorous carbon lifecycle
              assessments and offsetting programs, we strive to minimize our
              environmental footprint. Collaboration with industry partners and
              local communities ensures our efforts align with the UN&apos;s
              Sustainable Development Goals. By prioritizing sustainability, we
              aim to create a lasting positive impact on both the environment
              and society, building a better future for all.
            </p>
            <Link to="/contact-us">
              <button className="py-3 px-4 bg-gray-200 hover:-translate-y-2 transition-transform duration-200 text-black rounded-lg max-sm:w-full">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[700px] max-[1330px]:w-[400px] max-[800px]:w-[600px] max-sm:w-[400px] max-[420px]:w-[300px] max-[800px]:ml-0 -ml-6">
          <ImageCarousel images={images} />
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;
