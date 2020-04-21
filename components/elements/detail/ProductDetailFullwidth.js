import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbnailDefault from './modules/thumbnail/ThumbnailDefault';
import InformationDefault from './modules/information/InformationDefault';
import DefaultDescription from './modules/description/DefaultDescription';

import { getProductsById } from '../../../store/product/action';

class ProductDetailFullwidth extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { productId } = this.props;
        this.props.dispatch(getProductsById(productId));
    }

    render() {
        const { singleProduct } = this.props;
        return (
            <div className="ps-product--detail ps-product--fullwidth">
                {singleProduct ? (
                    <div className="ps-product__header">
                        <ThumbnailDefault product={singleProduct} />
                        <InformationDefault product={singleProduct} />
                    </div>
                ) : (
                    ''
                )}
                <DefaultDescription />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.product;
};

export default connect(mapStateToProps)(ProductDetailFullwidth);
