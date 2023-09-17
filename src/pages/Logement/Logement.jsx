import { useParams, useNavigate } from 'react-router-dom';
import Collapsible from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import { useEffect } from 'react';
import data from "../../assets/images/image.json";
import Slider from '../../components/SlideShow/Slider';

function Logement() {

  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const logementData = data.find((item) => item.id === id);


  useEffect(() => {
    if(!logementData){
      navigate('*')
    }
  },[logementData,navigate]);

  if(logementData){

    // Utilisez la déstructuration pour obtenir les différentes informations du logement
    const { title, pictures, description, host, rating, location, equipments, tags } = logementData;
    

    const renderView = (
      <main id="main-logement">
      {pictures.length > 1 
      ? (<Slider pictures={pictures} />) 
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
    );


    return (
      <>
      {renderView}
    </>
    );
  }
}

export default Logement;
