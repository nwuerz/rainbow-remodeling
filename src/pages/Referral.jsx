import React from 'react';
import SimpleHeader from '../views/SimpleHeader';
import HomeButton from '../components/HomeButton';
import ReferralTimeline from '../views/ReferralTimeline';

const title = "Referral Rewards Program";
const subTitle = "Refer friends and family to earn Referral Rewards in 3 easy steps!";

const Referral = () => {
    return ( 
        <>
        <HomeButton />
        <SimpleHeader title={title} subTitle={subTitle} />
        <ReferralTimeline />
        </>
     );
}
 
export default Referral;