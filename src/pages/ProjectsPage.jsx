import Card from "react-bootstrap/Card";
import data from "../data.json";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-28 pb-12">
      <h1 className="text-5xl max-md:text-4xl max-sm:text-3xl">Our Projects</h1>
      <div className="text-center max-w-[800px] max-lg:max-w-[650px] max-md:max-w-[500px] max-sm:max-w-[300px] max-[326px]:w-[250px] flex flex-col gap-6">
        <p>
          Many of the works we carry out are in tight sites with difficult
          logistical constraints. We are therefore, intimately aware of the need
          for our site activities not to impact negatively on anyone affected by
          the works. With this in mind we place a huge emphasis on developing a
          detailed and precise programme to negate any foreseeable problems
          becoming a reality.
        </p>
      </div>
      <div className="flex flex-col gap-12 text-center">
        <h1 className="text-4xl max-md:text-3xl max-sm:text-2xl">
          Browse Our Latest Projects
        </h1>
        <div className="grid grid-cols-3 gap-6 max-[930px]:grid-cols-2 max-[650px]:grid-cols-1 max-[650px]:place-items-center max-[650px]:gap-8">
          {data?.projects?.map((data, index) => (
            <Link key={index} to={`/projects/${index}`}>
              <Card className="shadow-md cursor-pointer hover:transform hover:-translate-y-6 transition-transform duration-300 h-96 group w-[18rem]">
                <div className="w-full h-60 overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={data?.images[0]}
                    className="object-cover w-full h-full object-center group-hover:scale-110 group-hover:transfrom transition-transform duration-300"
                  />
                </div>
                <Card.Body>
                  <Card.Text>{data?.location}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
