import propsTypes from "prop-types";

function List(props) {
  //   fruits.sort((a, b) => a.name.localeCompare(b.name));
  //   fruits.sort((a, b) => b.name.localeCompare(a.name));
  //   const lowCalories = fruits.filter((fruit) => fruit.calories < 100);

  const itemList = props.item;
  const category = props.category;
  const listOfFruits = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}:&nbsp;{fruit.calories}
    </li>
  ));
  return (
    <>
      <h1 className="category">{category}</h1>
      <ul className="items">{listOfFruits}</ul>
    </>
  );
}

List.propsTypes = {
  category: propsTypes.string,
  item: propsTypes.arrayOf(
    propsTypes.shape({
      id: propsTypes.number,
      name: propsTypes.string,
      calories: propsTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "category",
  item: [],
};

export default List;
