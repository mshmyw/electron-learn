// src/react.tsx 
  import * as React from 'react'; 
  import * as ReactDOM from 'react-dom'; 

  const Index = () => { 
      return <div>Hello 哈哈 React!</div>; 
  }; 
 
  ReactDOM.render(<Index />, document.getElementById('app'));