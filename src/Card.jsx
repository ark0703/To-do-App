import propTypes from "prop-types";

export default function Card(props) {
  const card = (
    <div className="card">
      <img
        src="https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg"
        alt="Profile Picture"
        className="card-image"
      />
      <h3 className="card-head">{props.name}</h3>
      <p className="card-desc">Roll No.:{props.roll}</p>
    </div>
  );

  const eligible = <h2>You Are Not Eligible</h2>;
  return props.roll > 30 ? card : eligible;
}

Card.propTypes = {
  name: propTypes.string,
  roll: propTypes.number,
};

Card.defaultProps = {
  name: "No Name",
  roll: 0,
};
