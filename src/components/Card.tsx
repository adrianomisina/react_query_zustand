import React from "react";
import { Repository } from "./../hooks/type";
import useFavoriteReposStore from "./../store/favoriteRepos";

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

const Card = ({ repository, isFavorite }: CardProps) => {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );

  const toggleFavoriteLike = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
      return;
    }
    addFavoriteRepo(repository.id);
  };

  return (
    <div key={repository.id}>
      <h1>{repository.name}</h1>
      <div style={{ marginBottom: "2rem", marginTop: ".5rem" }}>
        <button onClick={toggleFavoriteLike}>
          {isFavorite ? "dislike" : "like"}
        </button>
      </div>
    </div>
  );
};

export default Card;
