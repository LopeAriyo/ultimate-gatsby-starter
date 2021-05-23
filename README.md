<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Lope Ariyo's Ultimate Gatsby Starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/.storybook`**: This directory contains all of the modules of code and configurations that storybook depends.

2.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

3.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

4.  **`/storybook-static`**: This directory will contain all of the code related to what you will see in the built version of storybook.

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

10. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

11. **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

12. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

13. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

14. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 🧪 Testing

- Unit Testing: [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

- Structural Testing: [Jest Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing)

- End-to-End Testing: [Cypress](https://www.cypress.io/) with [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro)

- Accessibility Testing: [axe](https://www.deque.com/axe/) with [cypress-axe](https://github.com/avanslaars/cypress-axe)

- Automated Visual Testing:
  - [Storybook](https://storybook.js.org/) with [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer) and [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot)
  - [Cypress](https://www.cypress.io/) with [Cypress Image Snapshot](https://github.com/palmerhq/cypress-image-snapshot)

## ✍🏾 Writing tests

There are few conventions when writing tests.

1.  **Automated Visual Testing and Storybook.**

    You can write your Storybook stories in `/stories/` directory and later you can write visual tests in `__visual_tests__/` directories.
    More information can be found [here](https://storybook.js.org/docs/testing/automated-visual-testing/#example-using-puppeteer-and-jest).

## 👓 Automated Visual Testing

There are two options for Automated Visual Testing:

- [Storybook](https://storybook.js.org/) with [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer) and [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot)
- [Cypress](https://www.cypress.io/) with [Cypress Image Snapshot](https://github.com/palmerhq/cypress-image-snapshot)

When creating the screenshots (image snapshots) there might be differences in font size or other platform specific rendering in the browser when running locally and on [CI](https://github.com/features/actions).

That is why it is better to run the visual tests inside [Docker](https://www.docker.com/), so that the same platform and browser is used locally and on CI.

For macOS users there is an option to run [Cypress Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview) inside Docker as well.

Please see following articles:

- [Running GUI applications using Docker for Mac](https://sourabhbajaj.com/blog/2017/02/07/gui-applications-docker-mac/)
- [Run Cypress with a single Docker command](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/)

## 💫 Deploy

S3

<!-- AUTO-GENERATED-CONTENT:END -->
