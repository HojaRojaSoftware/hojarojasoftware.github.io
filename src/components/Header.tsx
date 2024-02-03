// components/Header.tsx
import React from 'react';
import './../styles/Header.css';
import logoImage from '../assets/HojaRoja_Jauary.png';
import logoImage2 from '../assets/HojaRoja_December.png';

const Header: React.FC = () => {
    return (
        <section className='headerSection'>
            <header>
                {/* <img src={logoImage} alt="Logo" className="logo" /> */}
                <img src={logoImage2} alt="Logo2" className="logo" />
                <h1>HojaRoja Software</h1>
            </header>
        </section>
    );
};

export default Header;
