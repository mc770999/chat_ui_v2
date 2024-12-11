import React from 'react';

const Introduction = ({ name }) => () =>     {
  return (
    <div>
      <h1>Hello {name}, Welcome to TravelBot!</h1>
      <br/>
      <br/>
      <p>I can help you plan your perfect trip. </p> 
      
        <p>Looking for sunny beaches or snowy mountains? </p>
        <p>  Let me know your weather preference!</p>
      <br/>
        <p>I will recommend places to visit based on your preferences.</p>
      <br/>
        <p>Find the best fpghts, hotels, and attractions for your trip.</p>
      <br/>

      <p>Tell me what kind of adventure you're looking for, and I'll take care of the rest!</p>
    </div>
  );
};

export default Introduction;
