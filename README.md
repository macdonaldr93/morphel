# Morphel

![Build badge](https://github.com/macdonaldr93/morphel/actions/workflows/main.yml/badge.svg)

All the credit and praise goes to [morphdom](https://github.com/patrick-steele-idem/morphdom) 🙏

An addition to morphdom for restoring elements to original state.

This module was created to solve the problem of making a bunch of changes to elements and then needing to revert them back to the way they were.

## Usage

```bash
npm install morphel --save
# Or
yarn add morphel
```

The code below shows how to morph one `<div>` element to another `<div>` element and restore it.

```js
import Morphel from 'morphel';

const el1 = document.createElement('div');
el1.className = 'foo';

const morphel = new Morphel(el1);

const el2 = document.createElement('div');
el2.className = 'bar';

morphel.morph(el2);

expect(el1.className).toEqual('bar');

morphel.restore();

expect(el1.className).toEqual('foo');
```

## Commands

To run, use:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).
