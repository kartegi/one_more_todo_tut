import React, {Component} from 'react';
import './App.css'
import ListItems from './ListItem';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== ""){
      const newitems = [...this.state.items, newItem]
      this.setState({
        items: newitems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem(key) {
    const newArr = this.state.items.filter(item => item.key !== key)
    this.setState({
      items: newArr
    })
  }

  setUpdate(text, key) {
    const items = this.state.items
    items.map(item => {
      if (item.key === key)
        return item.text = text
      return item.text
    })
    this.setState({
      items
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input 
              type="text" 
              placeholder="Enter text" 
              value={this.state.currentItem.text}
              onChange={this.handleInput} 
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem}  setUpdate={this.setUpdate} />
      </div>
    );
  }
}

export default App;
