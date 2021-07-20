import Container from './components/Container/';
import EmailAdderComponent from './components/AddName/';
import React from 'react';

function App() {
  const [name, setName] = React.useState()

  return (
    <div className="App">
      {!name && <EmailAdderComponent setName={setName} />}
      {name && <Container name={name} />}
    </div>
  );
}

export default App;
