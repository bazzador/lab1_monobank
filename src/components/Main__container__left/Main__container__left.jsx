import './main__container__left.css'

import React from 'react'

export default function Main__container__left({ donated }) {
    return (
        <div className="main__container__left">
            <img src="/images/svg/monobank-title.svg" alt="monobank-title" className="monobank__title" />
            <div className="fund__logo" />
            <div className="fund__title">
                <img src="/images/jpg/verification-badge.png" alt="verification-badge" className="verification__badge" />
                <span>Благодійний фонд</span>
            </div>
            <div className="fund__name">
                <h1>Благодійний фонд Сергія Притули</h1>
            </div>
            <div className="fund__iban">
                <span className="iban">IBAN</span>
                <span className='number'>UA 42 322001 00000 2902 6998 0001 65</span>
            </div>
            <div className="fund__balance">
                <div className="fund__balance__left">
                    <img src="/images/svg/archive.svg" alt="archive" className="balance__archive" />
                    <div className="donated__money">
                        <span className='donated__money__title'>Накопичено</span>
                        <span className='donated__money__amount'>{donated.toLocaleString()} ₴</span>
                    </div>
                </div>
                <div className="fund__balance__right">
                    <img src="/images/svg/up-arrow.svg" alt="up-arrow" className="balance__up__arrow" />
                    <div className="withdrawn__money">
                        <span className='withdrawn__money__title'>Знято</span>
                        <span className='withdrawn__money__amount'>910 023 659.29 ₴</span>
                    </div>
                </div>
            </div>
        </div>);
}
