
import React from 'react';
import logoImage from '../assets/images/logo.png';
interface IHeaderProps {
    children?: React.ReactNode;
    props?: any;
    className?:string,
}

const Header: React.FC<IHeaderProps> = ({ children, ...props }) => {
    return (
        
            <div {...props}>
            <div className="ekutumb-header ekutumb-col-4"></div>
            <div className="ekutumb-header header-logo ekutumb-col-4">
            </div>
            <div className="ekutumb-header ekutumb-col-4"></div>
        </div>
    );

};


export default Header;