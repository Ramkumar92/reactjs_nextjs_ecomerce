# Folder Structure


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
