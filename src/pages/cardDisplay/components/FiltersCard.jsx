

const FiltersCard = ({id, value ,handleSelect ,filterList}) => {
  return (
    <div className="flex items-center gap-1">
        <label htmlFor={`${id}-filter`} className="text-sm font-medium mb-1 capitalize w-full">
        Filter by {id}:
        </label>
        <select
            className="p-3 border rounded-md w-full"
            id={`${id}-filter`}
            value={value}
            onChange={handleSelect}
        >
            
            {(filterList||[])?.map((filter,index)=>(
                <option 
                    key={index} 
                    value={filter?.includes("All") ? '':filter?.toLowerCase()}    
                >
                    {filter}
                </option>
            ))}
        </select>
    </div>
  );
}

export default FiltersCard;
