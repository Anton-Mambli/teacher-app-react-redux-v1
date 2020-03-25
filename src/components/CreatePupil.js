import React from "react";
import Select from "./Select";
import { connect } from "react-redux";
import { addPupil, showAlert, sendEfficiency } from "../redux/action";
import Alert from "./Alert";

class CreatePupil extends React.Component {
  pupil = {
    name: "",
    grades: {
      russianLanguage: 0,
      literature: 0,
      englishLanguage: 0,
      mathematics: 0,
      algebra: 0,
      geometry: 0,
      physics: 0,
      history: 0,
      socialStudies: 0,
      odknr: 0,
      geography: 0,
      biology: 0,
      chemistry: 0,
      computerScience: 0,
      visualArt: 0,
      music: 0,
      technology: 0,
      physicalCulture: 0,
      lifeSafety: 0
    }
  };

  efficiency = {
    russianLanguage: {
      stats: []
    },
    literature: {
      stats: []
    },
    englishLanguage: {
      stats: []
    },
    mathematics: {
      stats: []
    },
    algebra: {
      stats: []
    },
    geometry: {
      stats: []
    },
    physics: {
      stats: []
    },
    history: {
      stats: []
    },
    socialStudies: {
      stats: []
    },
    odknr: {
      stats: []
    },
    geography: {
      stats: []
    },
    biology: {
      stats: []
    },
    chemistry: {
      stats: []
    },
    computerScience: {
      stats: []
    },
    visualArt: {
      stats: []
    },
    music: {
      stats: []
    },
    technology: {
      stats: []
    },
    physicalCulture: {
      stats: []
    },
    lifeSafety: {
      stats: []
    }
  };
  efficiencyPayload = {
    russianLanguage: {
      name: "Русский язык",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    literature: {
      name: "Литература",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    englishLanguage: {
      name: "Английский язык",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    mathematics: {
      name: "Математика",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    algebra: {
      name: "Алгебра",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    geometry: {
      name: "Геометрия",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    physics: {
      name: "Физика",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    history: {
      name: "История",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    socialStudies: {
      name: "Обществознание",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    odknr: {
      name: "ОДКНР",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    geography: {
      name: "География",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    biology: {
      name: "Биология",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    chemistry: {
      name: "Химия",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    computerScience: {
      name: "Информатика",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    visualArt: {
      name: "ИЗО",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    music: {
      name: "Музыка",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    technology: {
      name: "Технология",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    physicalCulture: {
      name: "Физкультура",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    },
    lifeSafety: {
      name: "ОБЖ",
      stats: {
        byFive: 0,
        byFour: 0,
        byThree: 0,
        byTwo: 0,

        averageBall: 0,
        quality: 0,
        performance: 0
      }
    }
  };

  computeEfficiency(target) {
    let pupilLength = this.props.pupils.length + 1;
    let efficiency = { ...this.efficiency };
    let efficiencyPayload = { ...this.efficiencyPayload };
    Object.keys(efficiency).forEach(item => {
      efficiency[item].stats.push(+target[item].value);
    });
    Object.keys(efficiency).forEach(item => {
      target[item].value = 0;
    });
    Object.keys(efficiency).forEach(item => {
      efficiencyPayload[item].stats.byFive = efficiency[item].stats.filter(
        item => item === 5
      ).length;
      efficiencyPayload[item].stats.byFour = efficiency[item].stats.filter(
        item => item === 4
      ).length;
      efficiencyPayload[item].stats.byThree = efficiency[item].stats.filter(
        item => item === 3
      ).length;
      efficiencyPayload[item].stats.byTwo = efficiency[item].stats.filter(
        item => item === 2
      ).length;
      let average = efficiency[item].stats.reduce(
        (total, item) => total + item,
        0
      );
      let fixedAverage = average / efficiency[item].stats.length;
      efficiencyPayload[item].stats.averageBall = fixedAverage.toFixed(1);

      let performance =
        (efficiency[item].stats.filter(item => item !== 2 && item !== 0)
          .length *
          100) /
        pupilLength;
      efficiencyPayload[item].stats.performance = performance.toFixed(1);

      let quality =
        (efficiency[item].stats.filter(
          item => item !== 2 && item !== 3 && item !== 0
        ).length *
          100) /
        pupilLength;
      efficiencyPayload[item].stats.quality = quality.toFixed(1);
    });
    console.log("Эффективность", efficiencyPayload);

    this.props.sendEfficiency(efficiencyPayload);
  }
  getValue = event => {
    let grades = { ...this.pupil.grades };
    grades[event.target.name] = +event.target.value;
    this.pupil.grades = grades;
  };
  submitHandler = event => {
    event.preventDefault();
    this.pupil.name = event.target.name.value;
    if (this.pupil.name.trim() === "") {
      return this.props.showAlert();
    }
    const pupil = { ...this.pupil };

    this.props.addPupil(pupil);
    this.pupilLength++;
    this.computeEfficiency(event.target);
    event.target.name.value = "";
  };

  renderSelects() {
    const lessonsKey = Object.keys(this.props.lessons);
    return Object.values(this.props.lessons).map((item, index) => {
      return (
        <Select
          lesson={item}
          name={lessonsKey[index]}
          key={index}
          onChange={this.getValue}
        />
      );
    });
  }

  render() {
    return (
      <form className="p-4" onSubmit={this.submitHandler}>
        {this.props.alert && <Alert />}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Имя ученика</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
          />
        </div>
        <div className="form-row">{this.renderSelects()}</div>

        <button type="submit" className="btn btn-dark mb-2">
          Добавить ученика
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    pupils: state.grades.pupils,
    lessons: state.grades.lessons,
    alert: state.grades.alert
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addPupil: pupil => dispatch(addPupil(pupil)),
    showAlert: () => dispatch(showAlert()),
    sendEfficiency: payload => dispatch(sendEfficiency(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePupil);
