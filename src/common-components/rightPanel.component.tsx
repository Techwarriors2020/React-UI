
import React from 'react';
interface IRightProps {
    children?: React.ReactNode;
    props?: any;
    className ? : string;
   
}

const Menu: React.FC<IRightProps> = ({ children, ...props }) => {
    return (
        <div className='ekutumb-col-9'{...props} >
            {children}
                 </div>
    );
};

export default Menu;