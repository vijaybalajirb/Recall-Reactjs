What is EMMET ? 
It is a plugin that improves the workflow , Simply shortcut expanded into full piece of code.

Difference between a Library and Framework?
Both are written by some people to solve the problems.
When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. 
When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

What is CDN? Why do we use it?
The primary purpose of a content delivery network (CDN) is to reduce latency, or reduce the delay in communication created by a network's design.
It is the simplest way to use it in our application without having installed entire libraries.

Why is React known as React?
React is a JavaScript library for building user interfaces. It was developed by Facebook, and the name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.” The library was designed to “react” to changes in data.

What is crossorigin in script tag?
A cross-origin request is a request for a resource(e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

What is diference between React and ReactDOM?
React is responsible for creating the element
ReactDOM is responsible for rendering the element.

What is difference between react.development.js and react.production.js files via CDN?
Main difference is production verison is more optimised when compared to developement version.

What is async and defer? 
async and defer are boolean tags to load the external script into our webpages.
When we load a web page the two things happenings are 
HTML parsing
Script loading - fetching the script from network , Executing the script line by line.
In case of normal script - HTML parsing will wait till script is loaded.
In case of async - Script will execute along with the html parsing in parellel.
In case of defer - HTML parsing will go on and the script are executed only when HTML parsing is complete.
*Async - Does not guarentee order of the execution of script
 Defer - Maintains the order of the execution of script.*
When should we use what
If script are interdependent then async is not a good option to use.

Package.json
version with ~ will give you bug fixes
version with ^ Will help you to use old versions of package

Why Package-lock.json - To maintain the same versions of packages.





