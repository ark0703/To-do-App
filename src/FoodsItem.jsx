import { useState } from "react";
function FoodsItem() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const handleAddItem = () => {
    const inputBtn = document.querySelector("#inputTag").value;
    setFoods((f) => [...f, inputBtn]);
    document.querySelector("#inputTag").value = "";
  };
  const handleDelItem = (index) =>
    setFoods(foods.filter((_, i) => i !== index));

  return (
    <>
      <h1>List Of Food</h1>
      <ul>
        {foods.map((ele, index) => (
          <li key={index} onClick={() => handleDelItem(index)}>
            {ele}
          </li>
        ))}
      </ul>
      <input type="text" id="inputTag" placeholder="Enter Food" />
      <button onClick={handleAddItem}>Add Item</button>
    </>
  );
}

export default FoodsItem;
