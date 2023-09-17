import './assets/SASS/App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error404 from './pages/404/Error404';
import Logement from './pages/Logement/Logement';
import data from "../src/assets/images/image.json";

// Import base de données d'image ici pour pouvoir creer des liens ../page/image.id ?
// A chaque page/image.id on y ajoute l'objet en lien pour pouvoir utiliser la base 
// de donnée de l'objet à l'intérieur pour créer la page 

function ArticlesData(){
  return (data.map(item =>({
            id: item.id ,
            title: item.title ,
            cover: item.cover
        }))
)
}


function App() {
  const homeData = ArticlesData();

  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home data={homeData}/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/logement/:id"element={<Logement data={data}/>}/>
          <Route path="/*" element={<Error404 />}/>
          {/* // probleme de 404 pour logement : DONE
              // probleme de about depuis logement : DONE
              // refaire le sliders : 
          */}
        </Routes>
        <Footer />
      </BrowserRouter>
  </>
  )
}

export default App
