import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeForm from './EmployeeForm';
import './EmployeeForm.css';

function App() {
  return (
    <div className="App">
      <EmployeeForm />
    </div>
  );
}

ReactDOM.render(<App />,document.getElementById("root"));
