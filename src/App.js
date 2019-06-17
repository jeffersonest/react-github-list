import React, { Component } from 'react';
import Header from './components/headerComponent';
import Routes from './routes';
import './styles.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Bitch!</h1>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
