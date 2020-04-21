import React from 'react';
import '../../scss/electronic.scss';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ElectronicBanner from '../../components/partials/homepage/electronic/ElectronicBanner';
import ElectronicTopCategories from '../../components/partials/homepage/electronic/ElectronicTopCategories';
import ElectronicDealOfDay from '../../components/partials/homepage/electronic/ElectronicDealOfDay';
import ElectronicBestSeller from '../../components/partials/homepage/electronic/ElectronicBestSeller';
import ElectronicPromotions2 from '../../components/partials/homepage/electronic/ElectronicPromotions2';
import ElectronicComputerAndTechnology from '../../components/partials/homepage/electronic/ElectronicComputerAndTechnology';
import ElectronicHomeElectronics from '../../components/partials/homepage/electronic/ElectronicHomeElectronics';
import ElectronicCamera from '../../components/partials/homepage/electronic/ElectronicCamera';
import HeaderElectronic from '../../components/shared/headers/HeaderElectronic';
import HeaderMobileElectronic from '../../components/shared/headers/HeaderMobileElectronic';
import SubscribePopup from '../../components/shared/SubscribePopup';

const HomeMarketPlace4Page = () => (
    <div className="site-content">
        <HeaderElectronic />
        <HeaderMobileElectronic />
        <NavigationList />
        <SubscribePopup/>
        <main id="homepage-7">
            <ElectronicBanner />
            <ElectronicTopCategories />
            <ElectronicDealOfDay />
            <ElectronicBestSeller />
            <ElectronicPromotions2 />
            <ElectronicComputerAndTechnology />
            <ElectronicHomeElectronics />
            <ElectronicCamera />
        </main>
        <FooterDefault />
    </div>
);

export default HomeMarketPlace4Page;
