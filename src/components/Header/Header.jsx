import classes from './Header.module.css';

export default function Header({active, handler}){
    return (
        <ul className={classes.Header}>
           <li 
           className={active ==='teams' ? classes.Active : null}
           onClick={() => handler('teams')}
           >Teams</li> 
           <li
           className={active ==='favorites' ? classes.Active : null}
           onClick={() => handler('favorites')}
           >Favorites</li> 
        </ul>
    )
}