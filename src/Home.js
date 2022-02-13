import { useState, useEffect } from 'react';
import CountryCard from './components/CountryCard';
import axios from 'axios';
import './Home.css';
import './Pagination.css';
import ReactPaginate from 'react-paginate';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [totalCountries, setTotalCountries] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const cardsPerPage = 20
    const pages = Math.ceil(totalCountries / cardsPerPage);

    useEffect(() => {
      const startNum = pageNumber * cardsPerPage;
      const endNum = pageNumber * cardsPerPage + cardsPerPage;
      axios.get('https://restcountries.com/v2/all')
        .then(res => {
          setTotalCountries(res.data.length)
          setCountries(res.data.slice(startNum, endNum))
        })
        .catch(e => {
          console.log(e);
        })
    }, [pageNumber])

    const renderCountries = countries.map(country => {
      return(
        <CountryCard
          key={country.alpha2Code}
          name={country.name}
          flag={country.flag}
          population={country.population}
          region={country.region}
          capital={country.capital}
      />
      )
    })

    const changePage = ({selected}) => {
      window.scrollTo({
        top: 0, 
        behavior: 'auto'
      });
      setPageNumber(selected);
      console.log(pageNumber);
    }

    return ( 
      <>
        <main className='cardsContainer'>
            {renderCountries}
        </main>
        <div className='pagination'>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pages}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"disabledBtn"}
            activeClassName={"activeBtn"}
          />
        </div>
      </>
     );
}
 
export default Home;