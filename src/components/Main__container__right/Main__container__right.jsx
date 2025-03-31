import React from 'react'
import './main__container__right.css'
export default function Main__container__right({ amount, handleInputChange, handleClick, handlePayment }) {
    return (
        <div className="main__container__right">
            <div className="top__up__amount">
                <div className="top__up__amount__title">
                    <span>Сума поповнення</span>
                    <img src="/images/jpg/flying-money.png" alt="flying-money" className="flying__money" />
                </div>
                <div className="top__up__amount__input">
                    <input type='number' className='top__up__amount__input__number' min={0} max={29999} value={amount} onChange={handleInputChange}>
                    </input>
                    <span className="top__up__amount__input__currency"> ₴ </span>
                </div>
                <div className="top__up__amount__buttons">
                    <button className="top__up__amount__button" onClick={() => handleClick(100)}>+100 <span>₴</span></button>
                    <button className="top__up__amount__button" onClick={() => handleClick(500)}>+500 <span>₴</span></button>
                    <button className="top__up__amount__button" onClick={() => handleClick(1000)}>+1 000 <span>₴</span></button>
                </div>
            </div>
            <div className="input__container">
                <input type="text" className="comment__text" placeholder=" " />
                <span className="comment__text__floating__label">Ім'я або коментар (Необов'язково)</span>
            </div>
            <div className="payment__buttons">
                <button className="payment__button" onClick={handlePayment}><img src="/images/svg/mono_pay.svg" alt="mono-pay" className="monopay" /></button>
                <button className="payment__button" onClick={handlePayment}><img src="/images/svg/dark_gpay.svg" alt="gpay" className="gpay" /></button>
                <button className="payment__button" onClick={handlePayment}><img src="/images/svg/apple_pay.svg" alt="appplepay" className="applepay" /></button>
            </div>
        </div>)
}