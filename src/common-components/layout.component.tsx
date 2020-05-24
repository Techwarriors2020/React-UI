
import React from 'react';
interface ILayoutProps {
    children?: React.ReactNode;
    props?: any;
   
}

const Layout: React.FC<ILayoutProps> = ({ children, ...props }) => {
    return (
        <div className="App"> 
             <div className="ekutumb-layout ekutumb-col-10" {...props} >
              {children}
                 </div>
                 </div>

    );
};

export default Layout;