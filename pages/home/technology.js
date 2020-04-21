import React from 'react';

import '../../scss/technology.scss';
import NavigationList from '../../components/shared/navigation/NavigationList';
import TechnologyBanner from '../../components/partials/homepage/technology/TechnologyBanner';
import TechnologyPromotions from '../../components/partials/homepage/technology/TechnologyPromotions';
import TechnologyTopCategories from '../../components/partials/homepage/technology/TechnologyTopCategories';
import TechnologySmartPhone from '../../components/partials/homepage/technology/TechnologySmartphone';
import TechnologyLaptopAndSound from '../../components/partials/homepage/technology/TechnologyLatopAndSound';
import TechnologyToys from '../../components/partials/homepage/technology/TechnologyToys';
import TechnologyGoodPrice from '../../components/partials/homepage/technology/TechnologyGoodPrice';
import TechnologyDealOfDay from '../../components/partials/homepage/technology/TechnologyDealOfDay';
import TechnologySiteFeatures from '../../components/partials/homepage/technology/TechnologySiteFeatures';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import FooterTechnology from '../../components/shared/footers/FooterTechnology';
import HeaderMobileTechnology from '../../components/shared/headers/HeaderMobileTechnology';
import SubscribePopup from '../../components/shared/SubscribePopup';

const HomeTechnologyPage = () => (
    <div className="site-content">
        <HeaderTechnology />
        <HeaderMobileTechnology />
        <NavigationList />
        <SubscribePopup />
        <main id="homepage-10">
            <TechnologyBanner />
            <TechnologySiteFeatures />
            <TechnologyDealOfDay />
            <TechnologyPromotions />
            <TechnologyTopCategories />
            <TechnologySmartPhone />
            <TechnologyLaptopAndSound />
            <TechnologyToys />
            <TechnologyGoodPrice />
            <FooterTechnology />
        </main>
    </div>
);

export default HomeTechnologyPage;
