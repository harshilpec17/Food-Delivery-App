## 1. How do you created Nested Routes react-router-dom configuration ?

react-router is used to create the routing inside the application, It can help to navigate to different pages.

```Javascript
const router = createBrowserRouter([
   {
      path: "/", // show path for routing It use for the main path which means, first route in the nested route.
      element: <Parent />, // It will show the component, in the first nested routes.
      errorElement: <Error />, // show error component for path is different, or is not listed
      children: [ // show children component for routing, after the parent routing
         {
            path: "/path",
            element: <Child />
            children: [{ // this is the way of creating the sub route for configuration.
                path: "/child",
                element: <SubChild />,
            }]
         }
      ],
   }
])
```

## 2. Read about createHashRouter, createMemoryRouter from React Router docs ?

A:
