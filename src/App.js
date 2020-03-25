import React from "react";
import CreatePupil from "./components/CreatePupil";
import EfficiencyTable from "./components/EfficiencyTable";
import PupilTable from "./components/PupilTable";

function App() {
  return (
    <div className="container mt-4 bg-light p-4 rounded-lg">
      <div className="row">
        <CreatePupil />
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <h2 className="lead mb-4 text-center">Сводная таблица с оценками</h2>
        </div>
        <PupilTable />
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <h2 className="lead mb-4 text-center">
            Сводная таблица с эффективностью
          </h2>
        </div>
        <EfficiencyTable />
      </div>
    </div>
  );
}

export default App;
