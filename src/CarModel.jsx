import { useState } from "react";

function CarModel() {
  const [car, setCar] = useState({
    year: 2024,
    make: "ford",
    model: "Mahindra",
  });

  const handleYearChange = (e) =>
    setCar((c) => ({ ...c, year: e.target.value }));
  const handleMakeChange = (e) =>
    setCar((c) => ({ ...c, make: e.target.value }));
  const handleModelChange = (e) =>
    setCar((c) => ({ ...c, model: e.target.value }));

  return (
    <div>
      <h1 className="head-text">
        Your Favourite car : {car.year} {car.make} {car.model}
      </h1>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="string" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="string" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}

export default CarModel;
