import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello React Project!
//         </p>
//       </header>
//     </div>
//   );
// }

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961221',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길서',
    'birthday': '961222',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id':3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '홍길남',
    'birthday': '961223',
    'gender': '남자',
    'job': '디자이너'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
