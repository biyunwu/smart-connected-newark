<p align="center">
  <a href="https://smartcities.rutgers.edu">
    <img alt="Smart and Connected Newark Project" src="https://raw.githubusercontent.com/biyunwu/smart-connected-newark/main/src/images/logo.gif" width="60" />
  </a>
</p>
<div align="center">
    <h1>
      Smart and Connected Newark Project
    </h1>
    <h4>A project funded by the <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1952096" target="_blank" rel="noreferrer">National Science Foundation</a></h4>
</div>

## ⚠️ Prerequisite

An active LTS `Node.js` environment is required for this project. [`Node.js v14`](https://nodejs.org/en/about/releases/) is used for the project.

Install project dependencies:

```shell
cd smart-connected-newark/
npm install
```

## 🚀 Quick start

1.  **Start developing**

    Navigate into the project directory and start it up.

    ```shell
    npm run develop
    ```

2.  **Open the code and start customizing**

    The site is now running at http://localhost:8000 .

    Edit `.js` files in `src/pages/` to see the update in real-time.


3.  **Build production bundle**

    ```shell
    npm run build
    ```

4.  **Serve production bundle**
    
    ```shell
    npm run serve
    ```
    
    The site is now running at http://localhost:9000 .


5.  **Deploy production bundle**
    
    Upload all files in `public/` to the designated directory on the server.


6.  **Delete dev cache and production files**

    ```shell
    npm run clean
    ```

## 📂 File structure
    
- `src/`:
    * `components/` contains all components that are used by pages. Webpage elements with respect to components:
        * Navbar: `src/components/partial_components/Header/Header.js`.
        * Nav links: `src/components/partial_components/Header/HeaderLinks.js`.
        * Elements in the homepage except the image slideshow: `src/components/Home.js`; image slideshow: `src/partial_components/Slideshow.js`.
        * Team page: `src/components/Team.js`.
        * Research page: `src/components/Research.js`.
        * Publication page: `src/components/Publication.js`.
        * Study page: `src/components/Study.js`.
        * Impact page: `src/components/Impact.js`.
    * `data/` stores most of the contents that are rendered by pages. Each webpage has a corresponding folder in `data/` that stores the page content.
    * `images/` is a folder of images that are fetched dynamically in building time.
    * `material_style/` has the foundational styling files for this project.
    * `pages/` has `.js` files whose names are identical to the path names of the website (except `index.js` which corresponds to the homepage `https://smartcities.rutgers.edu`). For example, `impacts.js` corresponds to the page `https://smartcities.rutgers.edu/impacts`. Refer to [Routing](https://www.gatsbyjs.com/docs/reference/routing/creating-routes/#define-routes-in-srcpages) for more info on Gatsby routing mechanism.
    

- `static/`: static assets that are [outside of the module system](https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/). Files in this folder are copied to the production bundle without processing.

## 💻 Open Source Credits:
- [Gatsby.js](https://www.gatsbyjs.com/)
- [React.js](https://reactjs.org/)
- [Material UI](https://material-ui.com/)
- [Material Kit React](https://www.creative-tim.com/product/material-kit-react)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [React Responsive Carousel](https://github.com/leandrowd/react-responsive-carousel)

## 📃 Lisence 
- Source code (except the above open source projects): MIT.
- Refer to the above open source projects for their licenses.
- Website content: all rights reserved by Rutgers University.
