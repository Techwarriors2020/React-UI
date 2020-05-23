
import React from 'react';
import Header from  '../../../commonComponents/Header.component';
import Footer from '../../../commonComponents/Footer.component';
import LeftPanel from  '../../../commonComponents/leftPanel.component';
import RightPanel from  '../../../commonComponents/rightPanel.component';

interface ILandingPageProps {
    children?: React.ReactNode;
    props?: any;
   
}

const LandingPage: React.FC<ILandingPageProps> = ({ children, ...props }) => {
    return (
        <div {...props} >
            <Header className='ekutumb-col-12'>Header</Header>
            <div className="ekutumb-col-12">
            <LeftPanel>LeftPanel</LeftPanel>
                <RightPanel>RightPanel</RightPanel>
            </div>
            <Footer>Footer</Footer>
                 </div>
    );
};

export default LandingPage;