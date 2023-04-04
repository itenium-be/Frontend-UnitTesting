Frontend UnitTesting
====================

Jasmine
-------

You can never go wrong with **Jasmine** when doing frontend testing.

- [Project with all common usage as running tests](https://github.com/itenium-be/jasmine-tut)
- [Blog post series on Jasmine](https://itenium.be/blog/javascript/javascript-testing-jasmine-getting-started/)
- [Blog migrating from Jasmine to Jest](https://itenium.be/blog/javascript/javascript-testing-jasmine-to-jest/)
- [AVA: an alternative test runner](https://itenium.be/blog/javascript/ava-tutorial/)


Exercises are detailed below or in the [Github Discussions](https://github.com/itenium-be/Frontend-UnitTesting/discussions)


Jest
----

Facebook test runner for React. Stole Mocha's mojo.
Syntax is largely identical to Jasmine.

- [Jest Community](https://github.com/jest-community)
- [Jest Docs](https://jestjs.io/docs/getting-started)
- [Jest Cheat Sheet](https://github.com/sapegin/jest-cheat-sheet)


### Debugging

#### Chrome

```sh
cd react-testing
npm run debug:test
```

Put a `debugger;` and use the [Node.js V8 --inspector Manager] extension.


#### Visual Studio Code

[VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

See `.vscode/launch.json`.


### Jest Exercise

- `react-testing/src/date-holidays`: Is it time to fix the date-holidays performance issue permanently, TDD style?


### Express Exercises

See [confac](https://github.com/itenium-be/confac)  
Tag: `jest-start`  
Entrypoint: /backend/src/controllers/tests/  

- `0-config-templates.test.ts`: Mocking the FileSystem (easy)
- `0-user-verify.test.ts`: Mocking the google-auth-library (easy)
- `1-clients.test.ts`: Manual Express Mocking (easy)
- `2-consultants.test.ts`: Switching to [`mongodb-memory-server`](https://github.com/nodkz/mongodb-memory-server) from our poor-man `fakeDb` implementation (medium)
- `3-projectsMonth.test.ts`: Mocking Express with [`supertest`](https://github.com/ladjs/supertest) (medium)
- `4-projectsMonth.test.ts`: Bringing it all together (medium)
- `7-deleteInvoiceController.test.ts`: You're on your own now (hard)
- `8-createInvoiceController.test.ts`: A whole bunch of mocking (hard)
- `9-emailInvoiceController.test.ts`: Buffers, merging, lots of fun (hard)


React
-----

There are [three ways to test React](https://stackoverflow.com/a/54153026/540352) components:

**ReactTestUtils**: The most barebone API, the other 2 are built on top of this  
- [`react-dom/test-utils`](https://legacy.reactjs.org/docs/test-utils.html)
- [`react-test-renderer`](https://legacy.reactjs.org/docs/test-renderer.html)

**react-testing-library**:

What we will be using.  
- [Official Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [react-testing-library](https://github.com/testing-library/react-testing-library)
- [Jest Tutorial](https://jestjs.io/docs/tutorial-react)

**Enzyme**:

The React team no longer recommends the [Enzyme](https://github.com/enzymejs/enzyme/)
library as their primary choice for React testing.


### Wired Elements

This was a really bad idea.  
But it looks pretty cool.

- [Showcase](https://wiredjs.com/): Use this as an entrypoint to their documentation (upper right icon)
- [Github Repo](https://github.com/rough-stuff/wired-elements)
- [Simple Sandbox example](https://codesandbox.io/embed/xrll5wyl8w): **really** basic.
- [Bug: some Wired components crash](https://github.com/rough-stuff/wired-elements/issues/179): Slider, IconButton, Fab, ...
- [React Wrappers for Web Components](https://github.com/lit/lit/tree/main/packages/labs/react)
- [React and Web Components](https://coryrylan.com/blog/how-to-use-web-components-with-typescript-and-react)

### The DOM

- [Chrome Extension](https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano/related)
- [DOM Queries](https://testing-library.com/docs/queries/about): See `0.Enquete.test.tsc`
- [Fire Events](https://testing-library.com/docs/dom-testing-library/api-events/): fireEvent.click()
- [jest-dom](https://github.com/testing-library/jest-dom): toBeInTheDocument etc
- [shadow-dom-testing-library](https://github.com/konnorrogers/shadow-dom-testing-library): An additional package because WebComponents...


Angular
-------

Protracter is being deprecated?

- ReactiveForms testing
- Component testing
- Directive testing

https://testing-angular.com/
