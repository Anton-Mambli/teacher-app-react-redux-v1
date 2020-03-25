import React from "react";
import TableBody from "./TableBody";
import TableHeading from "./TableHeading";
import { connect } from "react-redux";

const PupilTable = ({ pupils }) => {
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
    <div className="table-responsive">
      <table className="table pupil-table">
        <thead className="thead-dark">
          <TableHeading />
        </thead>
        <tbody>
          <TableBody />
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pupils: state.grades.pupils
  };
};
export default connect(mapStateToProps, null)(PupilTable);
