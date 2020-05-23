
import React from 'react';
import '../styles/main.css';
interface IHeaderProps {
    children?: React.ReactNode;
    props?: any;
    className?:string
   
}

const Header: React.FC<IHeaderProps> = ({ children, ...props }) => {
    return (
        
            <div {...props}>
            <div className="ekutumb-header ekutumb-col-4">{children}</div>
            <div className="ekutumb-header ekutumb-col-4">{children}</div>
            <div className="ekutumb-header ekutumb-col-4">{children}</div>
        </div>
    );
};

export default Header;