module.exports = {
  '**/*.{ts,tsx}': () => 'tsc -p ./tsconfig.json --noEmit',
  '*.{js,ts,tsx}': ['eslint --ext=js,ts,tsx --cache --fix', 'stylelint'],
  '*.md': ['prettier --write'],
  '*.{babelrc,stylelintrc,json}': ['prettier --parser json-stringify --write'],
  '*package.json': ['prettier-package-json --write'],
};
