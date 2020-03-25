import React from "react";

const EfficiencyTableHeading = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">№</th>
        <th scope="col">Предмет</th>
        <th scope="col">На "5"</th>
        <th scope="col">На "4"</th>
        <th scope="col">На "3"</th>
        <th scope="col">На "2"</th>

        <th scope="col">Средний балл</th>
        <th scope="col">% качества</th>
        <th scope="col">% успеваемости</th>
      </tr>
    </thead>
  );
};
export default EfficiencyTableHeading;
