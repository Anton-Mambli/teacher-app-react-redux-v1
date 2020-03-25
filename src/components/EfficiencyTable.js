import React from "react";
import EfficiencyTableHeading from "./EfficiencyTableHeading";
import EfficiencyTableBody from "./EfficiencyTableBody";
import { connect } from "react-redux";

const EfficiencyTable = ({ pupils }) => {
  if (!pupils.length) {
    return (
      <div className="container">
        <h2
          className="text-center badge badge-danger p-4"
          style={{ fontSize: 30, width: "100%" }}
        >
          Ученики пока не добавлены
        </h2>
      </div>
    );
  }
  return (
    <table className="table">
      <EfficiencyTableHeading />
      <tbody>
        <EfficiencyTableBody />
      </tbody>
    </table>
  );
};
const mapStateToProps = state => {
  return {
    pupils: state.grades.pupils
  };
};
export default connect(mapStateToProps, null)(EfficiencyTable);
