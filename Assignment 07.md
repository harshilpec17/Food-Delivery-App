when we use the only callback function, when every render cycle of any component is done useEffect hooks will be called.

- When there is dependency array empty use effect is called initial render just once.

- When we put something in the dependency array,if that dependency updated then only use effect will be called

---

## useState

never create a hooks outside the component. and on the top after declaring the component.

- never use the useState inside the condition,loop, function, it will create inconsistency in the program

- ## Outlet
- it is a way provided by the react as it will load the children page whichever route we are on. so we dont have to write too many if conditions

- it will not show in the console, as particular componenet will replace the outlet components

-----link

for routing never ever use the anchor tag, if you use then whole page will rerender.

there are link component given by react router-DOM which will just reload the page not the header

---

## 2 types of routing

- client side routing
  -- when we do not make the call to network it called client side routing. while the first render whole data is already loaded. we are just changing page. It is the concept of the single page application

- server side routing
  -- if you are making a network call to server to fetch the data of different thing it called server side routing.
