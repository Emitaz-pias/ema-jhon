import React from 'react';
const Inventory = () => {

    const handleInventory = () => {
      //all data has been sent to data base..that's why it is blocked by pias..
        // const product = fakeData[0]
        // console.log(product);
        // fetch('http://localhost:4200/addProduct', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },   
        //     body: JSON.stringify(fakeData) 
        //   })
        //   .then(res =>res.json())
        //   .then(data =>
        //     console.log( 'pias vai data to pathayalaisi',data)
        //     )
    }
    return (
        <div>
            <h1>Developer is sleeping</h1>
            <button onClick={handleInventory} >Add Inventory</button>
        </div>
    );
};

export default Inventory;