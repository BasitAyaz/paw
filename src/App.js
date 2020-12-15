import React from "react";
import "./App.css";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: "",
      arr: [],
      datafromfirebase: [],
    };
  }
  add(e) {
    e.preventDefault();
    const { mytext, arr } = this.state;
    console.log(arr);
    arr.push(mytext);
    this.setState({ arr: this.state.arr });
    firebase.database().ref("/").child("notes").push(mytext).then((success)=>{
      this.setState({mytext:''})
    });
  }
  componentDidMount() {
    const { datafromfirebase } = this.state;
    firebase
      .database()
      .ref("/")
      .child("notes")
      .on("child_added", (e) => {
        datafromfirebase.push(e.val());
      });
    this.setState({ datafromfirebase: this.state.datafromfirebase });
  }
  render() {
    console.log(this.state.mytext);
    return (
      <div className="App">
        <div className="main ">
          <div className="container">
            <ul>
              {this.state.datafromfirebase.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
          </div>
          <div>
            <form onSubmit={(e) => this.add(e)}>
              <input
                value={this.state.mytext}
                className="form-control"
                placeholder="Enter Text"
                onChange={(e) => this.setState({ mytext: e.target.value })}
              />
              <button className="rounded-pill btn btn-primary shadow">+</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
