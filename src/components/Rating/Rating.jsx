import { useEffect } from "react";

const Rating = ({ note }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (index < note ? 1 : 0));

  useEffect(() => {
    console.log("note: ", note);
    console.log("Étoiles mises à jour :", stars);
  }, [note, stars]); // Ajout de "stars" dans le tableau de dépendances

  return (
    <>
      {stars.map((e, index) => (
        <i key={index} className={e === 1 ? "fa-solid fa-star full" : "fa-solid fa-star"}></i>
      ))}
    </>
  );
};

export default Rating;

