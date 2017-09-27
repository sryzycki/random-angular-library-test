import { dest, src, task } from 'gulp';
import { resolve } from 'path';
import { mkdirpSync, writeFileSync } from 'fs-extra';
import { Bundler } from 'scss-bundle';

// The entry-point for the scss theming bundle.
const themingEntryPointPath = resolve('./src/styles/theming/_all-theme.scss');
// Output path for the scss theming bundle.
const themingBundlePath = resolve('./dist/_theming.scss');
// Matches all SCSS files in the library.
const allScssGlob = resolve('./src/styles/**/*.scss');


task('bundleThemeScss', function (done) {
  return new Bundler().Bundle(themingEntryPointPath, [allScssGlob])
    .then(result => {
      writeFileSync(themingBundlePath, result.bundledContent);
    });
});
