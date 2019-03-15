# lemonbar.js
A wrapper around Lemonbar for Node.js written in TypeScript.
## Getting started
Obtain the `lemonbar.js` package from NPM:
```
yarn add lemonbar.js
```
Stick it in your project, below is an example.
## Example
```ts
import LemonbarJS from "lemonbar.js";

async function start() {
    // Pretty basic example:
    const bar = await LemonbarJS.make({
        redirect_stdout: true,
        clickableAreas: 5,
        docking: {
            bottom: true,
            force: false
        },
    });
    bar.write("Hello WORLD this is lemonbar.js");
}
start();
```