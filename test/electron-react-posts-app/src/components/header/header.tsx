import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBlog} from '@fortawesome/free-solid-svg-icons'
import './styles.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="header__title">
                            <FontAwesomeIcon className="header__icon" icon={faBlog}/>
                            Gallery Posts
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
