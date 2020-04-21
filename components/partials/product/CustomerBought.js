import React from 'react';

import { customerBought } from '../../../public/static/data/product';
import Product from '../../../components/elements/products/Product';

const CustomerBought = ({ boxed, layout }) => {
    if (layout === 'fullwidth') {
        return (
            <div
                className={`ps-section--default ps-customer-bought ${
                    boxed === true ? 'boxed' : ''
                }`}>
                <div className="ps-section__header">
                    <h3>Customers who bought this item also bought</h3>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        {customerBought &&
                            customerBought.map(product => (
                                <div
                                    className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 "
                                    key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div
                className={`ps-section--default ps-customer-bought ${
                    boxed === true ? 'boxed' : ''
                }`}>
                <div className="ps-section__header">
                    <h3>Customers who bought this item also bought</h3>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        {customerBought &&
                            customerBought.map(product => (
                                <div
                                    className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 "
                                    key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default CustomerBought;
``;
