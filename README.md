# Navi
JS module for building small navigation menus dynamically.

Build Instructions
-------------------

First, use NPM to install dependencies

`npm install`

Next, use Grunt to build public folder

`grunt prod` for production

-- OR --

`grunt dev` for development

*Default `grunt` command will build development version and launch `grunt watch` to jump straight into coding*

Finally, copy `navi.js` file into your project.


Usage
---------------------

Add Navi to your HTML page and call the module like so:

```
Navi.init( { 
  container: 'container', 
  target: 'target', 
  id: 'id' 
});
```

Parameters:
- `container` -- The DOM element you want to select menu to be appended to. (Default: `body`)
- `target` -- The CSS selector string of elements you wish to be displayed in the menu (Default: `[data-navi]`)
- `id` -- The HTML ID and Class you wish for the select menu to create (Default: `navi`)

