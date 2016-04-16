<!-- .slide: data-background="img/background-orange-orig.jpg" -->

# Redux
## Advanced Topics

---

## Middleware

---

### Middleware - Definition
> "A third-party extension point between dispatching an action,
> and the moment it reaches the reducer"
>

[Redux docs](http://redux.js.org/docs/advanced/Middleware.html)
---

### Middleware - Use cases
* logging
* async actions
* crash reporting
* routing
* site effects
* etc...

---

### Middleware - Signature
`({ getState, dispatch }) => next => action`

---

### Middleware - Logging Example

```javascript
export default function createLogger({ getState }) {
  return (next) => (action) => {
    const prevState = getState();
    const returnValue = next(action);
    const nextState = getState();

    console.log('prev state', prevState);
    console.log('action', action);
    console.log('next state', nextState);

    return returnValue;
  };
}
```

---

# [DEMO](http://localhost:8080/examples/logger)

---

## Async Actions

---

### Default Behavior
- Synchronous data flow
- Every time an action gets dispatched, the state updates immediately

<br>
=> use the middleware concept to enable async data flow

---

### Async Middleware's
* [redux-thunk](https://github.com/gaearon/redux-thunk)
* [redux-promise](https://github.com/acdlite/redux-promise)
* [redux-rx](https://github.com/acdlite/redux-rx)
* [redux-gen](https://github.com/weo-edu/redux-gen)
* [redux-saga](https://github.com/yelouafi/redux-saga)

---

### Redux Thunk
- Returns a function instead of an action
- Dispatch of action's can be delayed or executed on certain conditions
- Implementation:


```javascript
export default function thunkMiddleware({ dispatch, getState }) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
}

```
---
