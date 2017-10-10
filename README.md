# RandomAngularLibraryTest
[![Travis status](https://travis-ci.org/sryzycki/random-angular-library-test.svg?branch=master)](https://travis-ci.org/sryzycki/random-angular-library-test)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `npm start` and navigate to `http://localhost:5000/` to view the demo app showcasing all Rubix components. The app will automatically reload if you change any of the source files.

## Requirements to deliver

**Linting**
- [x] TypeScript
- [x] official Angular style guide
- [ ] Sass

**Theme & typography**
- [x] theme
- [x] typography
- [x] POF of consuming pattern library with a default theme
- [x] POF of consuming pattern library with a custom theme

**Documentation**
- [x] add a README.md section about Sass architecture to solve theming
- [ ] add a README.md section about i18n architecture to solve internationalisation
- [x] automated change log
- [ ] automatically generated docs for Angular components/services/...
- [ ] demo app showing working components inside of the pattern library
- [ ] deliver two components following (100%) the pattern library spec and cover them with unit tests so that the team can have a look around

**Continuous Integration/Deployment**
- [x] each build runs all the lint and unit test NPM scripts
- [ ] reject the PR merge if CI checks failed
- [ ] set up test coverage threshold (e.g. 90% threshold level) so that CI checks fail if it falls below

**Code scaffolding**
- [ ] set CLI config with default “viewEncapsulation” setting to "None"
- [ ] set CLI config with default “export” setting (AFAIR to do with whether or not to export the component?)

## How to theme a component

Let's say you want to develop a new themed component, a card component, for example. Here's how it's done in Rubix (which is heavily influenced by [Angular Material](https://material.angular.io) theming architecture).

### File structure

Each Angular component folder needs to contain two stylesheets:
- one for styles that are not related to a theme (`card.component.scss`),
- one for styles that are theme related only (`_card-theme.component.scss`).

### Theme not related stylesheet

The `card.component.scss` file is referenced inside of the Angular component `@Component()` decorator. Because of that, this file ends up compiled by Angular which means these styles will be provided by Angular together with the component's logic and component's template.
```typescript
@Component({
  selector: 'rbx-card',
  styleUrls: ['./card.component.scss'],
  // ...
})
export class CardComponent { }
```
```sass
.rbx-card {
  display: block;
  padding: 10px;
}
```

### Theme related stylesheet

The theme stylesheet (`_card-theme.component.scss`) exposes two mixins:
- a mixin that contains the theme (colours): `rbx-card-theme($theme)`,
- a mixin that contains typography: `rbx-card-typography($typography)`.

```sass
@import '../../../styles/theming/theming';
@import '../../../styles/typography/typography-utils';


@mixin rbx-card-theme($theme) {
  $background: map_get($theme, background);
  $foreground: map_get($theme, foreground);

  .rbx-card {
    background-color: map_get($background, content);
    color: map_get($foreground, base);
  }
}

@mixin rbx-card-typography($typography) {
  .rbx-card {
    font-family: rbx-font-family($typography, body-2);
    font-size: rbx-font-size($typography, body-2);
    font-weight: rbx-font-weight($typography, body-2);
  }
}
```

Both of the above mixins can then be included in two high level Sass partials:
- `_all-theme.scss` (located in `src/styles/theming/_all-theme.scss`)
```sass
// Import all the theming functionality (Sass functions, mixins, maps).
@import '../core';
@import '../../app/modules/hero-section/hero-section-theme.component';
@import '../../app/modules/card/card-theme.component';
@import '../../app/modules/button/button-theme.component';


// Create a theme.
@mixin rubix-theme($theme) {
  @include rbx-core-theme($theme);
  @include rbx-hero-section-theme($theme);
  @include rbx-card-theme($theme);
  @include rbx-button-theme($theme);
}
```
- `_all-typography.scss` (located in `src/styles/typography/_all-typography.scss`)
```sass
// Import all the typography functionality (Sass functions, mixins, maps).
@import './typography';
@import '../../app/modules/hero-section/hero-section-theme.component';
@import '../../app/modules/card/card-theme.component';
@import '../../app/modules/button/button-theme.component';


// Includes all of the typographic styles.
@mixin rubix-typography($typography: null) {
  @if $typography == null {
    $typography: rbx-typography-config();
  }

  @include rbx-base-typography($typography);
  @include rbx-hero-section-typography($typography);
  @include rbx-card-typography($typography);
  @include rbx-button-typography($typography);
}
```

### The `$theme` argument

The Angular component theme related stylesheet always exposes two mixins. The theme Sass mixin (`rbx-card-theme($theme)`) always gets passed one argument only: `$theme`. That argument is a Sass map that is returned from a Sass function that takes all the three colour palettes (primary, accent, warn) and returns a Rubix theme container (a Sass map).

### The `$typography` argument

The Angular component theme related stylesheet always exposes two mixins. The typography Sass mixin (`rbx-card-typography($typography)`) always gets passed one argument only: `$typography`. That argument is a Sass map that is returned from a Sass function that returns a Rubix typography container (a Sass map).

### The Rubix theme container

There are two Sass functions that return the Rubix theme container:
- `rbx-light-theme()`: returns a light Rubix theme container
- `rbx-dark-theme()`: returns a dark Rubix theme container
```sass
@function rbx-light-theme($primary, $accent, $warn: rbx-palette($rbx-red-palette)) {
  @return (
    primary: $primary,
    accent: $accent,
    warn: $warn,
    is-dark: false,
    foreground: $rbx-light-theme-foreground,
    background: $rbx-light-theme-background,
  );
}
```

### The Rubix typography container

The below `$config` variable holds the Sass map that later on gets passed as the `$typography` argument to each Angular component's exposed typography mixin.
```sass
// Represents a collection of typography levels.
// Defaults come from Rubix InVision prototype:
// https://tengroup.invisionapp.com/d/main#/console/10211079/242935406/preview
@function rbx-typography-config(
  $font-family:         'Roboto, "Helvetica Neue", sans-serif',
  $display-4:           rbx-typography-level(42px, 48px, 300),
  $display-3:           rbx-typography-level(27px, 32px, 300),
  $display-2:           rbx-typography-level(24px, 28px, 300),
  $display-1:           rbx-typography-level(18px, 22px, 500),
  $headline:            rbx-typography-level(22px, 26px, 300),
  $subheading:          rbx-typography-level(18px, 22px, 300),
  $body-3:              rbx-typography-level(14px, 18px, 700),
  $body-2:              rbx-typography-level(14px, 18px, 500),
  $body-1:              rbx-typography-level(14px, 18px, 300),
  $caption-2:           rbx-typography-level(10px, 10px, 500),
  $caption-1:           rbx-typography-level(12px, 14px, 300),
  $button-2:            rbx-typography-level(14px, 18px, 300),
  $button-1:            rbx-typography-level(12px, 14px, 300),
  // Line-height must be unit-less fraction of the font-size.
  $input:               rbx-typography-level(16px, 1.125, 400)
) {
  // Declare an initial map with all of the levels.
  $config: (
    display-4:      $display-4,
    display-3:      $display-3,
    display-2:      $display-2,
    display-1:      $display-1,
    headline:       $headline,
    subheading:     $subheading,
    body-3:         $body-3,
    body-2:         $body-2,
    body-1:         $body-1,
    caption-2:      $caption-2,
    caption-1:      $caption-1,
    button-2:       $button-2,
    button-1:       $button-1,
    input:          $input,
  );

  // Loop through the levels and set the `font-family` of the ones that don't have one to the base.
  // Note that SASS can't modify maps in place, which means that we need to merge and re-assign.
  @each $key, $level in $config {
    @if map-get($level, font-family) == null {
      $new-level: map-merge($level, (font-family: $font-family));
      $config: map-merge($config, ($key: $new-level));
    }
  }

  // Add the base font family to the config.
  @return map-merge($config, (font-family: $font-family));
}


// Represents a typography level (e.g. "display-4") from the Rubix design spec.
@function rbx-typography-level(
  $font-size,
  $line-height: $font-size,
  $font-weight: 400,
  $font-family: null
) {
  @return (
    font-size: $font-size,
    line-height: $line-height,
    font-weight: $font-weight,
    font-family: $font-family
  );
}
```

### How to override the Rubix default theme
So you have an app that depends on the Rubix pattern library. To apply your own theme to all the Rubix component all you need to do is to include this mixin:
```sass
@include rubix-theme($ten-app-theme);
```
To get `$ten-app-theme` variable that contains the Rubix theme container, you need to use the `rbx-light-theme()` Sass function that requires a couple of colour palettes returned by the `rbx-palette()` Sass function.

The `$rbx-light-theme-background` and `$rbx-light-theme-foreground` variables are put there in the global scope to be accessed when the `rbx-light-theme()` Sass function is invoked.

### Complete example of overriding Rubix theme
```sass
@import '~random-angular-library-test/theming';

// Include the common styles for Rubix. We include this here so that you only
// have to load a single css file for Rubix in your app.
// **Be sure that you only ever include this mixin once!**
@include rbx-core();

$rbx-primary-palette: (
  100: #ff808d,
  500: #eb041c,
  700: #cc0419,
  contrast: (
    100: black,
    500: white,
    700: white,
  )
);

$rbx-accent-palette: (
  100: #ffca7b,
  500: #f79e1b,
  700: #d67f00,
  contrast: (
    100: black,
    500: black,
    700: white,
  )
);

// Define a grey palette for general use,
// e.g. a content container component background.
$rbx-grey-palette: (
  50: #fafafa,
  100: #f5f5f5,
  200: #eeeeee,
  300: #e0e0e0,
  400: #bdbdbd,
  500: #9e9e9e,
  600: #757575,
  700: #616161,
  800: #424242,
  900: #3b3b3b,
  A100: #ffffff,
  A200: #eeeeee,
  A400: #bdbdbd,
  A700: #616161,
  contrast: (
    50: black,
    100: black,
    200: black,
    300: black,
    400: black,
    500: black,
    600: white,
    700: white,
    800: white,
    900: white,
    A100: black,
    A200: black,
    A400: black,
    A700: white,
  )
);

// Background palette for light themes.
$rbx-light-theme-background: (
  // App <body> element background colour.
  app:                  map_get($rbx-grey-palette, 300),
  // Content containers background colour.
  content:              white,
);

// Foreground palette for light themes.
$rbx-light-theme-foreground: (
  // Default "go to" typography colour. To be revised if needed.
  base:                 map_get($rbx-grey-palette, 900),
  // Big bad ass headlines colour.
  text-display:         map_get($rbx-primary-palette, 500),
  // Body text colour.
  text-body:            map_get($rbx-grey-palette, 900),
  // Caption colour.
  text-caption:         map_get($rbx-accent-palette, 500),
);

// Define the app theme.
//
// The "rbx-palette" Sass function takes the extended
// base color palette it was given and returns it
// with a few extra properties like:
// - default
// - default-lighter
// - default-darker
// - default-contrast
// - default-lighter-contrast
// - default-darker-contrast
$ten-primary:               rbx-palette($rbx-primary-palette, 500, 100, 700);
$ten-accent:                rbx-palette($rbx-accent-palette, 500, 100, 700);
$ten-app-theme:             rbx-light-theme($ten-primary, $ten-accent);

// Include the theme styles.
@include rubix-theme($ten-app-theme);
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
