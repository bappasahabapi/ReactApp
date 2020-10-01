import React, { useState } from 'react';

const App = () => {
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    qua: '',
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
   
    setFullName((preValue) => 
    {

      console.log(preValue);

      return{
        ...preValue,
        [name]: value,
      };

    });

  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert('from submitted');
  };

  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmits}>
          <div>
            <h1> Hellow 👨‍🔬 {fullName.fname} {fullName.lname}  </h1>
            <p>  {fullName.email} </p>
            <p>  {fullName.phone} </p>
            <p>  {fullName.qua} </p>


            <input
              type='text'
              placeholder="Enter Your First Name"
              name='fname'
              onChange={inputEvent}
              value={fullName.fname}

            />
            <br />
            <input
              type='text'
              placeholder="Enter Your Your Last Name"
              name='lname'
              onChange={inputEvent}
              value={fullName.lname}
            />
            <input
              type='email'
              placeholder="Enter Your email address"
              name='email'
              onChange={inputEvent}
              value={fullName.email}
              autoComplete ='off'

            />
            <input
              type='number'
              placeholder="Enter Your phone number"
              name='phone'
              onChange={inputEvent}
              value={fullName.phone}

            />
            <input
              type='text'
              placeholder="Enter Your  qualifaction"
              name='qua'
              onChange={inputEvent}
              value={fullName.qua}

            />
            <button type="submit"> Submit  😘 </button>
          </div>
        </form>
      </div>

    </>
  );
};
export default App;