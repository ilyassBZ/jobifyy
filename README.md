# jobifyy


<div id="top"></div>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

<!-- PROJECT LOGO -->
<div align="center">
<br>
<a href="https://job-ify.herokuapp.com/">
    <img src="./client/src/assets/images/logo.svg" alt="Logo" height="50" >
  </a>
<br>
<br>

  <p align="center">
  <a href="https://job-ify.herokuapp.com/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#users">Users</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#ports-and-endpoints">Ports and EndPoints</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

MERN Stack Application for tracking Job Search Process



### Features

- Login / Sign-up
- Edit user-data
- Add jobs
- Browse user's jobs with (search + filter) feature
- Display jobs-status + monthly-applications in graphs

### Built With

- React
- React Router
- styled-components
- Node.js
- Express
- MongoDB

### users

| Email              | Password |
<br/>
| admin@bookswap.com | password |

#### Validation

- **Email validation**: as per **RFC2822** standards.
- **Password validation**:
  - The password must be more than **6** characters.

<p align="right">(<a href="#top">back to top</a>)</p>

---

<!-- GETTING STARTED -->

## Getting Started

This project require some perquisites and dependencies to be installed, you can find the instructions below

This project require some perquisites and dependencies to be installed, you can view it online using this [demo](https://jobify-abdelrahmansoltan.herokuapp.com/). or you can find the instructions below:

> To get a local copy, follow these simple steps :
### Installation
#### installing Locally

1. Clone the repo
   ```sh
   git clone https://github.com/ilyassBZ/jobifyy.git
   ```
2. go to project folder

   ```sh
   cd jobify
   ```

3. install dependencies

   ```bash
   npm run install
   ```

4. Environmental Variables Set up

   - Here are the environmental variables that needs to be set in the `.env` file in the **jobify directory**.

   ```
     PORT=5000
     MONGO_URL=<Your mongodb url>
     JWT_LIFETIME=1d
     JWT_SECRET=<any secret value of your choice>
   ```

5. Run app

   ```sh
   node server
   ```

---


<p align="right">(<a href="#top">back to top</a>)</p>