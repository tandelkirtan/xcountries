import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';

const COUNTRY_API = "https://xcountries-backend.labs.crio.do/all";

function App() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try{  
      const response = await fetch(COUNTRY_API);
      const jsonData = await response.json();
      setData(jsonData);  
    }
    catch(err)
    {
      console.error("Error fetching data", err);
    }
  }

  useEffect(() => {
      fetchData();
  }, [])
  
  return (
    <div className="App">
      {data.map(({name, flag, abbr}, index) => (
          <Cards key={index} name={name} flag={flag} abbr={abbr}/>
      ))}
    </div>
  );
}

export default App;
