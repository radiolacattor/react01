import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src='https://lh3.googleusercontent.com/oOw-_AUQV4RtJWrHIe2Sx1WboFQx78gfuhWNSyAbEdNzh4-udGVc4FEltORXx8va6sxS' />
            </div>
            <div className={s.title}>
                Brawl Stars Net
            </div>
        </header>
    )
}

export default Header;