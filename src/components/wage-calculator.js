import {useState} from 'react';

const wageCalculator = () =>{

const [ income, setIncome ] = useState(0);
const [ rentMortgage, setRentMortgage ] = useState(0);
const [ groceries, setGroceries ] = useState(0);
const [ insurances, setInsuranes ] = useState(0);
const [ studentLoans, setStudentLoans ] = useState(0);
const [ccPayments, setCcPayments] = useState(0);


return (
    <div className='Calculator'>
      <form>
        <div className='income'>
            <h2>Monthly Income</h2>
          <input className="wage-input" placeholder='...put your monthly income here'></input>
        </div>
        <div className='costs'>
          <p>Rent or Mortgage</p>
          <input className='rent-or-mortgage' placeholder='Rent or Mortgage'></input>
          <p>Groceries</p>
          <input className='groceries' placeholder='Groceries'></input>
          <p>Insurances</p>
          <input className='insurances' placeholder='Insurances'></input>
          <p>Student loans</p>
          <input className='student-loans' placeholder='Student loans'></input>
          <p>Credit Card Payments</p>
          <input className='credit-card-payments' placeholder='Credit Card Payments'></input>
          <p>Eating out</p>
          <input className='eating-out' placeholder='Eating out'></input>
          <p>Fun</p>
          <input className='fun' placeholder='fun'></input>
        </div>
      </form>
      <button className='submit'></button>
      <div clasName='left-overs'>
        <span>{}</span>
        </div>
      <p>wage calculator</p>
    </div>
)
}

export default wageCalculator;