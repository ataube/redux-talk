<!-- .slide: data-background="img/background-orange-orig.jpg" -->

# Redux
## Advanced Topics

---

### Middleware
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


---

### Topics
1. Async Actions
2. Middleware Concept
3. normalizr
4. ....
