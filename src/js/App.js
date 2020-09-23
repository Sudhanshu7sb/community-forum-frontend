import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


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
    // if(!this.state.data){
    //     return (
    //         <>LOADING...</>
    //     )
    // }
    return (
        <>
        <Header />
        <h2>Forum</h2>
        <Footer />
        </>
    )
      
  }
}

export default App;
