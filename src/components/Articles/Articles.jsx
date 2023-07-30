const Articles = ({title, cover}) => {
    return (
        <>
                 <article className="article-location">
                    <div className="box-shadow"></div>
                    <img src={cover} alt={title} />
                    <div className="article-location-text">
                        <h3>{title}</h3>
                    </div>
                </article> 
        </>
    );
};

export default Articles;