
import { useSelector,useDispatch } from 'react-redux';
import {  selectFilteredCards, filterCards } from '../../../redux/cardsStore/cardsSlice';
import Card from './Card';
import { useEffect, useState } from 'react';
import FiltersCard from './FiltersCard';

const CardList = () => {
  const dispatch = useDispatch();
  const filteredCards = useSelector(selectFilteredCards);
  const [selectedCardId , setSelectedCardId] = useState(null);
  const [filter, setFilter] = useState({ status: '', type: '' });

  //To add or remove highlighting for this card
  const handleSelectCard = (id)=>{
    setSelectedCardId((prev) => prev === id ? null : id); 
  }

  //To call filterCards when status or type select is change
  useEffect(()=>{
    dispatch(filterCards({ status: filter?.status, type: filter.type }));
  },[filter])
  
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Filters card */}
      <div className="flex md:flex-row flex-col gap-5 mb-4">
        {/* Filter By status */}
        <FiltersCard 
          value={filter?.status || ''}
          id="status"
          handleSelect={(e) =>
            setFilter((prev) => ({ ...prev, status: e.target.value }))
          }
          filterList={["All Statuses", "Active" , "Inactive" , "Terminated"]}
        /> 
        {/* Filter By type */}
        <FiltersCard 
          value={filter?.type || ''}
          id="type"
          handleSelect={(e) =>
            setFilter((prev) => ({ ...prev, type: e.target.value }))
          }
          filterList={["All Types","Physical" , "Digital"]}
        /> 
      </div>
      {/* list cards */}
      <div className="flex flex-wrap gap-6 justify-center py-4 my-auto">
          {filteredCards.map((card) => (
            <Card 
              key={card.id} 
              card={card} 
              onSelect={handleSelectCard} 
              isSelected={selectedCardId === card?.id} 
            />
          ))}
      </div>
  </div>
  )
}

export default CardList