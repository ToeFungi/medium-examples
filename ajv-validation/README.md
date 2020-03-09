# AJV Validation
Explore how to validate some given user data against a JSON schema using the AJV library for NodeJS and TypeScript. This
includes generic typings and can be used as a template/boilerplate should you wish to learn from it. This includes unit
tests to illustrate how easy it can be to write tests for the validator.

You can read the post with the following link
[TypeScript - Validation With AJV](https://levelup.gitconnected.com/typescript-validation-with-ajv-1b70a76dd678)

## Getting Started
You can get started with this example by cloning this repo
```bash
$ git clone https://github.com/ToeFungi/medium-examples.git
$ cd medium-examples/ajv-validation
$ npm i
```

## Running Unit Tests
To run the unit test, you can simply use the `npm run test` command as indicated in the `package.json`. If you're also
interested in determining the coverage, you can run `npm run coverage` which is included as well.

## What Tools are we Using?
- [ajv](https://www.npmjs.com/package/ajv) (Validation library)
- [mocha](https://www.npmjs.com/package/mocha) (Testing framework)
- [sinon](https://www.npmjs.com/package/sinon) (Stubbing framework)
- [chai](https://www.npmjs.com/package/chai) (Assertion library)
- [chai-as-promised](https://www.npmjs.com/package/chai-as-promised) (Syntactical sugar on assertions)

## What's the Goal of this Example?
The goal of this example is to illustrate the ease with which you can rapidly and extensively validate some user data
with a JSON schema and handle any errors that may arise in an appropriate manner. In addition to this, reviewing how
this can be tested in unit test with the Mocha framework.
