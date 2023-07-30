import Collapsible from "../../components/Collapse/Collapse";
import AxiosAboutCollapse from "../../components/AxiosAboutCollapse/AxiosAboutCollapse";

const About = () => {

    const Data = AxiosAboutCollapse();

  return (
    <>
      <main id="main-about">
        <div className="main-containers" id="main-about-banner">
          <div className="blendMode"></div>
        </div>
        <div className="main-containers" id="main-about-collapse">
          {Data.map((collaps, index) => (
            <Collapsible label={collaps.title} content={collaps.text} key={index} />
          ))}
        </div>
      </main>
    </>
  );
};

export default About;
