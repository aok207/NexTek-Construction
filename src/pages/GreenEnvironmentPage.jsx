import { Link } from "react-router-dom";

const GreenEnvironmentPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-28">
      <h1 className="text-5xl max-md:text-4xl max-sm:text-3xl">
        Green Environment
      </h1>
      <div className="text-center max-w-[800px] max-lg:max-w-[650px] max-md:max-w-[500px] max-sm:max-w-[300px] max-[326px]:w-[250px] flex flex-col gap-6">
        <h1 className="text-4xl max-sm:text-3xl">
          NexTek Myanmar deliver exceptional projects using carbon neutral
          practices to deliver Green Environment projects
        </h1>
        <p>
          As part of our push to be carbon neutral we use sustainable and
          reusable materials on site, including products such as reclaimed
          timber, recycled timber offcuts used for acoustic panels and reused
          furnishings. We want to build a better future for our planet. We have
          already offset 230 tons of CO2 emissions, the equivalent weight of the
          Statue of Liberty, but we want to go further.
        </p>
      </div>
      <div className="flex items-center max-[800px]:flex-col max-[800px]:justify-center max-[800px]:gap-6">
        <div className="w-[600px] max-sm:w-[400px] max-[420px]:w-[300px] max-[1330px]:w-[400px] bg-cover bg-[url('/images/servicesBg.jpg')] max-[800px]:w-[600px] flex justify-center items-center text-white py-16 mx-auto">
          <div className="w-[400px] max-[1330px]:w-[300px] max-[800px]:w-[400px] max-sm:w-[300px] max-[420px]:w-[200px] flex flex-col gap-12">
            <h1 className="text-5xl max-[1330px]:text-3xl">
              Green Environment
            </h1>
            <p className="leading-relaxed">
              Our aim is to be an industry trendsetter by making our
              construction projects Carbon Neutral. We can deliver this through
              working with our supply chain to calculate the full carbon
              lifecycle of a project, using renewable sources of energy on site,
              and through waste reduction and recycling. The projects we have
              invested in not only reduce our Carbon Footprint they also help
              confront some of the biggest challenges facing the planet and
              focus on tackling the UN&apos;s Sustainable Development Goals.
              These projects are specifically Wind Energy Projects Throughout
              all around the Myanmar.
            </p>
            <Link to="/contact-us">
              <button className="py-3 px-4 bg-gray-200 hover:-translate-y-2 transition-transform duration-200 text-black rounded-lg max-sm:w-full">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[700px] max-[1330px]:w-[400px] max-[800px]:w-[600px] max-sm:w-[400px] max-[420px]:w-[300px] max-[800px]:ml-0 -ml-6">
          <img
            src="/images/Green.jpg"
            alt="green"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GreenEnvironmentPage;
