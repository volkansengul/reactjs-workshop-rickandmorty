import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';

class Header extends React.Component {
    render(){
        return(
            <header>
                <Link to={'/'}>Home</Link>
                --
                <Link to={'/detail'}>Detail</Link>
            </header>
        )
    }
}

Header.Button = Button;

export default Header;