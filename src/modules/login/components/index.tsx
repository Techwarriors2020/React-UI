
import React from 'react';

interface ILoginProps {
    children?: React.ReactNode;
    props?: any;
   
}

const Login: React.FC<ILoginProps> = ({ children, ...props }) => {
    return (
        <div {...props} >
          <p>login page under construction</p>
        </div>
    );
};

export default Login;