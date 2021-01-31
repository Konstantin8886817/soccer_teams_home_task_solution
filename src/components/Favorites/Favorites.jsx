import classes from './Favorites.module.css';

export default function Favorites({favorites, handler}){
    return(
        <>
        {favorites.length > 0 ? <div className={classes.Favorites}>
            {
                favorites.map(team => <div 
                className={classes.Card}
                key={team.idTeam}>
                    <img 
                    src={team.strTeamBadge} 
                    alt={team.strTeam}
                    className={classes.CardLogo}/>
                    <h2>{team.strTeam}</h2>
                    <h3 className={classes.CardYear}>{team.intFormedYear}</h3>
                    <button 
                    className={classes.Btn}
                    onClick={() => handler({type:'REMOVE',team})}
                    >Remove</button>
                </div>)
            }
        </div> : <h2 className={classes.Empty}>Empty list</h2>}
        </>
    );
}