Frontend UnitTesting
====================

Jasmine
-------

You can never go wrong with **Jasmine** when doing frontend testing.

- [Project with all common usage as running tests](https://github.com/itenium-be/jasmine-tut)
- [Blog post series on Jasmine](https://itenium.be/blog/javascript/javascript-testing-jasmine-getting-started/)
- [AVA: an alternative test runner](https://itenium.be/blog/javascript/ava-tutorial/)


Jest
----

Facebook test runner for React. Stole Mocha's mojo.
Syntax is largely identical to Jasmine.

- [Jest Community](https://github.com/jest-community)


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
