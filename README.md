# marko-vite-rendertostring

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/node-ggbbcq)

## Scope and problem formulation

We are running a Marko / Express.js setup today. We want to convert from cjs to esm js and use Vite build tool.

The Marko server side rendering is done like this `template.renderToString(viewModel, errHtmlCallbackFunction);`

Vite seems to add a <script></script> before and after our template html. Any idea how we can get rid of the unwanted script tags?

## To run the test

```
npm ci
npm test
```
