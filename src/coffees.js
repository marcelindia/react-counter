import React, { useState, useEffect } from "react";

function Coffees() {
  const [coffeeList, setCoffeeList] = useState();
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => setCoffeeList(data)) //when we get the coffee list, it will be the array
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="coffee-container" id="coffees">
      <h2>Coffee Recipes</h2>
      {!coffeeList ? (
        <h3>Loading...</h3>
      ) : (
        <ol>
          {coffeeList.map((coffee) => {
            return <li key={coffee.id}>{coffee.title}</li>;
          })}
        </ol>
      )}
    </section>
  );
}
//needed a one container
export default Coffees;
