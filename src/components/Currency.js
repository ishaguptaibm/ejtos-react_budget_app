import { Dropdown } from 'bootstrap';
import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const [name, setName] = useState('');
    return (
        <div >
<select style={{ backgroundColor: 'green', color: 'white',hover:'grey' }} id="inputGroupSelect01" value={name} onChange={(event) => setName(event.target.value)}>
<option defaultValue> Choose...</option>
                        <option value="Currency: $ Dollar" name="Currency: $ Dollar"> $ Dollar</option>
                <option value="£ Pound" name="£ Pound">£ Pound</option>
                <option value="€ Euro" name="€ Euro">€ Euro</option>
                <option value="₹ Ruppee" name="₹ Ruppee">₹ Ruppee</option>
                
                  </select>       
                 
                   </div>
    );
};
export default Currency;
