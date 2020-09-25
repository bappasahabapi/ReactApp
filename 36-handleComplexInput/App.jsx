import React, { useState } from 'react';
const App = () => {
  const [fullName, setFullName] = useState({
    fname : '',
    lname : '',
  });


  const inputEvent = (event) => { 
    console.log(event.target.value) ;
    console.log(event.target.name) ;
    // console.log(event.target.placeholder) ;

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) =>{
      // console.log(preValue);
      if(name === "fName"){
        return{
          fname : value,
          lname : preValue.lname,
        };
       
      } else if (name === "lName"){
        return{
          fname : preValue.fname,
          lname : value,
        };
      }

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

            <input type='text'
              placeholder="Enter Your First Name"
              name ='fName'
              onChange={inputEvent}
              value={fullName.fname} 
                
              />
            <br />
            <input
              type='text'
              placeholder="Enter Your Your Last Name"
              name ='lName'
              onChange={inputEvent}
              value={fullName.lname} 

              />
            <button type="submit"> Submit  😘 </button>
          </div>
        </form>
      </div>

    </>
  );
};
export default App;