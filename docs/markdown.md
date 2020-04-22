# Applications Architecture

## Folder Structure

- node_modules (`It contains all the npm packages that is used on this projects.`)
- docs (`documentation file not included React library, is Independent file`)
- components
```desc
Here are the React component which could be reused in multiple pages 
or are complex enough to move them to another file and test them individually. 
Each file should have a default export with a single component, 
inside the file there could be multiple components though.
```
- pages
```desc
Here are the pages (also known as views) of the application, 
each file will automatically match a route 
as described in Next.js documentation.
```
- static (`Any static file required by the application (images, audios, etc.) could be placed here.`)
- scss (`The stylesheet is compiled to css. Next.js will automatically add the css file to the HTML.`)
- store
- package.json (`This file contains dependencies and scripts required for the project.`)
- next.config.js
```desc
contain extended next configurations like css module support, 
font import, image import and optimization and env variables.
```
- package-lock.json
```desc
contain exact dependency tree to be installed in /node_modules. 
It helps while a team is working on private apps to ensure that 
they are working on the same version of dependencies and sub-dependencies. 
It also maintains a history of changes done in package.json 
so, that at any point of time, 
when required previous changes can be looked back in the package-lock.json file.
```
## Pages
Each file in the folder pages will automatically match a route. or is the same url address, example :

| folder/file       | Url Address                            |
| ----------        |:------------:                          |
| index.js          | http://localhost.com/~                   |
| account           | http://localhost.com/account/~           |
| product           | http://localhost.com/product/~           |

1. index.js (`pages/index.js`)
<p>The file that automatically loads when a web browser starts. The term is also used to refer to the front page.</p>
<p>Consists of several components</p>

```javascript
import React from 'react';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import HomeBanner from '../components/partials/homepage/home-default/HomeBanner';
import HomeAdsColumns from '../components/partials/homepage/home-default/HomeAdsColumns';
import Newletters from '../components/partials/commons/Newletters';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
const Index = () => (
    <div className="site-content">
        <HeaderDefault />
        <HeaderMobile />
        <NavigationList />
        <main id="homepage-1">
            <HomeBanner />
            <HomeAdsColumns />
            <Newletters />
        </main>
        <FooterFullwidth />
    </div>
);
export default Index;
```   
    
## Components
Components is element of pages. one component is reuseable.

1. header (`components/shared/headers/`)
2. footer (`components/shared/footers/`)
3. Banner (`components/partials/homepage/home-default/HomeBanner/`)

## Theme
Theme configuration with Sass

### Color

Open _variable.scss scss/utils/_variable.scss .This place manages all colors:

- $color-1st: #4276cb;
- $color-layout-2-1st: #dd2400;
- $color-autopart: #dd2400;
- $color-technology: #0071df;
- $color-electronic: #dd2400;
- $color-furniture: #fb7c00;
- $color-organic: #5fa30f;
- $color-kids: #3e81ac;
- $color-photo: #c81919;
- $color-2nd: #222222;
- $color-3rd: #5e6b9d;
- $color-heading: #000;
- $color-text: #666;
- $color-text-2: #555;
- $color-dark: #161824;
- $color-link: #06c;

- $color-success: #669900;
- $color-warning: #faa806;
- $color-danger: #ec0101;
- $color-gray: #9e9e9e;
- $color-facebook: #3b5999;
- $color-twitter: #55acee;
- $color-google: #dd4b39;
- $color-linkedin: #0077b5;
- $color-instagram: #0077b5;
- $document-font-size: 14px;

- $timing: cubic-bezier(0.77, 0, 0.175, 1);
- $timing-1: cubic-bezier(0.7, 0, 0.3, 1);
- $timing-2: cubic-bezier(0.2, 1, 0.3, 1);


### Font

- $font-1st: 'Work Sans', sans-serif;
- $font-2nd: 'Libre Baskerville', serif;
- $font-3rd: 'Playfair Display', serif;
- $home: true !default;
