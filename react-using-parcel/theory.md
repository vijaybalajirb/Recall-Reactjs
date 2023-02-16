- What is `NPM`?
Npm is the package manager for javascript programming language.

- What is `Parcel/Webpack`? Why do we need it?
Parcel/Webpack is basically bundlers that is used to make the app production ready.
It supports multiple features that make development easier
Some of the features of parcel are
It provides live server with hot module replacement.
It keep tracks of changes in the code base ie file watcher in c++
It uses caching to make the development or production build faster.
It minimize the code for production
It allows to test using https server.
It bundles the code or application.
It takes care of port.
Using browserlist it can make the application to work with all versions of browsers.
These are the some of the features of Parcel.

- What is `.parcel-cache`
parcel-cache is used to minimize the build time of the application,it chaches the previous build and minimize the time the application takes to complete the build.

What is `npx` ?
NPX stands for Node Package Executes is an NPM package runner that makes it really easy to install any sort of node executable that would have normally been installed using NPM.

What is difference between `dependencies` vs `devDependencies`
Dependencies are the main requirements of application which the application will break if it is not installed.
Devdependencies are installed to make the development process easier it will not affect the applciation,

What is Tree Shaking?
It is the dead code eleminating technique that applied when optimizing the code.

- What is Hot Module Replacement?
It is used to update the modules in the runtime without the need to refresh the entire page.

- List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.
It supports multiple features that make development easier
Some of the features of parcel are
It provides live server with hot module replacement.
It keep tracks of changes in the code base ie file watcher in c++
It uses caching to make the development or production build faster.
It minimize the code for production

- What is `.gitignore`? What should we add and not add into it?
.gitignore is used to ignore the files that added to github repositories.
files which can be installed in the server directly like node_modules should not be added to the repository. Files which we cant generate in the server should be ignored from the gitignore.

- What is the difference between `package.json` and `package-lock.json`
Both contains the package informations of the applicaion.
Here package.json might get updated whenever the libraries inside it got updated.
Package-lock.json will maintain the same versions of dependencies or libraries which were added to the application while in development.

- Why should I not modify `package-lock.json`?
package-lock.json will contain the exact version of dependencies or libraries which were added to the application while in development.Changes in the package-lock.json will create mess in the production environment.

- What is `node_modules` ? Is it a good idea to push that on git?
Node_modules is the collection of javascript files that can be used to develop the application and it is huge.Node modules should not be pushed to git because it can be regenerated with the help of npm in the server which avoid unnecessary transfer of huge files.

- What is the `dist` folder?
Parcel follows the dependencies in each resolved entry to build your source code for one or more targets. Targets specify the output directory or file path, as well as information about how your code should be compiled.By default, Parcel includes a single implicit target which outputs into the dist folder.

- What is `browserlists`
browserlists help you determine whether your application should be run on older versions of browers or not.you can add any version of browsers in the `browserlists you wish to run the application.





