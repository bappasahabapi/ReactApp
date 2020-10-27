import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';

const ToDOLists = () => {

    const [item, setItem] = useState('');
    const [newitem, setNewitem] = useState([]);

    const itemEvent = (obj) => {
        setItem(obj.target.value); // যা লিখব তা সো করবে
    };
    const listOfItems = () => {
        setNewitem((preValue) => {
            return [...preValue, item]
        })
        setItem(" ");
    };

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1> ToDo Lists </h1>
                    <br />
                    <input
                        type='text'
                        placeholder='this is input field '
                        onChange={itemEvent}
                        value={item}    // value na dile setItems enter press er por empty hbe na.
                    />
                    <Button className='btn' onClick={listOfItems}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>

                        {newitem.map((val, index) => {
                            return <ListCom text={val} key={index} />;
                        })}
                    </ol>
                    <br />

                </div>

            </div>
        </>
    )
};

export default ToDOLists;