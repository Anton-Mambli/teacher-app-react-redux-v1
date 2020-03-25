import React from "react";
import { connect } from "react-redux";

const TableBody = ({ gradeState }) => {
  return gradeState.map((item, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td data-id="name">{item.name}</td>
        <td data-id="russianLanguage">{item.grades.russianLanguage}</td>
        <td data-id="literature">{item.grades.literature}</td>
        <td data-id="englishLanguage">{item.grades.englishLanguage}</td>
        <td data-id="mathematics">{item.grades.mathematics}</td>
        <td data-id="algebra">{item.grades.algebra}</td>
        <td data-id="geometry">{item.grades.geometry}</td>
        <td data-id="physics">{item.grades.physics}</td>
        <td data-id="history">{item.grades.history}</td>
        <td data-id="socialStudies">{item.grades.socialStudies}</td>
        <td data-id="odknr">{item.grades.odknr}</td>
        <td data-id="geography">{item.grades.geography}</td>
        <td data-id="biology">{item.grades.biology}</td>
        <td data-id="chemistry">{item.grades.chemistry}</td>
        <td data-id="computerScience">{item.grades.computerScience}</td>
        <td data-id="visualArt">{item.grades.visualArt}</td>
        <td data-id="music">{item.grades.music}</td>
        <td data-id="technology">{item.grades.technology}</td>
        <td data-id="physicalCulture">{item.grades.physicalCulture}</td>
        <td data-id="lifeSafety">{item.grades.lifeSafety}</td>
      </tr>
    );
  });
};

const mapStateToProps = state => {
  return {
    gradeState: state.grades.pupils
  };
};
export default connect(mapStateToProps, null)(TableBody);
