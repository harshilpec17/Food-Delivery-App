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
