import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/about-us/green-environment", { replace: true });
  }, []);
  return <div></div>;
};

export default AboutPage;
