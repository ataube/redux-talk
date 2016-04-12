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
- Like a command to modify state in the store
- Must have a type and if needed payload data


```javascript
const INCREMENT = 'INCREMENT'

function increment(value = 1) {
  return {
    type: INCREMENT,
    payload: value
  }
}

// triggers an action
store.dispatch(increment(10))

```

---

### A table

<table>
    <thead>
        <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Computer</td>
            <td>3</td>
            <td>100 €</td>
        </tr>
        <tr>
            <td>Book</td>
            <td>&gt;20</td>
            <td>4.31 €</td>
        </tr>
    </tr></tbody>
</table>

---

### Source code

```
 class LengthComparator implements Comparator<String> {
   public int compare(String first, String second) {
     return Integer.compare(first.length(), second.length());
   }
 }
```

---

### Intro

<!-- .slide: data-background="img/background-orange-orig.jpg" -->

1. What is the problem?
1. *What other solutions are there?*


---

### Another slide

Lorem ipsum
