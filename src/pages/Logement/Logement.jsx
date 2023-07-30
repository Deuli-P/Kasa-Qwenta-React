import { useParams } from 'react-router-dom';
import { getLogementData } from '../../App';
import MyComponent from "../../components/SlideShow/Swiper";
import Collapsible from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';

function Logement({ data }) {
  const { id } = useParams();
  const logementData = getLogementData(id);


  // Utilisez la déstructuration pour obtenir les différentes informations du logement
  const { title, pictures, description, host, rating, location, equipments, tags } = logementData;

  return (
    <>
    <main id="main-logement">
      {pictures.length > 1 
      ? (<MyComponent pictures={pictures} />) 
      : (
        <div id="slide-show">
          <img src={pictures[0]} alt={title} className="slide-image" id="slide-current"/>
        </div>
          )
      }
      <div id="logement-content-container">
        <div id="logement-content-title-tags">
          <h1>{title}</h1>
          <p>{location}</p>
          <div id="logement-tags-container">
            {tags.map((item, index) =>(
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        <div id="logement-content-host-rating">
          <div id='logement-host-container'>
          <span>{host.name}</span>
          <img src={host.picture} alt="Host" />
          </div>
          <div id='logement-rating-container'>
            {<Rating note={rating}/>}
          </div>
          </div>
      </div>
      <div id="logement-collapse-container">
        <Collapsible label={"Description"} content={description}/>
        <Collapsible label={"Équipements"} content={equipments}/>
      </div>
    
    </main>
  </>
  );
}

export default Logement;
