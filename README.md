# Installation

## Install dependencies

`yarn install` or `npm install`

## Run local server and build

`gulp`

# Features

1. **Add** new item to agenda
2. **Drag and drop** documents to the drop area
3. **Automatic sort** of documents to agenda items based on requirements (leading numbers, same text)

# Architecture

* Web Components

  * VanillaJS **custom elements** - for the fun of it!

  * I have chosen to do this with Web Components since it's what I have been investing time in lately, both VanillaJS and with Polymer. My opinion is it provides a robust architecture without having to leave VanillaJS, and being standardised in the HTML/JS standard, it will be a technology that lasts. Also, custom elements v1 were recently implemented in most major browsers, while for others there is polyfill included in the index.html of this repo.

  * I would have used Backbone.js since that is what you use, but I did not work with it in some time, so I thought this will be quicker and more amusing for showcasing needs.

* NPM

* Gulp

  * For building SCSS
  * Autoprefix CSS with two latest browsers
  * Local dev server

* Bower

  * Deprecated, but webcomponents.org still use Bower, will be switched to NPM with Polymer 3.0

* SCSS

* BEM

  * Modified version of BEM, less nesting; always chain only one block with one element, see
  * From my experience, ANY methodology for writing CSS is better than none.
  * Helps team sync on CSS/SCSS

* Hosted on Firebase

# Remarks and What's Missing

## Unit Tests

Setup with Mocha is non-trivial (again because of HTML imports - very steep price for template and script in same file), setup would take this challenge out of scope, even though the developer heavily regrets not having unit tests during making this.

## HTML imports

Even though they are not standardised, HTML imports were used as there is currently no better way to have syntax highlighting for HTML and CSS when writing a custom component.
See [here](https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports)

## Build

Additionally, this setup is missing a proper build. Since I am using HTML imports, converting the JS from the script tag of the HTML import is non-trivial and out of scope of this demo. I am currently developing a build system for vanilla web components, similar as Polymer has it. Polymer CLI has a build command which converts of the components into ES5 code.
