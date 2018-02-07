import React from 'react';

class TodoList extends React.Component {
  render() {
    const {items} = this.props;
    let i = 0;
    const createItem = itemText => {
      return <li key={i++}>{itemText}</li>;
    };
    return <ul>{items.map(createItem)}</ul>;
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = props;
  }
  onChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    const nextItems = this.state.items.concat([this.state.text]);
    const nextText = '';
    this.setState({items: nextItems, text: nextText});
  }
  render() {
    const {items, text} = this.state;
    return (
      <div className="container">
        <h3>TODO List</h3>
        <TodoList items={items} />
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Write task"
              onChange={this.onChange}
              value={text}
            />
            &nbsp;
          </div>
          <button className="btn btn-primary">
            {'Add #' + (items.length + 1)}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoApp;
