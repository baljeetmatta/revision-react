import React from 'react';
type GProps = {
    value: string;
}
type StateType = {
    a: number;
}
class GreetClass extends React.Component<GProps, StateType>
{
    state = { a: 10 }

    //a=10;
    clickHandler = () => {
        //this.state.a++;
        //console.log(this.a);
        this.setState((prevState) => ({ a: prevState.a + 1 }));
        this.setState((prevState) => ({ a: prevState.a + 1 }));
        this.setState((prevState) => ({ a: prevState.a + 1 }));

    }

    render() {


        return (
            <>
                <p>Greeting to {this.props.value} -{this.state.a}</p>
                <button onClick={this.clickHandler}>Update</button>
            </>
        )
    }
}
export default GreetClass;