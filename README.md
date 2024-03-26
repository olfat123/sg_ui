UI-Boilerplate is a ui template repo, bootstrapped with [Gulpjs](https://gulpjs.com/) for the build pipeline process and [Bootstrap](https://getbootstrap.com/) for the UI component without needing to pre-configuring many tools or code standards tools.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Aim](#aim)
- [Used Technologies](#used-technologies)
- [setup](#setup)
- [Available Scripts](#available-scripts)
- [Engine Locking](#engine-locking)
- [Directory Structure](#directory-structure)
- [Styles and UI Components lib](#styles-and-ui-components-lib)
	- [Import Bootstrap's js modules](#import-bootstraps-js-modules)
	- [Import Bootstrap's style files](#import-bootstraps-style-files)
	- [Output files](#output-files)
- [Views and Markup language](#views-and-markup-language)
	- [layout and folder structure](#layout-and-folder-structure)
	- [output files](#output-files-1)
- [Javascript](#javascript)
	- [ES6 and babel](#es6-and-babel)
	- [Source files](#source-files)
	- [Output files](#output-files-2)
- [Assets](#assets)
- [Git Setup](#git-setup)
	- [Git WorkFlow](#git-workflow)
		- [Git Flow workflow](#git-flow-workflow)
		- [How it works](#how-it-works)
		- [Feature branches](#feature-branches)
		- [Release branches](#release-branches)
		- [Hotfix branches](#hotfix-branches)
		- [The overall flow of Gitflow is](#the-overall-flow-of-gitflow-is)
	- [Git Hooks](#git-hooks)
- [Code Formatting and Quality Tools](#code-formatting-and-quality-tools)
- [References](#references)

---

## Aim

UI-Boilerplate is a tool to create ui bootstrap based templates.

It sets up your development environment so that you can use the latest JavaScript, CSS, and HTML features, provides a nice developer experience, and optimizes your UI for production.

UI-Boilerplate doesn’t handle backend logic or databases; it just creates a frontend build pipeline. Under the hood, it uses Babel and gulp, but you don’t need to know anything about them.

When you’re ready to deploy to production, running `npm run build` will create an optimized build of your app in the build folder.

**[⬆ Back To Top](#table-of-contents)**

---

## Used Technologies

- `PUG`
- `SASS`
- `Babel`
- `Bootstrap 5`
- `Gulp` with list of pipelines for handling development and production tasks. such as convert files from `SASS` to `CSS`, compile and compress `ES6` to browser supported `Javascript`, handling assets, and much more.
- `rtlcss`
- `purgecss`
- `imagemin`
- `prettier`
- `eslint`
- `htmlhint`
- `postcss`

**[⬆ Back To Top](#table-of-contents)**

---

## setup

- You need `Nodejs >=16.0.0` and `npm >=7.0.0` installed.
- Clone this repo locally.
- In the terminal, navigate to the repo root directory and install the dependencies with `npm install`.
- Start the local dev server by running `npm start` and navigate to `localhost:3000` in your browser.
- For production build run `npm run build`.

**[⬆ Back To Top](#table-of-contents)**

---

## Available Scripts

`npm start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000/) to view it in the browser, The page will reload if you make edits. You will also see any lint errors in the console.

`npm run build`
Builds the app for production to the `build` folder. It correctly bundles `src` files in production mode and optimizes the build for the best performance.

`npm run clean`
Remove build folder.

`npm run lint`
Runs eslint tasks for js source files.

`npm run prettify`
Script to prettify staged files.

`npm run deploy`
Runs deploying script to reset server repo changes, and pull latest updates.

`npm run get-next-release-version`
Omitting the next release version to the console based on diff changes of last release version.

`npm run release`
Prepare git, and app version to next release version based on current branch using [standard-version](https://github.com/conventional-changelog/standard-version#readme) package.

`npm run release:patch`
Prepare git, and app version to patch release version using [standard-version](https://github.com/conventional-changelog/standard-version#readme) package.

`npm run release:minor`
Prepare git, and app version to minor release version using [standard-version](https://github.com/conventional-changelog/standard-version#readme) package.

`npm run release:major`
Prepare git, and app version to major release version using [standard-version](https://github.com/conventional-changelog/standard-version#readme) package.

**[⬆ Back To Top](#table-of-contents)**

---

## Engine Locking

We would like for all developers working on this project, and servers that will host this project into to use the same Node engine and package manager we are using. To do that we create a new file:

- `.npmrc` - Will tell other users of the project which package manager is used

We are using `Node v16 Fermium` and `npm v7` for this project so we set those values like so:

`.npmrc`

```
engine-strict=true
save-exact=true
```

You can check your version of Node with `node --version` and make sure you are setting the correct one. A list of Node version codename can be found [here](https://github.com/nodejs/Release/blob/main/CODENAMES.md)

`package.json`

```json
  ...
 "engines": {
  "node": ">=16.0.0",
  "npm": ">=7.0.0"
 },
  ...
```

The `engines` field is where you specify the specific versions of the tools you are using. You can also fill in your personal details if you choose.

**[⬆ Back To Top](#table-of-contents)**

---

## Directory Structure

This section is now going to cover the folder structure in our project. This is one of those topics that many people will have extremely strong opinions about, and for good reason! Directory structure can really make or break a project in the long term when it gets out of control, especially when fellow team members have to spend unnecessary time trying to guess where to put things (or find things).

I personally like to take a fairly simplistic approach, keep things separated in grouped folder:

```
...
├── .husky/           # Husky git hooks folder.
├── build/            # All output, and production ready files, and folders.
│ ├── assets/         # Assets folder.
│ │ ├── fonts/        # Fonts folder.
│ │ └── images/       # Images folder.
│ ├── stylesheets/    # Style folder using `CSS`.
│ ├── scripts/        # Scripts folder using `JS`.
│ └── index.html      # HTML files.
├── gulp/             # All gulp tasks.
├── seeds/            # All seeds json files to inject into pug as data.
├── src/              # Source files.
│ ├── assets/         # Assets folder.
│ │ ├── fonts/        # Fonts folder.
│ │ └── images/       # Images folder.
│ ├── stylesheets/    # Style folder using `SASS`.
│ ├── scripts/        # Scripts folder using `ES6`.
│ └── views/          # views folder contains all variant pug view components.
...
```

For the project to build, these files must exist with exact filenames:

`src/views/index.pug` is the page template entry point.
`src/scripts/script.js` is the JavaScript entry point.
`src/stylesheets/style.scss` is the CSS entry point.
`src/assets/images/favicon.png` is the favicon.

You can delete or rename the other files.

Within `src/views/` we will have subdirectories that kind of group similar types of components together. As the project uses the `Bootstrap` library we tend to follow the same organization they use for components, For example forms, mixins, layouts, off-canvas, modals, and sections.

Within `src/stylesheets/` we will have subdirectories that kind of group related styles together, For example mixins, sections, pages, and components.

Within `src/scripts/` we will have subdirectories for libraries kind of scripts, and utilities kind of scripts, and other for custom scripts typed by our developers.

You don't need to create these directories in advance and leave them empty. I would just create them as you go while building your components.

**[⬆ Back To Top](#table-of-contents)**

---

## Styles and UI Components lib

Bootstrap is the most popular CSS framework, powering millions of websites on the internet, well tested, and works
will with all browsers.

We are adding Bootstrap using npm via `npm install bootstrap` command, This command will install the most recent version of bootstrap, then we can import bootstrap `SASS` source files, and it's JS Components without need for third party plugins like `JQuery`.

### Import Bootstrap's js modules

Once Bootstrap is included, you'll be able to `import` js components into the `src` js files the way you do with any JS module without importing all Bootstrap build files. For example, let's import Bootstrap's Offcanvas component into `src/scripts/libs/bootstrap.js` file we included in our project source files:

```js
// src/scripts/libs/bootstrap.js

// we can import other modules here from bootstrap node_modules folder like 'Alert', 'Tooltip', 'Modal', etc...
import Offcanvas from "bootstrap/js/dist/offcanvas";

export default () => {
 [...(document.querySelectorAll(".offcanvas") || [])].map((ele) => new Offcanvas(ele));
 // config other modules....
};
```

Then we will import this `bootstrap` config file into our main script file

```js
// src/scripts/script.js

import bootstrap from "./libs/bootstrap";

(() => {
 // Executes the given code when the dom content loaded.
 document.addEventListener("DOMContentLoaded", () => {
  bootstrap();
 });
})();

```

### Import Bootstrap's style files

As the UI starts to get larger stylesheet files we discoverd that maintaining a huge CSS file can be challenging, so we decided to structure those files as following, inside `src/` folder you will find separate directory named `stylesheets/` that contain our application style:

```
├── src/                 # Source files.
│ ├── stylesheets/       # Style folder using `SASS`.
│ │ ├── components/      # Contain all new component specific style.
│ │ ├── libs/            # Contain all libs utilizing folder/files. for example: bootstrap, swiper, etc...
│ │ ├── sections/        # Contain all style related to specific sections. for example: hero, footers, etc...
│ │ ├── utilities/       # Contain all utilities style classes and style.
│ │ ├── pages/           # Contain all style related to specific pages.
│ │ ├── _components.scss # importing all components SASS files from components directory.
│ │ ├── _libs.scss       # import all libs SASS files from libs directory.
│ │ ├── _sections.scss   # import all sections SASS files from sections directory.
│ │ ├── _utilities.scss  # import all utilities SASS files from utilities directory.
│ │ ├── _pages.scss      # import all pages files from pages directory.
│ │ ├── _custom.scss     # file for custom/override style.
│ │ ├── _variables.scss  # file for custom/override SASS variables.
│ │ └── style.scss       # importing all style index files into a single file to convert into css file.
│ │
```

Utilize Bootstrap source Sass files to take advantage of Bootstrap Style variables, maps, mixins, and more.

Whenever possible, avoid modifying Bootstrap’s core files. For Sass, that means creating your own stylesheet that imports Bootstrap so you can modify and extend it, you’ll have a file structure that looks like this:

```
UI-Boilerplate/
├── build/
├── src/
│ ├── stylesheets/
│ │ ├── libs/
│ │ │ ├── bootstrap/
│ │ │ │ ├── _utilities-overrides.scss
│ │ │ │ ├── _variables-dark-overrides.scss
│ │ │ │ ├── _variables-overrides.scss
│ │ │ │ └── bootstrap.scss
│ │ │ ├── ...other libraries folders
├─ node_modules/
│ ├─ bootstrap
│ │ ├── js
│ │ └── scss
```

In your `src/stylesheets/libs/bootstrap/bootstrap.scss`, will import Bootstrap’s source Sass files. You have two options: include all of Bootstrap, or pick the parts you need. We encourage the latter, and we are using this option here, though be aware there are some requirements and dependencies across our components. You also will need to include some JavaScript for our plugins.

```scss
// src/stylesheets/libs/bootstrap/bootstrap.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

@import "../node_modules/bootstrap/scss/bootstrap";

// Then add additional custom code here
```

```scss
// src/stylesheets/libs/bootstrap/bootstrap.scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here

// 3. Include remainder of required Bootstrap stylesheets (including any separate color mode stylesheets)
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// 6. Optionally include any other parts as needed
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";

// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import "../node_modules/bootstrap/scss/utilities/api";

// 8. Add additional custom code here
```

### Output files

By using `gulp.js` and `SASS Compiler` we will convert `SASS` into production ready `CSS`. Tasks will be found in `gulp/tasks/scss.js`, and `gulp/tasks/css.js` files.

```js
 // gulp/tasks/scss.js

 const scss = () => gulp
  .src(PATH_TO_SASS_SOURCE) // SASS source path file, example: src/stylesheets/styles.scss
  .pipe(sass({})) // sass task to convert SASS files into css.
  .pipe(postcss([])) // postcss task to handle some css tasks like: autoPrefix, rtl, etc...
  .pipe(gulp.dest(PATH_TO_CSS_OUTPUT)) // CSS output path file, example: build/stylesheets/style.css
  // other pipeline tasks goes here...

// rest of the file...
```

```js
// gulp/tasks/css.js

// task for cleaning css files from comments, minifying, and rename file.
const cleanCSS = () => gulp
  .src(PATH_TO_SASS_SOURCE) // CSS source path file, example: build/stylesheets/style.css
  .pipe(postcss([])) // postcss task to handle some css tasks like: minify file, cleaning file comments, etc...
  .pipe(rename(({ basename, ...path }) => ({ basename: `${basename}.min`, ...path }))) // rename file after minify.
  .pipe(gulp.dest(PATH_TO_CSS_OUTPUT)) // CSS output path file, example: build/stylesheets/style.min.css
  // other pipeline tasks goes here...

// task for remove unused css.
const unusedCSS = () =>
 gulp
  .src(PATH_TO_SASS_SOURCE) // CSS source path file, example: build/stylesheets/style.css
  // path to HTML, and js output folders, and other options.
  .pipe(purgecss({content: [config.paths.dest.html, config.paths.dest.javascript]}))
  .pipe(gulp.dest(PATH_TO_CSS_OUTPUT))
  // other pipeline tasks goes here...

// rest of the file...
```

And the build ready output files will become minified, clean from any comments, multi language layout ready, multi themed, and just have the needed amount style we used in HTML, and Js files.

> **_NOTE:_** Any filename starts with underscore (_) example: '_FILE-NAME.scss', will treated as private file and will not compile into a separate file.

**[⬆ Back To Top](#table-of-contents)**

---

## Views and Markup language

Let's admit that component base file structure is a successful abroach and a lot of web based apps build with it as their default file structure, we need to adapt this abroach and use it with our markup language by using [pug](https://pugjs.org/) formally known as `Jade`.

[pug](https://pugjs.org/) is a popular templating engine that works with your favorite JavaScript libraries and frameworks, this allows developers to write clean, concise, and reusable HTML, that uses indentation and minimal markup to create templates that are easier to read than traditional HTML.

### layout and folder structure

As the UI starts to get larger markup files we discoverd that maintaining a huge HTML file can be challenging, so we decided to structure those files as following, inside `src/` folder you will find separate directory named `views/` that contain our application component base `pug` files:

```
├── src/                 # Source files.
│ ├── views/             # Markup files using pug.
│ │ ├── base/            # Contain head, and foot files for all HTML.
│ │ ├── layouts/         # Contain layout files.
│ │ ├── mixins/          # Contain reusable function like component, like cards, etc...
│ │ ├── forms/           # Contain all form like sections.
│ │ ├── modals/          # Contain all modals sections.
│ │ ├── off-canvases/    # Contain all off canvas sections.
│ │ ├── sections/        # Contain all sections files, Example: Hero, Footer, etc...
│ │ └── index.pug        # An entry point that will compile into single HTML page.
...
```

By applying this type of structure we can read, maintain our markup language easer, creating reusable code blocks, supporting dynamic content, and reducing the amount of code time.

### output files

By using `gulp.js` and `PUG Compiler` we will convert `PUG` into production ready `HTML`. Tasks will be found in `gulp/tasks/pug.js`, and `gulp/tasks/html.js` files.

```js
// gulp/tasks/pug.js

const pug = () => gulp
  .src(PATH_TO_PUG_SOURCE) // PUG source path file, example: src/views/index.pug
  .pipe(gulpPug()) // pug task to handle converting from PUG to HTML files.
  .pipe(gulp.dest(PATH_TO_PUG_OUTPUT))
  // other pipeline tasks goes here...

// rest of the file...
```

```js
// gulp/tasks/html.js

// task for prettifying HTML files
const html = () => gulp
  .src(PATH_TO_HTML_SOURCE) // HTML source path file, example: build/index.html
  .pipe(prettyHtml()) // task for prettifying HTML files.
  .pipe(gulp.dest(PATH_TO_HTML_OUTPUT)) // HTML output path, example: build/index.html
  // other pipeline tasks goes here...

// task for remove unused css.
const htmlValidation = () =>
 gulp
  .src(PATH_TO_HTML_SOURCE) // HTML source path file, example: build/index.html
  .pipe(htmlhintInline()) // task for linting all HTML files
  .pipe(gulp.dest(PATH_TO_HTML_OUTPUT)) // HTML output path, example: build/index.html
  // other pipeline tasks goes here...

// rest of the file...
```

And the build ready output files will become prettified, and linted due to [htmlhint rules](https://htmlhint.com/docs/user-guide/list-rules).

> **_NOTE:_** Any filename starts with underscore (_) example: '_FILE-NAME.pug', will treated as private file and will not compile into a separate file.

---

## Javascript

For the `Javascript` part of our UI-Template we are trying to use a newer version of `js` over the old `ES5` versions with the `ES6` version.

### ES6 and babel

The `ES6` version brings a lot of new features to make the code modern and readable, It allows us to write less and organized code with a lot of new syntax, like arrow functions, string template, class syntax, modules, and more.

`ES6` offers significant syntax sugar, streamlining code by reducing lines and introducing keywords like `const` and `let` for enhanced variable declaration. This promotes readability and reduces the potential for errors.

Many popular libraries and frameworks (React, Angular, Vue) leverage ES6 syntax and features, making transitioning your codebase significantly easier, and by embracing `ES6` now, we are prepare our code for widespread adoption and avoid potential technical debt in the future.

Like Bootstrap drop `JQuery` as the new js is easer to write similar to `JQuery` so we need no `JQuery` code in this template, we can happily replace it with regular `js`.

### Source files

With `ES6` we can use as files as we can separate and import them together. So with this feature we can separate our `js` code into related js files and folders, so we decided to structure those files as following, inside `src/` folder you will find separate directory named `scripts/` that contain our application component base `js` files:

```
├── src/            # Source files.
│ ├── scripts/      # script files using es6.
│ │ ├── libs/       # Containing libraries files and modules.
│ │ ├── partials/   # Containing our custom code modules.
│ │ ├── utils/      # Containing all utility files/functions.
│ │ └── script.js   # An entry point that will compile into single javascript file.
...
```

By applying this type of structure we can read, maintain our scripting language easer, creating separated modules for our code blocks, importing just what we need, and reducing the amount of code time.

### Output files

By using `gulp.js` and `Browserify` we will convert `ES6` files into production ready, compilable with all browser `js` files. Tasks will be found in `gulp/tasks/es6.js` file.

```js
// gulp/tasks/es6.js

const es6 = () => mergeStream(
 glob.sync(PATH_TO_JS_SOURCE).map((entry) =>
 // transfer ES6 to ES5 using babelify.
   browserify({}).transform("babelify", {}).transform("sourceify")
    .pipe(buffer())
    .pipe(gulp.dest(PATH_TO_JS_OUTPUT))
  // other pipeline tasks goes here...
  ));

const cleanEs6 = () =>
 gulp
  .src(PATH_TO_JS_OUTPUT)
  .pipe(uglify({})) // uglify, and compress all js files.
  .pipe(rename({})) // rename all js files and add .min suffix.
  .pipe(gulp.dest(PATH_TO_JS_OUTPUT))
  // other pipeline tasks goes here...

// rest of the file...
```

And the build ready output files will become uglified, minified, clean from any comments or spaces, and supporting all browsers.

> **_NOTE:_** Any filename starts with underscore (_) example: '_FILE-NAME.js', will treated as private file and will not compile into a separate file.

**[⬆ Back To Top](#table-of-contents)**

---

## Assets

Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odio earum, repellendus nihil modi omnis iste deserunt, optio, nemo vel repellat. Recusandae deserunt tempore fuga alias facilis a error ea!

**[⬆ Back To Top](#table-of-contents)**

---

## Git Setup

Git is a version control system. It maintains a history of all changes made to the code. The changes are stored in a special database called “repository”, also known as “repo”.

Two main advantages of using Git at software development:

- Tracking the changes and updates. We are able to see who made which changes. Git also provides when and why a change was made.
- Allowing to work collaboratively. Software development projects usually require many people to work together. Git provides the developers with a systematic way of doing that. Thus, the developers focus on the project instead of extensive communication sessions between the other developers.

### Git WorkFlow

With Git, we have to choose between a variety of branching strategies and workflows. Having a structured workflow for collaboration is crucial for several reasons:

- **Code organization**: Keep the codebase organized, prevent overlapping work, and ensure focused efforts towards a common goal.

- **Version control**: Allow simultaneous work on different features without conflicts, maintaining code stability.

- **Code quality**: A code review and approval process helps maintain high code quality and adherence to coding standards.

- **Traceability and accountability**: Enable tracking of changes and their authors, simplifying issue identification and responsibility assignment.

- **Easier onboarding**: Help new team members quickly grasp the development process, and start contributing effectively.

- **Time and resource management**: Enable better planning, resource allocation, and meeting deadlines, ensuring an efficient development process.

- **CI/CD**: Incorporate automated testing and deployment processes, streamlining the release cycle and delivering high-quality software consistently.

A structured workflow promotes organization, efficiency, and code quality, leading to a more successful and streamlined development process.

If the default workflow is not specifically defined, many organizations end up with workflows that are:

- Too complicated.
- Not clearly defined.
- Not integrated with their issue tracking systems.

#### Git Flow workflow

We choose to work with [git flow workflow](https://nvie.com/posts/a-successful-git-branching-model/), As it is best for projects with a structured release cycle. It introduces two long-lived branches: master for production-ready code and develop for integrating features. Additional branches like feature, release, and hotfix are used for specific purposes, ensuring a strict and organized development process.

<p align="center" width="100%">
  <img width="50%" src="https://nvie.com/img/git-model@2x.png" alt="git flow workflow"/>
</p>

#### How it works

Instead of a single `master` branch, this workflow uses two branches to record the history of the project. The `master` branch stores the official release history, and the `develop` branch serves as an integration branch for features. It's also convenient to tag all commits in the `master` branch with a version number.

#### Feature branches

Each new feature should reside in its own branch, which can be pushed to the central repository for backup/collaboration. But, instead of branching off of `master`, `feature` branches use `develop` as their parent branch. When a feature is complete, it gets merged back into `develop`. Features should never interact directly with `master`.

`Feature` branches are generally created off to the latest develop branch.

When starting work on a new feature, branch off from the develop branch.

```
BASH
$ git checkout -b feature/feature_name develop
```

And When you’re done with the development work on the feature, The next step is to merge the `feature_branch` into `develop`.

```
BASH
$ git checkout develop
$ git merge --no-ff feature/feature_name
$ git branch -d feature/feature_name
$ git push origin develop
```

The `--no-ff` flag causes the merge to always create a new commit object, even if the merge could be performed with a fast-forward. This avoids losing information about the historical existence of a feature branch and groups together all commits that together added the feature.

#### Release branches

Once `develop` has acquired enough features for a release (or a predetermined release date is approaching), you fork a `release` branch off of `develop`. Creating this branch starts the next release cycle, so no new features can be added after this point—only bug fixes, documentation generation, and other release-oriented tasks should go in this branch. Once it's ready to ship, the `release` branch gets merged into `master` and tagged with a version number. In addition, it should be merged back into `develop`, which may have progressed since the release was initiated.

```
BASH
$ git checkout -b release/v1.2.0 develop
```

Once the release is ready to ship, it will get merged it into `master` and `develop`, then the `release` branch will be deleted. It’s important to merge back into `develop` because critical updates may have been added to the `release` branch and they need to be accessible to new features. If your organization stresses code review, this would be an ideal place for a pull request.

```
BASH
$ git checkout master
$ git merge --no-ff release/v1.2.0
$ git tag -a 1.2.0
$ git checkout develop
$ git merge --no-ff release/v1.2.0
$ git branch -d release/v1.2.0
```

#### Hotfix branches

Maintenance or `hotfix` branches are used to quickly patch production releases. `Hotfix` branches are a lot like `release` branches and `feature` branches except they're based on `master` instead of `develop`. This is the only branch that should fork directly off of `master`.

```
BASH
$ git checkout -b hotfix/1.2.1 master
$ git commit -m "Fixed severe production problem"
```

As soon as the fix is complete, it should be merged into both `master` and `develop` (or the current `release` branch), and `master` should be tagged with an updated version number, and then we can delete the `hotfix` branch.

```
BASH
$ git checkout master
$ git merge --no-ff hotfix/v1.2.1
$ git tag -a 1.2.1
$ git checkout develop
$ git merge --no-ff hotfix/v1.2.1
$ git branch -d hotfix/v1.2.1
```

If we want to automate the process we can make a small step forward by using [Gitflow](https://www.npmjs.com/package/gitflow) library to handle branching by simple commands, also [standard-version](https://www.npmjs.com/package/standard-version) for handling standard versioning by running either major/minor/patch commands and it will handle everything.

#### The overall flow of Gitflow is

- A `develop` branch is created from `master`.
- A `release` branch is created from `develop`.
- `Feature` branches are created from `develop`.
- When a feature is complete it is merged into the `develop` branch.
- When the `release` branch is done it is merged into `develop` and `main`.
- If an issue in `master` is detected a `hotfix` branch is created from `master`.
- Once the `hotfix` is complete it is merged to both `develop` and `master`

### Git Hooks

[Husky](https://typicode.github.io/husky/#/) is a tool for running scripts at different stages of the git process, for example add, commit, push, etc. We would like to be able to set certain conditions, and only allow things like commit and push to succeed if our code meets those conditions, presuming that it indicates our project is of acceptable quality.

You will notice a created folder called `.husky` in the project root. This is where your hooks will live. Make sure this directory is included in your code repo as it's intended for other developers as well, not just yourself.

And by adding the following script to `package.json` file

`package.json`

```
 JSON
  ...
  "scripts: {
    ...
    "prepare": "husky install"
  }
```

will ensure Husky gets installed automatically when other developers run the project.

There will be three hook files created already in `.husky` folder:

`pre-commit`

```
 BASH
 #!/usr/bin/env sh
 . "$(dirname -- "$0")/_/husky.sh"

 npx lint-staged
```

The above says that in order for our commit to succeed, the `lint-staged` script must first run and succeed. "Succeed" in this context means no errors. It will allow you to have warnings (remember in the ESLint config a setting of 1 is a warning and 2 is an error in case you want to adjust settings).

Lastly we are going to add one more tool. We have been following a standard convention for all our commit messages so far, let's ensure that everyone on the team is following them as well (including ourselves!). We can add a linter for our commit messages, We are using [commitlint](https://commitlint.js.org/#/) for this purpose.

Configuration we will be using a set of standard defaults, but I like to include that list explicitly in a `commitlint.config.js` file since I sometimes forget what prefixes are available:

`commitlint.config.js`

```js
module.exports = {
 extends: ["@commitlint/config-conventional"],
 rules: {
  "body-leading-blank": [1, "always"],
  "body-max-line-length": [2, "always", 100],
  "footer-leading-blank": [1, "always"],
  "footer-max-line-length": [2, "always", 100],
  "header-max-length": [2, "always", 100],
  "scope-case": [2, "always", "lower-case"],
  "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
  "subject-empty": [2, "never"],
  "subject-full-stop": [2, "never", "."],
  "type-case": [2, "always", "lower-case"],
  "type-empty": [2, "never"],
  "type-enum": [
   2,
   "always",
   ["feat", "fix", "docs", "refactor", "test", "style", "build", "ci", "chore", "revert", "perf", "wip"],
  ],
 },
};
```

Then enable commitlint with Husky we are user a `commit-msg` hook, will be found in `.husky` folder:

`commit-msg`

```
 BASH
 #!/usr/bin/env sh
 . "$(dirname -- "$0")/_/husky.sh"

 npx --no-install commitlint --edit "$1"
```

The commit message should be structured as follows:

```
 <type>[(optional scope)]: <description>

 [optional body]

 [optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

- BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning). A BREAKING CHANGE can be part of commits of any type.
- feat: it introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
- fix: it patches a bug in your codebase (this correlates with PATCH in semantic versioning)
- docs: Documentation only changes
- refactor: A code change that neither fixes a bug nor adds a feature
- test: Adding missing tests or correcting existing tests
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
- revert: If the commit reverts a previous commit
- perf: A code change that improves performance
- wip: work in progress

Feel free to try some commits that _don't_ follow the rules and see how they are not accepted, and you receive feedback that is designed to help you correct them.

**[⬆ Back To Top](#table-of-contents)**

---

## Code Formatting and Quality Tools

Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odio earum, repellendus nihil modi omnis iste deserunt, optio, nemo vel repellat. Recusandae deserunt tempore fuga alias facilis a error ea!

**[⬆ Back To Top](#table-of-contents)**

---

## References

Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odio earum, repellendus nihil modi omnis iste deserunt, optio, nemo vel repellat. Recusandae deserunt tempore fuga alias facilis a error ea!

**[⬆ Back To Top](#table-of-contents)**
