import React from 'react';
import Kutumb from 'kutumb-style';

import RegistrationModule from '../src/modules/registration/container';
function App() {
 // console.log('kutumb css' + Kutumb);
  return (
    <div className="App">
<div className="ekutumb-layout ekutumb-col-10">     
 <RegistrationModule/>
</div>
     </div>
  );
}

export default App;
