import React from "react";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    //   route you want to fetch
    fetch("/api/questions")
      .then((res) => res.json())
      .then((forum) => {
        console.log(forum);  
        this.setState({ data: forum })});
  }

  render(){
    if(!this.state.data){
        return (
            <>LOADING...</>
        )
    }
    return (
        <>
        <h2>Forum</h2>
        </>
    )
      
  }
}

export default App;
