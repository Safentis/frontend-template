const config = {
    // this will check Typescript files
    '**/*.(ts|tsx)': () => 'npx tsc --noEmit',
  
    // this will lint and format TypeScript and javaScript files
    '**/*.(ts|tsx|js)': (filenames) => [
      `npx eslint --fix ${filenames.join(' ')}`,
      `npx prettier --write ${filenames.join(' ')}`,
    ],
  
    // this will format MarkDown and JSON
    '**/*.(md|json)': (filenames) =>
      `npx prettier --write ${filenames.join(' ')}`,

    // this will format CSS and SCSS
    '**/*.(css|scss)': (filenames) =>
      `npx prettier --write ${filenames.join(' ')}`,
}

export default config;
