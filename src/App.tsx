import React from "react";
import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import useFavoriteReposStore from "./store/favoriteRepos";

const App = () => {
  const { data, isLoading } = useFetchRepositories("adrianomisina");
  const { favoriteReposIds } = useFavoriteReposStore();

  {
    isLoading && <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((repository) => (
        <Card
          repository={repository}
          key={repository.id}
          isFavorite={favoriteReposIds.includes(repository.id)}
        />
      ))}
    </div>
  );
};

export default App;
