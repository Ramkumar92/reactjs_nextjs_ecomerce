import React from 'react';
import '../../scss/furniture.scss';

import NavigationList from '../../components/shared/navigation/NavigationList';
import FurnitureBanner from '../../components/partials/homepage/furniture/FurnitureBanner';
import FurnitureSiteFeatures from '../../components/partials/homepage/furniture/FurnitureSiteFeatures';
import FurniturePromotions from '../../components/partials/homepage/furniture/FurniturePromotions';
import FurnitureCategories from '../../components/partials/homepage/furniture/FurnitureCategories';
import FurnitureBestSeller from '../../components/partials/homepage/furniture/FurnitureBestSeller';
import FurniturePromotions2 from '../../components/partials/homepage/furniture/FurniturePromotions2';
import FurnitureTrendingProducts from '../../components/partials/homepage/furniture/FurnitureTrendingProducts';
import FurnitureShopByRoom from '../../components/partials/homepage/furniture/FurnitureShopByRoom';
import FurnitureBestSaleBrands from '../../components/partials/homepage/furniture/FurnitureBestSaleBrands';
import HeaderFurniture from '../../components/shared/headers/HeaderFurniture';
import FooterFurniture from '../../components/shared/footers/FooterFurniture';
import HeaderMobileFurniture from '../../components/shared/headers/HeaderMobileFurniture';
import SubscribePopup from '../../components/shared/SubscribePopup';

const HomeFurniturePage = () => (
    <div className="site-content">
        <HeaderFurniture/>
        <HeaderMobileFurniture />
        <NavigationList />
        <SubscribePopup/>
        <main id="homepage-8">
            <FurnitureBanner />
            <FurnitureSiteFeatures />
            <FurniturePromotions />
            <FurnitureBestSeller />
            <FurnitureCategories />
            <FurniturePromotions2 />
            <FurnitureTrendingProducts />
            <FurnitureShopByRoom />
            <FurnitureBestSaleBrands />
        </main>
        <FooterFurniture />
    </div>
);

export default HomeFurniturePage;
