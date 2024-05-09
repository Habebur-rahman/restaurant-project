import { Link } from 'react-router-dom';
import './Number.css';

const Number = () => {
    return (
        <div className='number' >
         <Link to={'/'}> <p>+8801789056016</p></Link>  
        </div>
    );
};

export default Number;