<!-- .slide: data-background="img/background-orange-orig.jpg" -->

# Redux
## The Basics

---

### Three Principles
1. One application state / One store
1. State is readonly
1. State mutations only with pure functions

---

### Actions
- Like a command to modify store state
- Must have a `type` and if needed `payload` data


```javascript
const INCREMENT_BY = 'INCREMENT_BY'

function incrementBy(value = 1) {
  return {
    type: INCREMENT_BY,
    payload: value
  }
}

// triggers an action
store.dispatch(increment(10))

```

---

### Reducers
- Define how state should mutate based on actions occurred

`(previousState, action) => newState`

---

### Reducers - Purity
- Reducers are pure functions
- They should never:
  - mutate arguments
  - cause side effects (API calls, etc...)
  - calling non-pure functions `Date.now()` or `Math.random()`

---

### Reducers - Example
```javascript
import { INCREMENT_BY } from './actions'

const initialState = { counter: 0 };

function(state = initialState, action) {
  switch(action.type) {
    case INCREMENT_BY:
      return { counter: state.counter + action.payload }
    default:
      return state;
  }
}

```
---


### Reducers
#### How to return a new state?

```javascript
const previousState = { x: 'hello', y: 1 }

// 1) Object.assign
newState = Object.assign({}, previousState, { y: 10 } )

// 2) Object spread operator (ES7)
newState = { ...previousState, {y: 10 } }

// 3) React Immutable helpers
newState = update(previousState, { y: { $set : 10 } })

```
<br><br>
<small>Link: [React Immutable Helpers](https://facebook.github.io/react/docs/update.html)</small>

---

### Store




---
