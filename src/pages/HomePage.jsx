import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10 mx-auto max-w-[500px] max-md:w-[400px] max-sm:w-[300px] text-center mt-16 max-[380px]:w-[200px]">
      <h1 className="text-4xl max-md:text-3xl max-sm:text-2xl">
        We are a commercial construction company and we can tailor a space that
        works for you
      </h1>
      <p>
        We are a commercial construction company with <b>expertise</b> in design
        & build solutions. Our flexible approach ensures that you get the best
        designers for your new space, our methods ensure that it&apos;s
        delivered on time and to budget. All you do is turn the key.
      </p>
      <div className="flex gap-3 justify-center max-sm:flex-col">
        <Link to="/contact-us">
          <button className="py-3 px-4 bg-gray-800 hover:-translate-y-2 transition-transform duration-200 text-white rounded-lg max-sm:w-full">
            Get in touch
          </button>
        </Link>
        <Link to="/services/architecture-design">
          <button className="py-3 px-4 bg-inherit border border-black hover:-translate-y-2 transition-transform duration-200 text-black rounded-lg max-sm:w-full">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
