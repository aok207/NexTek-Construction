import { Link } from "react-router-dom";
import ImageCarousel from "../components/Carousel";

const images = [
  "/images/Picture1.jpg",
  "/images/Picture2.jpg",
  "/images/Picture3.jpg",
];

const ArchitectureDesignPage = () => {
  return (
    <div className="flex flex-col mt-12 gap-10 items-center mb-12">
      <div className="text-center max-w-[800px] max-lg:max-w-[650px] max-md:max-w-[500px] max-sm:max-w-[300px] max-[326px]:w-[250px] flex flex-col gap-6">
        <h1 className="text-4xl max-sm:text-3xl">
          We create exceptional workspaces with our architectural design
          services
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          aliquid hic nulla debitis, dicta magni a sed est quibusdam, impedit
          atque eaque totam. Tenetur quod ab nemo esse, amet numquam! Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquid
          hic nulla debitis, dicta magni a sed est quibusdam, impedit atque
          eaque totam. Tenetur quod ab nemo esse, amet numquam! Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Deleniti aliquid hic
          nulla debitis, dicta magni a sed est quibusdam, impedit atque eaque
          totam. Tenetur quod ab nemo esse, amet numquam!
        </p>
      </div>
      <div className="flex items-center max-[800px]:flex-col max-[800px]:justify-center max-[800px]:gap-6">
        <div className="w-[600px] max-sm:w-[400px] max-[420px]:w-[300px] max-[1330px]:w-[400px] bg-cover bg-[url('/images/servicesBg.jpg')] max-[800px]:w-[600px] flex justify-center items-center text-white py-16">
          <div className="w-[400px] max-[1330px]:w-[300px] max-[800px]:w-[400px] max-sm:w-[300px] max-[420px]:w-[200px] flex flex-col gap-12">
            <h1 className="text-5xl max-[1330px]:text-3xl">
              Architectural Design
            </h1>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              aliquid hic nulla debitis, dicta magni a sed est quibusdam,
              impedit atque eaque totam. Tenetur quod ab nemo esse, amet
              numquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti aliquid hic nulla debitis, dicta magni a sed est
              quibusdam, impedit atque eaque totam. Tenetur quod ab nemo esse,
              amet numquam! Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Deleniti aliquid hic nulla debitis, dicta magni a sed est
              quibusdam, impedit atque eaque totam. Tenetur quod ab nemo esse,
              amet numquam!
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

export default ArchitectureDesignPage;
