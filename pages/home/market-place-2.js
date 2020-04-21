import React from 'react';
import '../../scss/market-place-2.scss';

import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import MarketPlace2Download from '../../components/partials/homepage/marketplace2/MarketPlace2Download';
import MartketPlace2Banner from '../../components/partials/homepage/marketplace2/MartketPlace2Banner';
import MarketPlace2ProductBox from '../../components/partials/homepage/marketplace2/MarketPlace2ProductBox';
import MarketPlace2Categories from '../../components/partials/homepage/marketplace2/MarketPlace2Categories';
import MarketPlace2Promotions from '../../components/partials/homepage/marketplace2/MarketPlace2Promotions';
import HeaderMarketPlace2 from '../../components/shared/headers/HeaderMarketPlace2';
import FooterMarketPlace2 from '../../components/shared/footers/FooterMarketPlace2';
import SubscribePopup from '../../components/shared/SubscribePopup';

const HomeMarketPlace2Page = () => (
    <div className="site-content">
        <HeaderMarketPlace2 />
        <HeaderMobile />
        <NavigationList />
        <SubscribePopup/>
        <main id="homepage-4">
            <MartketPlace2Banner />
            <MarketPlace2Categories />
            <MarketPlace2Promotions />
            <MarketPlace2ProductBox />
            <MarketPlace2Download />
        </main>
        <FooterMarketPlace2 />
    </div>
);

export default HomeMarketPlace2Page;
