import React, { Component } from 'react';
import Header from './components/headerComponent';
import Main from './pages/main'
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
        <Main />
      </div>
    );
  }
}

export default App;
