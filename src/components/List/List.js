import './List.scss';

const List = ({ array }) => {
  return (
    <ul className='list'>
      {array.map((item) => {
        return (<li className='list__item' key={Math.random()}>
          <span className="list__item-title">{item.name}</span>
          <span className="list__item-subtitle">{item.model}</span>
        </li>)
      }
      )}
    </ul>
  )
};

export default List;