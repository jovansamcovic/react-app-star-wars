import { useEffect, useRef, useState } from 'react';
import './../style/style.scss';
import axios from 'axios';
import List from '../components/List/List';
import Loader from '../components/Loader/Loader';

const Starships = () => {

  const [starships, setStarships] = useState([]);
  const sourceRef = useRef(axios.CancelToken.source());
  const [isLoading, setIsLoading] = useState(true);

  const getStarships = async () => {
    const users = await axios.get('https://swapi.dev/api/starships/');
    const res = await users.data;

    setStarships(res.results);
  }

  useEffect(() => {
    const source = sourceRef.current;
    getStarships();
    setIsLoading(false);

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setStarships([]);
    }
  }, [])

  return (
    <div className="container">
      <div className="starships">
        {!isLoading && <List array={starships} />}
        {isLoading && <Loader />}
      </div>
    </div>
  )
};

export default Starships;