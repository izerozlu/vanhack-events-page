# VanHack Events Page Redesign and Implementation
In this repository you can find a redesign and implementation of this design for the VanHack Events page.

Current VanHack events [page](https://vanhack.com/platform/#/events).

## Design
Design is heavily inspired by Google Material Design and modern design trends. Design and the implementation is responsive.

## Implementation
Implementation is developed with Javascript, HTML5 and CSS3. There is no templating engine or Javascript library/frameworks in place.

Unit and integration tests are not included within the project. Similarly there is almost none code documentation/comments within the code. 

These areas were not in the scope of this exercise so they were left out.

## Stack
- Native ES6 Javascript (no dependencies).
- CSS3 with the usage of BEM methodology for naming conventions.
- HTML5 with semantic usage.
- Parcel Bundler for compiling, transpiling and dev-server abilities.

## Running Locally
Project uses hardcoded mock values to represent and populate events. So there is no need for a local or remote mock server.

1. Installing project dependencies. 

    This process will install two packages which are [Prettier](https://prettier.io/) and [Parcel Bundler](https://parceljs.org/). Both of these packages are required in the development and compiling phases. 

    Global installation of the Parcel Bundler is not required. 

     `$ npm install`

2. Running project locally.

    Parcel Bundler includes a ready-to-go development server inside. So this project utilizes this feature of the bundler.

    You can run the project with a development server supplied by the Parcel Bundler via

    `$ npm run serve`

3. Building project for production.

    Actually this step is not required but still a nice to have.

    `$ npm run build`