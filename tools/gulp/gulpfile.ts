import { task } from 'gulp';
import { resolve } from 'path';
import { writeFileSync } from 'fs-extra';
import { Bundler } from 'scss-bundle';

// The entry-point for the scss theming bundle.
const themingEntryPointPath = resolve('./src/styles/theming/_all-theme.scss');
// Output path for the scss theming bundle.
const themingBundlePath = resolve('./dist/_theming.scss');
// Matches all SCSS files that are inside of Angular modules.
const allModulesScssGlob = resolve('./src/app/modules/**/*.scss');
// Matches all SCSS files to do with theming/typography Sass functions/mixins.
const allThemingScssGlob = resolve('./src/styles/**/*.scss');

/**
 * Bundle all the theming/typography SCSS code.
 *
 * So there are two types of SCSS code in this project:
 * 1) non theme related SCSS that is handled by Angular components,
 * 2) theme/typography SCSS that needs to be bundled separately and
 *    exposed inside of the /dist folder.
 */
task('theming:bundle', function () {
  return new Bundler()
    .Bundle(themingEntryPointPath, [allModulesScssGlob, allThemingScssGlob])
    .then(result => {
      writeFileSync(themingBundlePath, result.bundledContent);
    });
});
