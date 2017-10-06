# RandomAngularLibraryTest
[![Travis status](https://travis-ci.org/sryzycki/random-angular-library-test.svg?branch=master)](https://travis-ci.org/sryzycki/random-angular-library-test)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

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

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:7890/`. The app will automatically reload if you change any of the source files.

## How to theme a component

Each component should two stylesheet files: one for non theme related styles and one for theme related only CSS rules.
The theme related stylesheet exposes two mixins: theme and typography that are later collected and included in a top level Sass partial.

**$theme argument - structure**
Theme mixin always gets one `$theme` variable which is an object that is build by either a "light" or "dark" theme function:
```sass
// Creates a container object for a light theme to be given to
// every individual component theme mixins.
@function rbx-light-theme($primary, $accent, $warn: rbx-palette($rbx-red)) {
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

**$typography-config argument - structure**
```sass

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
