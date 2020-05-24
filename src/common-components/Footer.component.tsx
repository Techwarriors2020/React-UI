
import React from 'react';
interface IFooterProps {
    children?: React.ReactNode;
    props?: any;
   
}

const Footer: React.FC<IFooterProps> = ({ children, ...props }) => {
    return (
        <div {...props} >
            <div className="ekutumb-footer ekutumb-col-12">{children}</div>
                 </div>
    );
};

export default Footer;