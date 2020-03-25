import {
  ADD_PUPIL,
  SHOW_ALERT,
  HIDE_ALERT,
  COMPUTE,
  SEND_EFFICIENCY
} from "./types";

const initialState = {
  alert: null,
  pupils: [],
  lessons: {
    russianLanguage: "Русский язык",
    literature: "Литература",
    englishLanguage: "Английский язык",
    mathematics: "Математика",
    algebra: "Алгебра",
    geometry: "Геометрия",
    physics: "Физика",
    history: "История",
    socialStudies: "Обществознание",
    odknr: "ОДКНР",
    geography: "География",
    biology: "Биология",
    chemistry: "Химия",
    computerScience: "Информатика",
    visualArt: "ИЗО",
    music: "Музыка",
    technology: "Технология",
    physicalCulture: "Физкультура",
    lifeSafety: "ОБЖ"
  },
  efficiency: [
    {
      title: "russianLanguage",
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
    {
      title: "literature",
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
    {
      title: "englishLanguage",
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
    {
      title: "mathematics",
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
    {
      title: "algebra",
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
    {
      title: "geometry",
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
    {
      title: "physics",
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
    {
      title: "history",
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
    {
      title: "socialStudies",
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
    {
      title: "odknr",
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
    {
      title: "geography",
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
    {
      title: "biology",
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
    {
      title: "chemistry",
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
    {
      title: "computerScience",
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
    {
      title: "visualArt",
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
    {
      title: "music",
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
    {
      title: "technology",
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
    {
      title: "physicalCulture",
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
    {
      title: "lifeSafety",
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
  ]
};

export const gradeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PUPIL:
      return {
        ...state,

        pupils: [...state.pupils, action.payload]
      };
    case SEND_EFFICIENCY:
      return { ...state, efficiency: action.payload };
    case SHOW_ALERT:
      return { ...state, alert: true };
    case HIDE_ALERT:
      return { ...state, alert: null };
    case COMPUTE:
      return { ...state };
    default:
      return state;
  }
};
