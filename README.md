# Navi
JS module for building navigation menus dynamically.

Build Instructions
-------------------

First, use [Node/NPM](https://nodejs.org/) to install dependencies

```
npm install
```

Next, use [Grunt](http://gruntjs.com/) to build project

```
grunt prod
```
**-- or --**
```
grunt dev
```
> Production is compressed and uglified. Development is uncompressed with sourcemaps.

Finally, copy `navi.js` file into your project.

> *Default `grunt` command will build development version and launch `grunt watch` to jump straight into coding*

Usage
---------------------

Add Navi to your `<head>`:
```html
<script src="navi.js"></script>
```

Call the module near the end of your `<body>`:

```javascript
Navi.init({ 
  container: 'container', 
  target: 'target', 
  id: 'id',
  type: 'type'
});
```

> Parameters:
> - `container` -- The DOM element you want to select menu to be appended to. (Default: `body`)
> - `target` -- The CSS selector string of elements you wish to be displayed in the menu (Default: `[data-navi]`)
> - `id` -- The HTML ID and Class you wish for the select menu to create (Default: `navi`)
> - `type` -- Which type of menu to build, `select` or `ul`. (Default: `select`)



*To use [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll), simply download the .js or .min.js file into your project and add it to your HTML `head` tag as follows:*
```html
<script src="smoothScroll.min.js"></script>
```
