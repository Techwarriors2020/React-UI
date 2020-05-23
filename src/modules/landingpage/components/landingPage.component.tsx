
import React from 'react';
import LeftPanel from  '../../../commonComponents/leftPanel.component';
import RightPanel from  '../../../commonComponents/rightPanel.component';

interface ILandingPageProps {
    children?: React.ReactNode;
    props?: any;
   
}

const LandingPage: React.FC<ILandingPageProps> = ({ children, ...props }) => {
    return (
        <div {...props} >
            <div className="ekutumb-col-12">
            <LeftPanel>LeftPanel</LeftPanel>
                <RightPanel>RightPanel</RightPanel>
            </div>
                 </div>
    );
};

export default LandingPage;