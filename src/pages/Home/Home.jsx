import BannerHome from "../../components/BannerHome/BannerHome";
import Articles from "../../components/Articles/Articles";
import { Link } from "react-router-dom";

function Home({ data }) {
    return (
        <>
            <main id="main-home">
            <div className="main-containers" id="main-home-banner">
                <BannerHome />
            </div>
            <div className="main-containers" id="main-article-box">
                {data.map(item => (
                <Link key={item.id} to={`/logement/${item.id}`}>
                <Articles title ={item.title} cover = {item.cover}/>
                </Link>
                ))}
            </div>
            </main>
        </>
    );
}

export default Home;