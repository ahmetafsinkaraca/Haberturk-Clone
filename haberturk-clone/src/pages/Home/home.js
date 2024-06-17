import React from 'react'
import News from './components/News'
import Writings from './components/Writings'
import FormalAdvert from './components/FormalAdvert'
import CryptoMoney from './components/CryptoMoney'

export default function Home() {
    return (
        <div className='flex flex-col'>
            <News />
            <FormalAdvert />
            <Writings />
            <CryptoMoney />
        </div>
    )
}
