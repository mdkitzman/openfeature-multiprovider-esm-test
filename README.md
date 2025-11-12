# openfeature-multiprovider-esm-test
Testing the OpenFeature multi-provider in an esm application

Noticing an issue with flag evaluation with the most recent version of the `MultiProvider`
in that it is unable to properly evaluate boolean flag values, and will fall back to the
default value.

These test using the `MultiProvider` with a single provider of the basic `InMemoryProvider`
provided by the `server-sdk` and compare that with using the `InMemoryProvider` directly.

For good measure also comparing each situation in ESM and CJS environments.

## Setup

Requires Node installation

```sh
npm i
```

## Running

```sh
make compare
```

Current output, as of `2025-11-12`
```sh
ESM Multi Provider Value (should be true): false ❌
CJS Multi Provider value (should be true): false ❌
ESM Direct Provider Value (should be true): true ✅
CJS Direct Provider value (should be true): true ✅
```
