class based components is simple Javascript class, that denoted by the keyword `class` followed by the name of class which extends to the `React.Component` will have `render()` method, it will return the some piece of JSX. It will be exported like same as Javascript functional components.

```Javascript

class UserClass extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <h1>Name: Harshil </h1>
        )
    }
}

export default UserClass;

```

When we need to pass props in a class component, we typically use the `constructor`. The constructor method holds the props and allows us to set the initial state of the component.

The `super()` method is refer as the parent class constructor.

By calling `super()` within the constructor, we ensure that the parent class constructor is invoked first and performs its necessary operations. Once the parent constructor has executed, we can then use the `this` keyword inside the child component to access the props.

Note: It is important to note that using `this` before calling `super()` will result in an error because it violates the order of execution. JavaScript enforces the rule that the parent class constructor must be called before accessing the child class's properties. Therefore, it is necessary to invoke `super()` first to allow the parent class constructor to execute properly.

It is not necessary to pass the `props` to `super()`, it still would work as a time of execution React will pass the props to `this`. but, between, `super()` and `this` execution `props` will stand as the undefined. It is recommended to use the props as it will be helpful the time of debugging.
