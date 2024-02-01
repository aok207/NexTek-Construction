import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";
import { useEffect } from "react";
import GalleryImage from "../components/GalleryImage";

const SingleProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id > data.projects.length - 1) {
      navigate("/");
    }
  }, []);

  const currentProject = data.projects[id];

  return (
    <div className="flex flex-col justify-center items-center gap-28 pb-12">
      <h1 className="text-5xl max-md:text-4xl max-sm:text-3xl">
        {"Project " + (parseInt(id) + 1)}
      </h1>
      <div className="flex gap-5 max-w-[900px] max-[940px]:flex-col max-[940px]:max-w-[500px] max-[540px]:max-w-[300px]">
        <img
          src={currentProject.images[0]}
          alt=""
          className="w-[600px] h-fit"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          pariatur excepturi. In officiis culpa aliquid placeat, veritatis,
          accusamus nihil ad aliquam temporibus voluptate quis sed distinctio.
          Incidunt similique voluptates inventore. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Sapiente quae ad consequatur praesentium
          recusandae, eaque veniam doloremque explicabo voluptates molestias
          molestiae beatae delectus nemo iusto! Ullam, veniam! Quae, suscipit
          iusto.
        </p>
      </div>
      <div className="text-center flex flex-col gap-10">
        <h1 className="text-4xl max-md:text-3xl max-sm:text-2xl">
          Project Gallery
        </h1>
        <div
          className={`grid ${
            currentProject.images.length === 2
              ? "grid-cols-2"
              : "grid-cols-3 max-[1030px]:grid-cols-2"
          } gap-6 max-[690px]:grid-cols-1`}
        >
          {currentProject.images.map((imageSrc, index) => (
            <GalleryImage imageSrc={imageSrc} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
