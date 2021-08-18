# expo-sucrase-demo

Example of using sucrase to bundle an Expo project instead of Babel


## Development

```
expo start --clear
```

Reduced initial bundle time by about 40%. Source maps, symbolication, and fast refresh appear to be working (it's unclear why tho lol).


## Production

Probably there is something v core missing here because the prod bundles are also smaller:

```
expo export --public-url https://github.com/
```

### Babel

```
Finished building JavaScript bundle in 19307ms.

Bundle                     Size
┌ index.ios.js           833 kB
├ index.android.js       838 kB
├ index.ios.js.map       3.3 MB
└ index.android.js.map  3.31 MB
```

### Sucrase

```
Finished building JavaScript bundle in 10979ms.

Bundle                     Size
┌ index.ios.js           681 kB
├ index.android.js       685 kB
├ index.ios.js.map      3.17 MB
└ index.android.js.map  3.18 MB
```
