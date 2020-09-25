import React, { useState } from 'react';
const App = () => {
  const [name, setName] = useState("");
  const [fullName, setfullName] = useState();

  const[lastName, setLastName]= useState('');
  const[lastFullname, setLastFullName] = useState('');

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const inputEventTwo = (event2) =>{
    setLastName(event2.target.value);
  };
  const onSubmits = (obj) => {
    obj.preventDefault();
    setfullName(name);
    setLastFullName(lastName);
    
  };

  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmits}>
          <div>
            <h1> Hellow 👨‍🔬 {fullName} {lastFullname} </h1>

            <input type='text' placeholder="Enter Your First Name" onChange={inputEvent} value={name} />
            <br />
            <input
              type='text'
              placeholder="Enter Your Your Last Name"
              onChange={inputEventTwo}
              value={lastName} />
            <button type="submit"> Submit  😘 </button>
          </div>
        </form>
      </div>

    </>
  );
};
export default App;