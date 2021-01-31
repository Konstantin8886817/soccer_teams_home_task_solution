import classes from "./App.module.css";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import TeamList from "../TeamList/TeamList";
import Favorites from "../Favorites/Favorites";
import Loading from "../Loading/Loading";

export default function App() {
  const [state, setState] = useState({
    page: "teams",
    teams: [],
    favorites: [],
    isLoading: true,
  });

  useEffect(() => {
    const favorites = localStorage.getItem("FAVORITES") || `[]`;
    axios
      .get(
        "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
      )
      .then((value) => {
        setState(s => ({
          ...s,
          isLoading: false,
          teams: value.data.teams,
          favorites: JSON.parse(favorites),
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  const btnClickHandler = ({ type, team }) => {
    let favorites;
    switch (type) {
      case "REMOVE":
        favorites = state.favorites.filter((t) => t.idTeam !== team.idTeam);
        setState({
          ...state,
          favorites,
        });
        break;
      case "ADD":
        favorites = [...state.favorites, team];
        setState({
          ...state,
          favorites,
        });
        break;
    }
    localStorage.setItem("FAVORITES", JSON.stringify(favorites));
  };
  
  return (
    <div className={classes.App}>
      {state.isLoading && <Loading/>}
      {!state.isLoading && <Header
        active={state.page}
        handler={(page) => setState({ ...state, page })}
      />}
      {state.page === 'teams' && !state.isLoading && <TeamList
        teams={state.teams}
        favorites={state.favorites}
        handler={btnClickHandler}
      />}
      {state.page === 'favorites' && !state.isLoading && <Favorites
        favorites={state.favorites}
        handler={btnClickHandler}
      />}
    </div>
  );
}
