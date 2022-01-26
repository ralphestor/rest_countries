import './CountryCard.css'
const CountryCard = props => {
    return ( 
        <a href='#' className='countryCard'>
            <div className="cardImageContainer">
                <img className="cardImage" src={props.flag} alt={props.name}></img>
            </div>
            <div className="cardTextContainer">
                <h3 className="countryText">{props.name}</h3>
                <ul className="detailsList">
                    <li className="detailTitle">Population: <span className="detailValue">{props.population}</span></li>
                    <li className="detailTitle">Region: <span className="detailValue">{props.region}</span></li>
                    <li className="detailTitle">Capital: <span className="detailValue">{props.capital}</span></li>
                </ul>
            </div>

        </a>
     );
}
 
export default CountryCard;