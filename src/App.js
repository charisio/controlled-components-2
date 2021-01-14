import React from 'react';
import logo from './logo.svg';
import AddItemForm from './AddItemForm';
import ItemsList from './ItemsList';
import DeleteItem from './DeleteItem';
import './App.css';

class App extends React.Component {
  state = {
  	items: [],
  }

  addItem = (event, value) => {
    event.preventDefault();
    this.setState(oldState => ({items: [...oldState.items, value]}));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  render() {
    const {items} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
    	<AddItemForm addItem={this.addItem} />
		<DeleteItem items={items} deleteLastItem={this.deleteLastItem}/>
		<ItemsList items={items} />
      </div>
    );
  }
}

export default App;
