import { WithRuBalance } from "../../helpers/hoc/withRuBalance";
import './styles.css';

const Card = ({balance, setBalance}) => {
    return (
        <div className='card'>
            <div className='card-block'>
               <p>CRYPTO-FINANCE</p> 
               <button 
               onMouseDown={() => console.log("---enter")} 
               onClick={setBalance}>
                Add money
                </button>
            </div>
            
            <div className='card-block'>
                <p>RUDAKOV.MAKAR</p>
                <p>{balance} $</p>
            </div>
        </div>
    )
}
export default WithRuBalance(Card);
