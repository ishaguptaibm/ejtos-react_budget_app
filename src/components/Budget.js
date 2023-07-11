import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses,budget1 } = useContext(AppContext);
    const [budget, setBudget] = useState(2000);
    const [upperLimit, setUpperLimit] = useState(20000);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleIncrement = () => {
        if (budget < upperLimit) {
        setBudget(budget + 10);
        }
        if(budget === upperLimit) {
            alert("The value cannot exceed the limit  £ 20000");
            setUpperLimit("")  
      }
      
    };
    
      const handleDecrement = () => {
        if(budget <= totalExpenses) {
            alert("The Budget cannot be less than Expense total");
            setUpperLimit("");
            
      }
      if(budget > totalExpenses){

        setBudget(budget - 10);
    
    }
      };
     
    
    return (
        <div className='alert alert-secondary'>
           
             <span>Budget: £ <input
        type="text"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      /></span>
            <button onClick={handleIncrement}>
        <span>&#x25B2;</span> {/* Up arrow */}
      </button>
     
      <button onClick={handleDecrement}>
        <span>&#x25BC;</span> {/* Down arrow */}
      </button>
      
        </div>
        
    );
};
export default Budget;



