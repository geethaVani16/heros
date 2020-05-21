import React from 'react';
import './App.css';
import { Cardlist } from './Components/CardList/Cardlist'
import { SearchBox } from './Components/SearchBox/SearchBox'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchFeild:""
    }
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }))
      .catch(err => console.log(err))
  }
  render() {
    const { monsters,searchFeild } =this.state
    const filteredMonsters=monsters.filter(monster => 
       monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    )
    return (
      <div className="App">
        <h1>REAL HEROS</h1>
        <SearchBox 
        placeholder='search monster'
        handleChange={e => {
          this.setState({searchFeild:e.target.value}) }}
        />
       
        <Cardlist monsters= {filteredMonsters}/>
      </div>
    )
  }

}

export default App;
