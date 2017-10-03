# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="10.0.0"></a>
# [10.0.0](https://github.com/sryzycki/random-angular-library-test/compare/v9.0.0...v10.0.0) (2017-10-03)


### Features

* **button:** add ability to blow up the world ([8d23e1e](https://github.com/sryzycki/random-angular-library-test/commit/8d23e1e))


### BREAKING CHANGES

* **button:** xyz input has been removed.

Before:
```html
<button></button>
```
After:
```html
<button new-button=“blabla”></button>
```



<a name="9.0.0"></a>
# [9.0.0](https://github.com/sryzycki/random-angular-library-test/compare/v8.0.0...v9.0.0) (2017-10-03)


### Features

* **styles:** make it easier to override colour palettes ([0eb7406](https://github.com/sryzycki/random-angular-library-test/commit/0eb7406))


### BREAKING CHANGES

* **styles:** change names of the variables that are used to construct the themes container object.

Before:
```scss
// Background palette for light themes.
$rbx-light-theme-background: (
  background:           map_get($rbx-grey, 300),
  button:               map_get($rbx-indigo, 500),
  button-hover:         black,
  content:              white,
);

// Foreground palette for light themes.
$rbx-light-theme-foreground: (
  base:                 map_get($rbx-grey, 900),
  button:               white,
  text-display:         map_get($rbx-indigo, 500),
  text-body:            map_get($rbx-grey, 900),
  text-caption:         map_get($rbx-orange, 500),
);
```

After:
```scss
// Background palette for light themes.
$rbx-light-theme-background: (
  background:           map_get($rbx-grey-palette, 300),
  button:               map_get($rbx-primary-palette, 500),
  button-hover:         black,
  content:              white,
);

// Foreground palette for light themes.
$rbx-light-theme-foreground: (
  base:                 map_get($rbx-grey-palette, 900),
  button:               white,
  text-display:         map_get($rbx-primary-palette, 500),
  text-body:            map_get($rbx-grey-palette, 900),
  text-caption:         map_get($rbx-accent-palette, 500),
);
```

From now on if you override the `$rbx-primary-palette` and the `$rbx-accent-palette` variables you can decide not to build the `$rbx-light-theme-background` and `$rbx-light-theme-foreground` colour Sass maps if you don’t need to.



<a name="8.0.0"></a>
# [8.0.0](https://github.com/sryzycki/random-angular-library-test/compare/v7.0.0...v8.0.0) (2017-10-02)


### Bug Fixes

* **app:** change page layout - test ([485f2df](https://github.com/sryzycki/random-angular-library-test/commit/485f2df))


### BREAKING CHANGES

* **app:** the whole universe collapses.



<a name="7.0.0"></a>
# [7.0.0](https://github.com/sryzycki/random-angular-library-test/compare/v6.0.0...v7.0.0) (2017-10-02)


### Features

* **button:** make inputs emulate html attributes ([c5b064e](https://github.com/sryzycki/random-angular-library-test/commit/c5b064e))


### BREAKING CHANGES

* **button:** input syntax changed.

Before:
```html
<button rbxButton rbxImportance=“primary”>Button</button>
```
After:
```html
<button rbx-button rbx-importance=“primary”>Button</button>
```
This is to align usage of our custom elements with native HTML elements. All attributes are name spaced.



<a name="6.0.0"></a>
# [6.0.0](https://github.com/sryzycki/random-angular-library-test/compare/v5.3.0...v6.0.0) (2017-09-27)


### Features

* **build:** ensure _theming.scss content is deduped ([a043454](https://github.com/sryzycki/random-angular-library-test/commit/a043454))



<a name="5.3.0"></a>
# [5.3.0](https://github.com/sryzycki/random-angular-library-test/compare/v5.2.0...v5.3.0) (2017-09-27)


### Features

* **build:** bundle all the theming scss code into dist/_theming.scss ([f738098](https://github.com/sryzycki/random-angular-library-test/commit/f738098))



<a name="5.2.0"></a>
# [5.2.0](https://github.com/sryzycki/random-angular-library-test/compare/v5.1.0...v5.2.0) (2017-09-26)


### Features

* **build:** add “release” npm script to run all build steps ([abb84ce](https://github.com/sryzycki/random-angular-library-test/commit/abb84ce))



<a name="5.1.0"></a>
# [5.1.0](https://github.com/sryzycki/random-angular-library-test/compare/v5.0.0...v5.1.0) (2017-09-26)


### Features

* **build:** add a NPM script to bundle all theming scss partials ([f6cee15](https://github.com/sryzycki/random-angular-library-test/commit/f6cee15))



<a name="5.0.0"></a>
# [5.0.0](https://github.com/sryzycki/random-angular-library-test/compare/v4.5.0...v5.0.0) (2017-09-26)


### Features

* **app:** improve npm scripts ([45d5254](https://github.com/sryzycki/random-angular-library-test/commit/45d5254))


### BREAKING CHANGES

* **app:** the “packagr” and “release” scripts have been renamed.



<a name="4.5.0"></a>
# [4.5.0](https://github.com/sryzycki/random-angular-library-test/compare/v4.1.1...v4.5.0) (2017-09-26)



<a name="4.1.1"></a>
## [4.1.1](https://github.com/sryzycki/random-angular-library-test/compare/v4.1.0...v4.1.1) (2017-09-26)


### Bug Fixes

* **app:** fix demo app button module import ([2940035](https://github.com/sryzycki/random-angular-library-test/commit/2940035))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/sryzycki/random-angular-library-test/compare/v4.0.2...v4.1.0) (2017-09-26)


### Features

* let’s figure out what’s wrong ([bfecce8](https://github.com/sryzycki/random-angular-library-test/commit/bfecce8))



<a name="4.0.2"></a>
## [4.0.2](https://github.com/sryzycki/random-angular-library-test/compare/v4.0.1...v4.0.2) (2017-09-26)



<a name="4.0.1"></a>
## [4.0.1](https://github.com/sryzycki/random-angular-library-test/compare/v4.0.0...v4.0.1) (2017-09-25)


### Bug Fixes

* add “packagr” into “release” npm script ([bf34c30](https://github.com/sryzycki/random-angular-library-test/commit/bf34c30))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/sryzycki/random-angular-library-test/compare/v3.0.0...v4.0.0) (2017-09-25)


### Code Refactoring

* **button:** prefix exported button module ([eed8607](https://github.com/sryzycki/random-angular-library-test/commit/eed8607))


### BREAKING CHANGES

* **button:** the module name has changed.

Before:
```javascript
import { ButtonModule } from ‘random-angular-library-test’;
```

After:
```javascript
import { RbxButtonModule } from ‘random-angular-library-test’;
```



<a name="3.0.0"></a>
# [3.0.0](https://github.com/sryzycki/random-angular-library-test/compare/v2.0.0...v3.0.0) (2017-09-25)


### Features

* **button:** introduce a button styled based on importance level ([3db0414](https://github.com/sryzycki/random-angular-library-test/commit/3db0414))
* **styles:** set up theme and typography Sass functions and mixins ([c868755](https://github.com/sryzycki/random-angular-library-test/commit/c868755))


### BREAKING CHANGES

* **button:** the `clicked` component output has been removed after initial period of fucking around.

Before:
```javascript
<button
  clicked=“handleClick()”
>
  Button
</button>
```

After:
```javascript
<button
  rbxButton
  rbxImportance=“primary”
>
  Button
</button>
```



<a name="2.0.0"></a>
# [2.0.0](https://github.com/sryzycki/random-angular-library-test/compare/v1.0.1...v2.0.0) (2017-09-13)


### Code Refactoring

* **button:** project the text inside the button ([ce8dc86](https://github.com/sryzycki/random-angular-library-test/commit/ce8dc86)), closes [#456](https://github.com/sryzycki/random-angular-library-test/issues/456)


### BREAKING CHANGES

* **button:** component input is no longer accepted.

Before:
```html
<app-component text="My badass copy"></app-component>
```
After:
```html
<app-component>My badass copy</app-component>
```



<a name="1.0.1"></a>
## [1.0.1](https://github.com/sryzycki/random-angular-library-test/compare/v1.0.0...v1.0.1) (2017-09-13)


### Bug Fixes

* **button:** correct wording in the “clicked” event ([127a18c](https://github.com/sryzycki/random-angular-library-test/commit/127a18c)), closes [#21](https://github.com/sryzycki/random-angular-library-test/issues/21)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/sryzycki/random-angular-library-test/compare/v0.2.0...v1.0.0) (2017-09-13)


### Features

* **button:** pass button content as an @Input() ([88d4cc0](https://github.com/sryzycki/random-angular-library-test/commit/88d4cc0)), closes [#123](https://github.com/sryzycki/random-angular-library-test/issues/123)


### BREAKING CHANGES

* **button:** content projection is no longer used.
To migrate the code follow the example below:

Before:
<app-button>My fancy text</app-button

After:
<app-button text=“My fancy text”></app-button>



<a name="0.2.0"></a>
# [0.2.0](https://github.com/sryzycki/random-angular-library-test/compare/v0.1.1...v0.2.0) (2017-09-13)


### Features

* **button:** emit “clicked” event ([c45ac87](https://github.com/sryzycki/random-angular-library-test/commit/c45ac87))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/sryzycki/random-angular-library-test/compare/v0.1.0...v0.1.1) (2017-09-13)


### Bug Fixes

* **button:** apply correct CSS class to implement awesome design ([c5b5aef](https://github.com/sryzycki/random-angular-library-test/commit/c5b5aef))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/sryzycki/random-angular-library-test/compare/v0.0.0...v0.1.0) (2017-09-13)


### Features

* **button:** introduce brand new amazing feel ([8bf303b](https://github.com/sryzycki/random-angular-library-test/commit/8bf303b))



<a name="0.0.0"></a>
# 0.0.0 (2017-09-13)
