
import React from 'react';
//import classes from './Button.css';

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onClick?: any;
    classes ?:[];
}

const Button: React.FC<IButtonProps> = ({ onClick, children, ...props }) => {
    return (
        <button {...props} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;


