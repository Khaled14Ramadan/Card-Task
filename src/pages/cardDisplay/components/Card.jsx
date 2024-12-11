import virtualCard from "/src/assets/virtualCard.png";
import physicalCard from "/src/assets/physicalCard.png";
import prepaidBankLogo from "/src/assets/prepaidBankLogo.png";
import mastercardLogo from "/src/assets/mastercardLogo.png";


const Card = ({ card ,isSelected , onSelect }) => {
    const { last_four, is_physical, status , id } = card;

    const cardStyles = `
    w-80 p-2  rounded-lg relative bg-gray-300
    ${is_physical && 'text-white'}  
    ${isSelected && 'ring-4 ring-yellow-400'}
  `;

   // Prevent drag behavior
   const handleDragStart = (e) => {
    e.preventDefault();
  };
  
    return (
      <div 
        className={cardStyles} 
        onClick={()=> onSelect(id)} 
        onDragStart={handleDragStart}  
      >
        <img
            src={is_physical ? physicalCard:  virtualCard}
            alt="card"
            className={`w-full h-full ${status === 'inactive' && 'grayscale'}`}
        />
        <div className="absolute top-6 right-6  w-10">
            <img 
                src={prepaidBankLogo}
                alt="prepaidBankLogo" 
            />
        </div>
        <p className="absolute text-sm font-bold bottom-6 left-6"> {last_four}</p>
        <div className="absolute bottom-6 right-6  w-10">
            <img 
                src={mastercardLogo}
                alt="mastercardLogo" 
            />
        </div>

        {status === 'terminated' &&(
            <div className="absolute top-4 bottom-4 left-4 right-4 rounded-lg  backdrop-blur-sm text-black flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
            </div>
        )
        }
      </div>
    );
}

export default Card