import React from 'react';
import HomeButton from '../components/HomeButton';
import ClaimsHeader from '../views/ClaimsHeader';
import InsuranceSteps from '../views/InsuranceSteps';

const Claims = () => {
    return ( 
        <>
         <HomeButton />
         <ClaimsHeader />
         <InsuranceSteps />
        </>
     );
}
 
export default Claims;