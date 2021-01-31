import classes from "./TeamList.module.css";

export default function TeamList({ teams, favorites, handler }) {
  return (
    <ul className={classes.TeamList}>
      {teams.map((team) => {
        const inFavorite = favorites.find((t) => t.idTeam === team.idTeam);
        return (
          <li 
          key={team.idTeam}
          className={classes.TeamRow}
          >
            <img 
            className={classes.TeamLogo}
            src={team.strTeamBadge} 
            alt={team.strTeam} />
            <div className={classes.TeamInfo}>
              <h2>{team.strTeam}</h2>
              <h3>Year founded: {team.intFormedYear}</h3>
            </div>
            <button
              className={`${classes.Btn} ${inFavorite ? classes.BtnDanger : classes.BtnSuccess}`}
              onClick={() => handler({
                  type:inFavorite ? 'REMOVE':'ADD',
                  team
                })}
            >
              {inFavorite ? "remove" : "add to favorite"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
