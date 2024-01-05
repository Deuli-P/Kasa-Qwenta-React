# Projet: Kasa-Qwenta-React

Client: Openclassrooms

#Mission:
Build frontend React website.

# Technologies:
-ViteJs
- Javascript
- SASS
-  React
- React Router
- Axios

# Build
- clone git: 
- start local server ```npm run dev```
-  build to host static website: ```npm run build```
-  Copy all the "dist" files.
-  Paste on hosting service.


# Project Structure

```
Kasa/
├── vite.config.js                      # config files to ViteJs
├──package.json                         # package with all informations 
├──index.html                           #
├──.eslintrc.js                         #
├──public/                              
  ├── IMG.png                           #
├──src/
  ├── App.jsx                           # 
  ├── main.jsx                          # 
  ├── components/
    ├── Axios/                          # Call API with Axios dependencies
    ├── Articles/                       # Articles component to Home page
    ├── Banner/                         # Banner component to About page
    ├── Footer/                         # Footer component general
    ├── Header/                         # Header component general
    ├── Rating/                         # Rating component to Habitation page
    ├── Slideshow                       # Slider infinite component to Habitation page
    ├── BannerHome/                     # Banner component to Home page
    ├── Collapse/                       # Collapse component to Habitation page and About page
  ├── pages/
    ├── 404                             # Error page
    ├── About                           # About page
    ├── Home                            # Home page
    ├── Logements                       # Habitation page
  ├── assets/
    ├── collapse.json                   # data for About page collapse
    ├── SASS/
      ├── _media.scss                   # responsive rules to SCSS
      ├── _settings.scss                # general rules to SCSS
      ├── _index.scss                   # rules to SCSS
    ├── images/                         # All the images used on the website.
```
