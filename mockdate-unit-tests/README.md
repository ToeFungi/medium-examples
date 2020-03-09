# Mocking Dates with Mockdate
Explore how to mock JavaScript's native `Date` functionality within your unit tests. This example is however written in
TypeScript. The functionality remains identical though and the libraries are available for both TS and JS.

## Getting Started
You can get started with this example by cloning this repo
```bash
$ git clone https://github.com/ToeFungi/medium-examples.git
$ cd medium-examples/mockdate-unit-tests
$ npm i
```

## Running Unit Tests
To run the unit test, you can simply use the `npm run test` command as indicated in the `package.json`. If you're also
interested in determining the coverage, you can run `npm run coverage` which is included as well.

## What Tools are we Using?
- [mocha](https://www.npmjs.com/package/mocha) (Testing framework)
- [chai](https://www.npmjs.com/package/chai) (Assertion library)
- [chai-as-promised](https://www.npmjs.com/package/chai-as-promised) (Syntactical sugar on assertions)
- [mockdate](https://www.npmjs.com/package/mockdate) (Stubbing library for mocking JS Dates)

## What's the Goal of this Example?
The goal of this example is to practically illustrate how easy it can be to mock out JavaScript's native Date
functionality within a function so as to allow developers to more easily unit test their functions.
