import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';

const COUNTRY_API = "https://xcountries-backend.labs.crio.do/all";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(COUNTRY_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.error("Error fetching country data:", err);
      });
      
  }, [])
  
  return (
    <div className="App">
      {data.map(({name, flag, abbr}) => (
          <Cards name={name} flag={flag} abbr={abbr}/>
      ))}
    </div>
  );
}

export default App;
