import React from 'react';
import axios from 'axios';

class BurgerBuilder extends React.Component {
  state = {};

  async componentDidMount() {
    const response = await axios.get('https://reactjs-189016.firebaseio.com/ingredients.json');
    const data = response.data;
    this.setState(() => ({ ...data }));
  }

  render() {
    return <div>This is the page for building the burger</div>;
  }
}

export { BurgerBuilder };
