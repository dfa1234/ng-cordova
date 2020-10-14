# NgCordovaExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.


## How to use it

The project use `yarn`

Currently only android is configrated:
`cordova platform add android`

And then we can use the script in package.json, or manually: 

```sh
ng build --base-href .
cordova build
# and if there is a emulator ready: 
cordova emulate android
```

For development, we can of course use the angular ci with `ng serve`, but without the native plugins.

