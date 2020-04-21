# Build Start

## 1. Documentation

```bash
docsify serve docs
```

## 2. Apps (NPM Development mode)
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

Step 1: <span style="color: #1589F0"> npm install </span>

Step 2: <span style="color: #1589F0"> npm run dev </span>

Refer: https://nextjs.org/docs/getting-started

## 3. NPM build
Builds the app for production to the .next folder. 
It correctly bundles React in production mode and optimizes the build for the best performance.

Starts the application in production mode. 
The application should be compiled with next build first.

Step 1: <span style="color: orange">npm run build</span>

Step 2: <span style="color: orange">npm run start</span>

## 4. Deploy to production

builds the production application in the .next folder. 
After building, Export to Static HTML.

  Step 1: <span style="color: green">npm run export</span>
  
  Step 2: a static version of your app in the **out** directory.
  
  Step 3:  **out** directory upload to your server
