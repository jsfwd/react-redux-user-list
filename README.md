# React/Redux User List

This app allows you to view a preloaded list of users, with the ability to add or delete users.

-   Built with React, Redux and SASS
-   Separate Webpack configurations for Development and Production

## Usage

### Install

-   `npm install`

### Run

-   `npm start`
-   Go to <http://localhost:8080>

## Structure

Functional folder structure for actions, components, reducers, store and tests. If the app complexity were to grow, consider restructing to feature-based.

Uses a basic Redux store integrated with the [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension)

### Theme

Single SASS theme for both global/app and component styling. Provides tokens to individual components to ensure design consistency.

`components\assets\theme`

-   **Framework**: No dependency on any external libraries
-   **Class names**: [BEM](http://getbem.com) (Block, Element, Modifier) naming conventions
-   **Units**: rems (size relative to the default font-size, scales on low and high-res displays)
-   **Layout**: flexbox (more flexible layouts, more control, less markup)
-   **Animations**: CSS-based transitions using [react-transition-group](https://reactcommunity.org/react-transition-group)

### Images

-   App images all generated from Sketch file `src/assets/images.sketch`
-   App icons generated from [Material Design](https://material.io/tools/icons)
-   Compression of all SVG assets using [SVGO](https://github.com/svg/svgo)

![](src/assets/sketch/images.sketch.png)

## Future Enhancements

### App

-   **Testing**: Add app & component testing using [Jest](https://jestjs.io) and [Enzyme](https://github.com/airbnb/enzyme)
-   **Form components**: Refactor the `UserAdd` component so that the form is broken down into reuseable form components
-   **Input validation/sanitization**: Client-side validation currently using HTML5 form validation attributes. Add additional mechanisms to sanitize data to prevent malicious inputs.
-   **Webpack production images**: Copy `src\images` to `dist\images` using [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) and compress svg/png assets

### UX

-   **No duplicate users**: Use email as unique key, don't allow the same email address for multiple users
-   **Add form layout**: The Add User form is visible at all times. Add an icon to toggle the display of this form, store state in Redux.
-   **Animations**: Add transition animation when users are deleted `src\components\UsersList\index.js`
-   **Edit user**: Add ability to edit existing users
