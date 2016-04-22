<!-- .slide: data-background="img/background-orange-orig.jpg" -->

# Bindings

---

### Available Bindings
* [react-redux](https://github.com/gaearon/react-redux)
* [ng-redux](https://github.com/wbuchwalter/ng-redux)
* [ng2-redux](https://github.com/wbuchwalter/ng2-redux)
* [backbone-redux](https://github.com/redbooth/backbone-redux)
* [redux-falcor](https://github.com/ekosz/redux-falcor)
* [deku-redux](https://github.com/troch/deku-redux)

---

### React-Redux - Setup

```javascript
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myApp from './reducers';
import App from './components/App';

let store = createStore(myApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

```
---

### React Redux - Connect

```javascript
import React from 'react';
import { connect } from 'react-redux';
import { incrementBy, asyncIncrement, decrement } from './actions'

const Counter = React.createClass({

  render( ...  ),
})

const selector = (state) => ({ counter: state.counter })
const actions = { incrementBy, asyncIncrement, decrement };

export default connect(selector, actions)(Counter);
```

---

# [DEMO](http://localhost:8080/examples/react-counter)
## React Counter
