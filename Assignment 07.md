when we use the only callback function, when every render cycle of any component is done useEffect hooks will be called.

- When there is dependency array empty use effect is called initial render just once.

- When we put something in the dependency array,if that dependency updated then only use effect will be called

---

## useState

never create a hooks outside the component. and on the top after declaring the component.

- never use the useState inside the condition,loop, function, it will create inconsistency in the program
