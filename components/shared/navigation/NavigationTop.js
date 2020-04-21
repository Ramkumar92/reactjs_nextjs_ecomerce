import React, { Component } from 'react';
import Link from 'next/link';
import { notification } from 'antd';

class NavigationTop extends Component {
    constructor(props) {
        super(props);
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        return (
            <nav className="navigation navigation--top">
                <div className="ps-container">
                    <div className="navigation__left">

                    </div>
                    <div className="navigation__right">
                        <ul className="navigation__extra">
                            <li>
                                <Link href="/vendor/become-a-vendor">
                                    <a>Tentang FIFADA</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/order-tracking">
                                    <a>Mitra FIFADA</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/order-tracking">
                                    <a>Seller</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/order-tracking">
                                    <a>Bantuan</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/link4">
                                    <a>Unduh Aplikasi</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationTop;
