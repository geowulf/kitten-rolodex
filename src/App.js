import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';


import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      kittens: [],
      searchField: ''
  };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json() )
  .then(users => this.setState({ kittens : users})
  );
}

//handlechange METHOD using ARROW FUNCTION and is Lexically scoped.
  handleChange = (e) => { 
    this.setState({ searchField: e.target.value})
  };

  render() {
    const { kittens, searchField } = this.state;
    const filteredKittens = kittens.filter(kitten =>
      kitten.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
        <div className='App'>
          <h1> Kitten Rolodex </h1>
         <SearchBox 
          placeholder=' Search Kittens ' 
          handleChange={this.handleChange} 
          />
         <CardList kittens={filteredKittens} />
        </div>
      );
    }
  }

export default App;
