
import React from 'react';
interface ILeftProps {
    children?: React.ReactNode;
    props?: any;
   
}

const Menu: React.FC<ILeftProps> = ({ children, ...props }) => {
    return (
        <div className="ekutumb-left-panel ekutumb-col-2" {...props} >
            {children}
                 </div>
    );
};

export default Menu;