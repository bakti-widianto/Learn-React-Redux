import React, {Component} from 'react';

export default class FormItem extends Component {
    constructor(props) {
      super(props);
      this.state = {task: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({task: event.target.value});
    }
  
    handleSubmit(event) {
      this.props.tambah(this.state.task);
      this.setState({task: ''})
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.task} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }