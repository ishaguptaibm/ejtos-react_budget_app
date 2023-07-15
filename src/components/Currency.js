import { Dropdown } from 'bootstrap';
import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const [name, setName] = useState('');
    return (
        <div >
            <label style={{ backgroundColor: 'green', color: 'white'}} htmlFor="dropdown">Currency : (
<select id="dropdown" style={{ backgroundColor: 'green', color: 'white',hover:'grey' }} value={name} onChange={(event) => setName(event.target.value)}>
                        
                        <option value="$ Dollar" name="$ Dollar"> $ Dollar</option>
                <option value="£ Pound" name="£ Pound">£ Pound</option>
                <option value="€ Euro" name="€ Euro">€ Euro</option>
                <option value="₹ Ruppee" name="₹ Ruppee">₹ Ruppee</option>
                
                  </select>  
            )     
                  </label>
                   </div>
    );
};
export default Currency;

