import React from 'react';
import Link from 'next/link';
const Links = {
    consumerElectric: [
        {
            text: 'Air Conditioners',
            url: '/shop'
        },
        {
            text: 'Audios & Theaters',
            url: '/shop'
        },
        {
            text: 'Car Electronics',
            url: '/shop'
        },
        {
            text: 'Office Electronics',
            url: '/shop'
        },
        {
            text: 'TV Televisions',
            url: '/shop'
        },
        {
            text: 'Washing Machines',
            url: '/shop'
        }
    ],
    clothingAndApparel: [
        {
            text: 'Printers',
            url: '/shop'
        },
        {
            text: 'Projectors',
            url: '/shop'
        },
        {
            text: 'Scanners',
            url: '/shop'
        },
        {
            text: 'Store &amp; Business',
            url: '/shop'
        },
        {
            text: '4K Ultra HD TVs',
            url: '/shop'
        },
        {
            text: 'LED TVs',
            url: '/shop'
        },
        {
            text: 'OLED TVs',
            url: '/shop'
        }
    ],

};

const FooterLinks = () => (
    <div className="ps-footer__links">
        <p>
            <strong>Consumer Electric:</strong>
            {Links.consumerElectric.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Clothing &amp; Apparel:</strong>
            {Links.clothingAndApparel.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>

    </div>
);

export default FooterLinks;
