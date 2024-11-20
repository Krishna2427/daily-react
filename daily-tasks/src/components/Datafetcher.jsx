import React, { Component } from 'react';

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
    };
  }

  componentDidMount() {
    // Perform side-effect here (e.g., fetch API data)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
          loading: false,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // Side-effect: called after every update (you can check conditions here to avoid infinite loops)
    if (prevState.data !== this.state.data) {
      console.log('Data updated');
    }
  }

  componentWillUnmount() {
    // Side-effect: cleanup function before unmounting (e.g., clearing timers or subscriptions)
    console.log('Component will unmount');
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div>
        {loading ? <p>Loading...</p> : <p>Data: {data.title}</p>}
      </div>
    );
  }
}

export default DataFetcher;
