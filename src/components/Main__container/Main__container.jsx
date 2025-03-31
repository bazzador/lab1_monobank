import React, { useEffect, useState } from 'react'
import './main__container.css'
import { enforceMinMax } from '../../functions/enforceMinMax'
import Main__container__left from '../Main__container__left/Main__container__left';
import Main__container__right from '../Main__container__right/Main__container__right';

export default function Main__container() {

    const [amount, setAmount] = useState(0);
    const [donated, setDonated] = useState(() => {
        return parseFloat(localStorage.getItem("donatedAmount")) || 910248775.33;
    });
    useEffect(() => {
        localStorage.setItem("donatedAmount", donated);
    }, [donated]);

    const handleInputChange = (e) => {
        e.target.value = e.target.value.replace(/^0+/, '').replace(/^-+/, '');
        enforceMinMax(e.target);
        setAmount(e.target.value === '' ? 0 : e.target.value);
    }
    const handleClick = (value) => {
        setAmount(prev => {
            const input = { value: parseInt(prev) + value, min: 0, max: 29999 };
            enforceMinMax(input);
            return input.value;
        });
    };
    const handlePayment = () => {
        console.log("Перед оплатою: amount =", amount, "donated =", donated);
        if (amount > 0) {
            setDonated(prev => {
                const newAmount = parseFloat(prev) + parseFloat(amount);
                console.log("Оновлений donated =", newAmount);
                return newAmount;
            });
            setAmount(0);
        }
    }
    return (
        <div className='main__container'>
            <Main__container__left 
            donated={donated}/>
            <Main__container__right 
            amount={amount}
            handleInputChange={handleInputChange}
            handleClick={handleClick}
            handlePayment={handlePayment}/>
        </div>
    )
}
