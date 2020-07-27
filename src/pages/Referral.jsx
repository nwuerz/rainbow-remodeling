import React, { useState } from 'react';
import SimpleHeader from '../views/SimpleHeader';
import HomeButton from '../components/HomeButton';
import ReferralTimeline from '../views/ReferralTimeline';
import ReferralForm from '../views/ReferralForm';
import ReferralButton from '../components/ReferralButton';

const title = "Referral Rewards Program";
const subTitle = "Refer friends and family to earn Referral Rewards in 3 easy steps!"

const Referral = () => {

    const [ state, setState ] = useState({ isClicked: false });

    return ( 
        <>
        <HomeButton />
        <SimpleHeader title={title} subTitle={subTitle} />
        <ReferralTimeline />
        {state.isClicked === false ? (
            <>
                <ReferralButton  setState={setState}/>
            </>
        ) : (
            <>
                <ReferralForm />
            </>
        )}
        </>
     );
}
 
export default Referral;