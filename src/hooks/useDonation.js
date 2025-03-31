import { useEffect, useState } from "react";
import { enforceMinMax } from "../functions/enforceMinMax";

const useDonation = (initialAmount = 910248775.33, min = 0, max = 29999) => {
    const [amount, setAmount] = useState(0);
    const [donated, setDonated] = useState(() => {
        return parseFloat(localStorage.getItem("donatedAmount")) || initialAmount;
    });

    useEffect(() => {
        localStorage.setItem("donatedAmount", donated);
    }, [donated]);

    const handleInputChange = (e) => {
        e.target.value = e.target.value.replace(/^0+/, '').replace(/^-+/, '');
        enforceMinMax(e.target, min, max);
        setAmount(e.target.value === '' ? 0 : e.target.value);
    };

    const handleClick = (value) => {
        setAmount(prev => {
            const input = { value: parseInt(prev) + value };
            enforceMinMax(input, min, max);
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
    };

    return { amount, donated, handleInputChange, handleClick, handlePayment };
};

export default useDonation;
