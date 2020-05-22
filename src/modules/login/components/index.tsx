
import React from 'react';
//import classes from './Button.css';
import JsonEditor from './react-json-editor';

interface ILoginProps {
    children?: React.ReactNode;
    props?: any;
   
}

const Login: React.FC<ILoginProps> = ({ children, ...props }) => {
    return (
        <div {...props} >
          <p>login page under construction</p>
	<JsonEditor></JsonEditor>
        </div>
    );
};

export default Login;