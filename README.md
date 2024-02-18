# dcp-echoes

A simple wrapper for the [dcp-client](https://www.npmjs.com/package/dcp-client) DCP SDK intended to make it easier to use in NodeJS.

## Usage

Require dcp-client as many times as you want just like any other npm package!

```js
const { wallet, compute } = require('dcp-echoes');
const protocol = require('dcp-echoes').protocol;
const job = require('dcp-echoes').job;
```

## Note

Be warned, dcp-echoes invokes the initialization function for dcp-client.
This means your code will break if you attempt to re-initialize dcp-client.

```js
const wallet = require('dcp-echos').wallet;
const compute = require('dcp-echos').compute;
const dcp = require('dcp-client').initSync(); // THROWS AN ERROR ):
```

However, you are free to require dcp-echos after you have invoked dcp-client's initialization function.

```js
const dcp1 = require('dcp-client').initSync();
const dcp2 = require('dcp-echoes'); // works fine (:
```

# Disclaimer

This code is not endorsed or supported by Distributive. I did this for my own use. Use at your own risk.

