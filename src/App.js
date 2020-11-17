import './App.css';
import Search from './Search'
import react, {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: ''
    }
  }
  render(){
    return (
      <Search userInput={this.state.userInput} onChange={this.handleSearchChange}/>
  );
    }

  handleSearchChange = (e) => {
    this.setState({
      userInput: e.target.value,
    })
  }
}

export default App;
