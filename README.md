# Taho AI Technical Validation Template

This template offers a configuration for integrating React with Vite and TailwindCSS, enhancing code readability through the addition of the Prettier Tailwind plugin. This plugin is designed to organize and sort Tailwind classes, alongside adjustments to import aliases for improved project structure. Additionally, the template incorporates Shadcn/ui (https://ui.shadcn.com/docs), a library of reusable components crafted with TailwindCSS, ready to be utilized in your applications.

![Reference Image](/src/assets/app-screenshot.png)

# Installation

1. **Clone the Project**: Start by cloning the project to your local machine.
2. **Environment Setup**: At the project's root level, create a `.env` file. Inside this file, add the environment variable `VITE_ENDPOINT_BASE_URL` with the value `https://jsonplaceholder.typicode.com`.
3. **Install Dependencies**: Open your terminal and navigate to the project directory. Install all required dependencies by running `yarn install`.
4. **Launch the Project** 🚀: Once the installation is complete, you can start the project by executing `yarn run dev` in your terminal.

# Folder Structure

1. **components**: This folder houses all reusable components of the application, including Shadcn-ui components located within the `ui` subfolder.
2. **config**: Here, you'll find the global configuration of the application, including constants, enums, and more.
3. **features**: Unlike reusable components, this directory contains specific components tailored to individual pages. For instance, the user page features a unique component named `UserCard`, located in `features/users/user-card`.
4. **hooks**: This folder is dedicated to global custom hooks that are shared across the application, such as `useFetch`.
5. **lib**: Contains utility and helper functions essential for developing the application.
6. **store**: Utilizing `zustand` for state management, this directory encompasses all the application's stores.
7. **types**: Here, you'll find the models of our application, organizing the data structures used throughout the project.
