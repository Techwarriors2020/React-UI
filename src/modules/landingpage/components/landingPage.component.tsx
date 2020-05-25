
import React , {Fragment} from 'react';
import LeftPanel from  '../../../common-components/leftPanel.component';
import RightPanel from  '../../../common-components/rightPanel.component';
import Cards,{CardBody, CardHeader} from '../../../stories/components/molecules/cards/cards';
import * as constants from '../../../constants';

interface ILandingPageProps {
    children?: React.ReactNode;
    props?: any;
   
}

const LandingPage: React.FC<ILandingPageProps> = ({ children, ...props }) => {
    return (
        <div {...props} >
            <div className="ekutumb-col-12">
            <LeftPanel className='ekutumb-left-panel ekutumb-col-3'>
           {/* later we can add scroll if need */}
            {constants.landingPage.cardsArr.map(function(item, i){
        return   <Cards title='card' key ={i} className='ekutumb-card'>
                    <CardHeader className="ekutumb-card-header"><span>{item.card}</span></CardHeader>
                    <CardBody className='ekutumb-card-body ekutumb-bg-purple'>
                    </CardBody>
                    </Cards>;
              })}
            </LeftPanel>
                <RightPanel className='ekutumb-right-panel ekutumb-col-9'>
                {constants.landingPage.cardsArr.map(function(item, i){
        return   <Fragment  key ={i}>
                  <div className='ekutumb-gallery-container'></div>  
                </Fragment>
              })}
       
                </RightPanel>
            </div>
                 </div>
    );
};

export default LandingPage;