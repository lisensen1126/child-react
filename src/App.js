import './App.css';
import React from 'react'

class App extends React.Component{
  componentDidMount(){
    console.log('接收到的参数',this.props);
  }
  render(){
    const {str} = this.props.data
    return(
      <div>child-react<p>{str}</p></div>
    )
  }
}

export default App;
