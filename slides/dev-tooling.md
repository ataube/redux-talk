<!-- .slide: data-background="img/background-orange-orig.jpg" -->

# Dev Tooling

---

## Why dev tooling?
* Inspect state changes
* Time travel
* Persist debug sessions
* Hot reloading

---

## Redux Dev Tools
* A redux extension for live editing and time travel [(link)](https://github.com/gaearon/redux-devtools)
* Native React components (Debug-Views)
  * LogMonitor [(link)](https://github.com/gaearon/redux-devtools-log-monitor)
  * SliderMonitor [(link)](https://github.com/calesce/redux-slider-monitor)
  * etc...
* Chrome Extension [(link)](https://github.com/zalmoxisus/redux-devtools-extension)

. . .    

=> always remember to disable dev tooling in production!

---

# [DEMO](http://127.0.0.1:8080/examples/dev-tooling)
## Redux Dev Tools Chrome Extension

---

## Hot reloading
* Idea: _Inject file changes in your running app while keeping the application state in place._
* Suited for Webpack and React
* Further reading:
  * Webpack Hot Module replacement [(link)](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)
  * React Hot Loader [(link)](https://github.com/gaearon/react-hot-loader)
