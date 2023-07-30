/* eslint-disable react/no-unescaped-entities */

const Error404 = () => {
    return (
        <>
            <main id="main-404">
            <div className="main-containers" id="main-error-container">
                <h1>404</h1>
                <p><span>Oups! La page que</span><span>vous demandez n'existe pas.</span></p>
                <a href="/">Retourner sur la page d'accueil</a>
            </div>
            </main>
        </>
    );
};

export default Error404;