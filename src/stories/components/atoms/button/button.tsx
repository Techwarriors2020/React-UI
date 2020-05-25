
import React from 'react';
//import classes from './Button.css';

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onClick?: any;
    classes ?: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, children, classes, ...props }) => {
    return (
        <button {...props} onClick={onClick} className={classes}>
            {children}
        </button>
    );
};

export default Button;


