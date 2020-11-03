# **Notes Archive (ADAK-V3)**
Personal learning progress tracker version 3. 

## Table of Contents
- [ Description ](#desc)
- [ Resources ](#resources)
- [ Bug Fix ](#bug_fix)
- [ License ](#license)
- [ Project Setup ](#project_setup)

<a name="desc"></a>
## Description
This is a full-stack application implementing REST API with JWT. Please visit [HERE](https://adakapi.herokuapp.com/) to see backend API I made for this project. Both frontend and backend is deployed on [Heroku](https://www.heroku.com). This app is specifically for myself; therefore, no one will be able to create account and alter the database. Authentication and pre-flight header configuration are done with JWT and CORS package.

<a name="resources"></a>
## Resources
### Frontend
- HTML
- CSS
- JavaScript
- Vue.js
- Vuetify
- Animate.css
### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- CORS

<a name="bug_fix"></a>
## Bug Fix
As this is my first full-stack application, I had some confusion on how SPA can be connected to server. I first approached invalid method for SPA which is utlizing <b>Session</b> instead of <b>JWT</b>. Although I spent lots of time learning about invalid method, it provided me an opportunity to learned a lot about Cookies and Sessions.

<a name="license"></a>
## License

MIT

<a name="project_setup"></a>
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
