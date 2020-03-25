import React from "react";
import { connect } from "react-redux";

const EfficiencyTableBody = ({ efficiency }) => {
  return Object.values(efficiency).map((item, index) => {
    return (
      <tr key={item + " " + index}>
        <th scope="row">{index + 1}</th>
        <td>{item.name}</td>
        <td>{item.stats.byFive}</td>
        <td>{item.stats.byFour}</td>
        <td>{item.stats.byThree}</td>
        <td>{item.stats.byTwo}</td>

        <td>{item.stats.averageBall}</td>
        <td>{item.stats.quality}</td>
        <td>{item.stats.performance}</td>
      </tr>
    );
  });
};
const mapStateToProps = state => {
  return {
    efficiency: state.grades.efficiency
  };
};
export default connect(mapStateToProps, null)(EfficiencyTableBody);
