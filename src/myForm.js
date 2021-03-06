
import NewType from './new';
import React, { lazy, Suspense } from 'react';

const Artists = lazy(() => import('./new'))
// class type component declaration - stateful React component 
class MyForm extends React.Component {
  // in constructor initiate the component's properties.

          /* props- declare inside the usage of component,  variable name, 
 Props are also how you pass data from one component to another, as parameters. */
  constructor(props) {
    // must call super it refers to the parent class.
    super(props);
    // component properties should be kept in an object called state.
    this.state = { username: '' };

    //   you must use regular functions instead of arrow functions you have to bind this to the component instance using the bind() method:
    this.shoot = this.shoot.bind(this)
  }

  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  shoot = () => {
    console.log(this)
    /*
    The 'this' keyword refers to the component object
    */
  }

  shoot2 = (a, b) => {
    console.log(b.type, 'demo', a);
    //      /*
    //      'b' represents the React event that triggered the function,
    //      in this case the 'click' event
    //      */
  }

  
  render() {
    let header = '';
    if (this.state.username) {
      header = <h1>Hell {this.state.username}</h1>;
    } else {
      header = '';
    }
    
  

    return (
      <div>
        {header}



        <h2>I am a {this.props.color} Car!</h2>;

        <p>Enter your name:</p>

        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        <button onClick={this.shoot}>Take the shot!</button>

        <button onClick={(ev) => this.shoot2("Goal", ev)}>Take the shot2!</button>

        <button onClick={this.shoot2.bind(this, "Goal")}>Take the shot3!</button>

        {/* <NewType/> */}
        {/* lazy load */}
        <Suspense fallback={<h1>Still Loading…</h1>}>
     <Artists />

    </Suspense>
      </div>

    );
  }
}


// To show any component 
export default MyForm;

// Explain React state and props.
// Props-	State
// Immutable-	Owned by its component
// Has better performance-	Locally scoped
// Can be passed to child components-	Witeable/Mutable
                        // has setState() method to modify properties
                        // Changes to state can be asynchronous
                        // can only be passed as props















