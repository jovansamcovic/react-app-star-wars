import { useEffect, useRef, useState } from 'react';
import './../style/style.scss';
import axios from 'axios';
import List from '../components/List/List';
import Loader from '../components/Loader/Loader';

const Actors = () => {

  const [actors, setActors] = useState([]);
  const sourceRef = useRef(axios.CancelToken.source());
  const [isLoading, setIsLoading] = useState(true);

  const getActors = async () => {
    const actorsList = await axios.get('https://swapi.dev/api/people/');
    const res = await actorsList.data;

    setActors(res.results);
  }

  useEffect(() => {
    const source = sourceRef.current;
    getActors();
    setIsLoading(false);

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setActors([]);
    }
  }, [])

  return (
    <div className="container">
      <div className="starships">
        {!isLoading && <List array={actors} />}
        {isLoading && <Loader />}
      </div>
    </div>
  )
};

export default Actors;