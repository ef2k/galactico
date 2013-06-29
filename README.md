Galactico
=========

Quickly scaffold a directory structure from a predefined template.

Status
------
Usable, but lacking polish.

Install
-------

Available through NPM:

```bash
$: npm install galactico
```

Usage
-----

After installing, you'll see a `.galactico` folder in your home directory. This is
where you should drop in your templates, which are javascript files. Have a look at "Creating Templates" below.

Call it using the `gco` or `galactico` commands.

Initializing a template in your current working directory can be done like this:

```bash
$: gco init <templateName>
```

Creating Templates
------------------

Templates are javascript files placed inside of the `.galactico` folder in your
`home` directory. A basic template looks like this:

```js
// filename: singlepage.js

var singlepage = {
  name: 'singlepage',
  description: 'A single page website',
  directories: ['css', 'js'],
  files: ['index.html', css/master.css', 'js/main.js']
};

exports.template = singlepage;
```

Drop the file in `$HOME/.galactico`.

Using it via `$: gco init singlepage` will result in a directory structure like this:

```text
- index.html
- css /
     - master.css
- js /
     - main.js
```

TODO
----

* List templates using `$: gco list`.
* Generate template files using `$: gco template <name>`.