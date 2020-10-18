import React, { useState } from 'react';
import ToDoLists from "./ToDOLists";

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEevent = (object) =>     //define itemEvent
  {
    setInputList(object.target.value);
  };

  const listOfItems = () => {
    {/* define listOfItems  */ }

    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(" "); // ekhane current data k empty koira dilam
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) =>{
        return index !==id;
      })
    })
};

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1> ToDO List </h1>
          <br />
          <input
            type='tecxt'
            placeholder='Add an Items'
            onChange={itemEevent}
            value={inputList}
          />                    {/* call itemEvent  */}
          <button onClick={listOfItems}> + </button>    {/* call listOfItems  */}
          <ol>
            {
              Items.map((itemval, index) => {
                {/* return <li> {itemval} </li>; */ }
                return <ToDoLists
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect ={deleteItems}
                />;
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;