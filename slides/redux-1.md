<!-- .slide: data-background="img/background-orange-orig.jpg" -->

# Redux
## The Basics

---

### Main Ideas
* Single Source of Truth
* Unidirectional Data Flow
* Read Only State
* Immutability
* State mutations only with pure functions


---

### Redux Data Flow

<!-- .slide: data-state="flux" data-background-size="65%" data-background="img/redux-flow.png" -->

---

# [DEMO](http://localhost:8080/examples/counter)

---

### Actions
- Defines an intent to mutate state
- Must have a `type` property
- Can have `payload` data


```javascript
const INCREMENT_BY = 'INCREMENT_BY';

function incrementBy(value = 1) {
  return {
    type: INCREMENT_BY,
    payload: value
  }
}

// triggers an action
store.dispatch(increment(10));

```

---

### Reducers
- Defines the mutation logic of state based on actions

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
import { INCREMENT_BY } from './actions';

const initialState = { counter: 0 };

function counter(state = initialState, action) {
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
const previousState = { x: 'hello', y: 1 };

// 1) Object.assign
newState = Object.assign({}, previousState, { y: 10 } );

// 2) Object spread operator (ES7)
newState = { ...previousState, { y: 10 } };

// 3) React Immutability Helpers
newState = update(previousState, { y: { $set : 10 } });

```
<br><br>
<small>Link: [React Immutability Helpers](https://facebook.github.io/react/docs/update.html)</small>

---

### Reducer composition
- The state tree can be a composition of multiple reducers
- Each reducer operates only on a specific tree part

```javascript
import { combineReducers } from 'redux';

const userSession = function sessionReducer() {}
const articles = function articlesReducer() {}

const rootReducer = combineReducers(
  session: userSession,
  articles: articles
);

```
---

### Store
- Builds the connection between *Reducers* and *Actions*
  - Holds application state
  - Allows access to state
  - Allows state to be updated
  - Registers listeners
  - Handles unregistering of listeners

---

### Store - Example

```javascript
import { incrementBy } from './actions';
import { createStore } from 'redux';
import counter = './reducers';

const store = createStore(counter);

const unsubscribe = store.subscribe(() =>
  console.log(store.getState());
)

store.dispatch(incrementBy(10));

unsubscribe();
```
