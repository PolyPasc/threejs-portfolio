# Three.js Portfolio Website

This Three.js project utilize modern WebGL technologies alongside React.js to craft immersive, visually appealing experiences that captivate users from the very first moment they arrive.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
  - [Tools for Future Use](#tools-for-future-use)
- [Things I learned](#things-i-learned)
- [Future Scope](#future-scope)
- [Contact](#contact)

## Description

An interactive showcase designed to highlight skills and projects as a web developer. This portfolio provides an responsive and engaging user experience through immersive 3D graphics, with the help of WebGL.

- **Technology Stack**: Three.js, React.js, Tailwind CSS, React Three Fiber and React Three Drei
- **Development Tools**: ESLint, Prettier and Vite

## Prerequisites

1. Node and npm are required. Here are the versions that I have used.

   ```bash
   node --version

   v22.1.0
   ```

   ```bash
   npm --version

   10.7.0
   ```

2. Git is required. Here's the version that I have used

   ```bash
   git --version

   git version 2.45.0.windows.1
   ```

3. At last, a GitHub account. :octocat:

## Technologies Used

  - **React**: JavaScript library for building user interfaces.
  - **Three.js**: Library for rendering 3D graphics in the browser.
  - **Vite**: Fast build tool with hot module replacement.
  - **React Three Fiber**: React renderer for Three.js, simplifies 3D integration.
  - **React Three Drei**: Useful helpers for React Three Fiber projects.
  - **Tailwind CSS**: Utility-first CSS framework for rapid styling.
  - **ESLint**: Tool for identifying and fixing JavaScript issues.
  - **Prettier**: Code formatter for consistent style across the codebase.

## Features

- **Interactive 3D Models**: Engage users with a captivating 3D model that responds to user interaction, creating an immersive experience right.

- **Responsive Design**: Built with Tailwind CSS, the website ensures a seamless experience across all devices, adapting beautifully to various screen sizes.

- **Interactive Showcase**: Projects and work experience with interactive elements, allows users to explore your skills and contributions in detail.

- **User-Centric Overview**: Provides a clear and concise information of your background and expertise, helping viewers understand your development workflow.

- **Client Testimonials**: Highlight positive feedback from previous clients, showcasing your commitment to quality and client satisfaction.

- **Configured for 3D Web Development**: Utilizes Vite for fast builds and hot module replacement (HMR), along with ESLint and Prettier configured for maintaining clean, consistent code quality with Tailwind CSS and react-three-fiber.

## Installation and Setup

To set up this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/PolyPasc/threejs-portfolio.git

    cd threejs-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Running the Project

- **Start Server:** Use `npm run dev` for development mode with automatic restarts.

  ```bash
  npm run dev
  ```

  The server will start on `http://localhost:5173`.

- **Run Linting:** Use `npm run lint` to check code quality.

  ```bash
  npm run lint
  ```

- **Format Code:** Use `npm run format` to format the code according to project standards.

  ```bash
  npm run format
  ```

- **Build Code:** Use `npm run build` to build the code according to vite configuration.

  ```bash
  npm run build
  ```

- **Preview Code:** Use `npm run preview` to preview how the code will look and behave in a production environment.

  ```bash
  npm run preview
  ```

## Project Structure

Here is a brief overview of the project structure:

```
/public
    /assets                 # Uploaded assets
    /models                 # .glb models for 3D Canvas
    /textures               # Textures & media files for models
/src
    /components             # Reusable React components
      /ui                   # Resuable UI react Components
    /constants              # Constant Data
    /sections               # Reusable Section components 
    App.jsx                 # Main application component
    index.css               # Global styles
    main.jsx                # Entry point for React
.gitignore                  # Git ignore file
.prettierignore             # Prettier ignore file
.prettierrc                 # Prettier configuration
.eslint.config.js           # ESLint configuration
index.html                  # Main HTML file
package-lock.json           # Locks dependencies versions
package.json                # Project metadata and dependencies
tailwind.config.js          # Tailwind CSS configuration
vite.config.js              # Vite configuration
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork this repository.
2. Create a new branch `git checkout -b feature/YourFeature`.
3. Make your changes.
4. Commit your changes `git commit -am 'Add new feature'`.
5. Push to the branch `git push origin feature/YourFeature`.
6. Create a new Pull Request.

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [React](https://github.com/reactjs/react.dev)
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [React Three Drei](https://github.com/pmndrs/drei)
- [Three.js](https://threejs.org/)
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [react responsive](https://github.com/yocontra/react-responsive)
- [maath](https://github.com/pmndrs/maath)
- [react-globe.gl](https://github.com/vasturiano/react-globe.gl)
- [leva](https://github.com/pmndrs/leva)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [readyplayer.me (3D Human Avatar)](https://readyplayer.me/)
- [.gltf to .jsx Convertor](https://github.com/pmndrs/gltfjsx)
- [Sketchfab - 3D Models](https://sketchfab.com/3d-models)

---

### Tools for Future Use

- [Adobe Mixamo - To Animate 3D Human Avatar](https://www.mixamo.com/#/)
- [.glb / .gltf to .fbx convertor for Adobe Mixamo](https://products.aspose.app/3d/conversion/gltf-to-fbx)

## Things I Learned

Throughout the development of this Three.js portfolio website, I gained valuable insights and skills, including:

- **3D Web Graphics**: Deepened my understanding of Three.js and WebGL, learning how to create and manipulate 3D models for dynamic web experiences.

- **React.js Proficiency**: Enhanced my skills in React, particularly in managing 3D models and Canvases to create interactive components, leveraging libraries like React Three Fiber and React Three Drei.

- **Responsive Web Design**: Gained expertise in using Tailwind CSS to build responsive layouts, ensuring optimal user experiences across various devices.

- **Code Consistency**: Learned to inforce consistent code quality through the integration of ESLint rules and Prettier [plugins](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier).

- **User-Centered Design**: Gained insights into creating user-friendly interfaces that enhance user engagement and satisfaction.

## Future Scope

Looking forward, several enhancements could further improve the functionality and user experience of this project. Such as -

- **Enhanced SEO and Accessibility**: Implement advanced search engine optimization (SEO) and accessibility features to ensure the site reaches a wider audience and is usable by all visitors.

- **Comprehensive Project Documentation**: A seperate detailed documentation page for each project, offering insights and guidance to enhance user understanding and engagement.

- **Dedicated Blog Section**: A blog page to share insights, lessons learned, and experiences throughout the development journey.

I would like feedback and suggestions for further improvements and features!

If you have ideas on how to enhance this project, please feel free to share them through issues or pull requests.

## Contact

For any questions or feedback, please reach out to:

- :e-mail: **Email:** github@technologist.anonaddy.com
- :point_right: **LinkedIn:** [in/pratap-adit](https://www.linkedin.com/in/pratap-adit)
- :octocat: **GitHub:** [PolyPasc](https://github.com/PolyPasc)

---

Thank you for checking out my project! If this project helped / interests you, then give it a :star2: Star.
