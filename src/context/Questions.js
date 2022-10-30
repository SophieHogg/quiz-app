import React, { createContext, useReducer } from "react";
import AppReducer from "./useReducer";

const initialState = {
    questions: [
        {
            id: 1,
            text: "Which of these is NOT a hook?",
            answers: [
                "useRef()",
                "useEffect()",
                "useState()",
                "componentDidMount",
            ],
            correctAnswer: "componentDidMount",
        },
        {
            id: 2,
            text: "Which dependency array in useEffect() would mean that the component updates when the 'count' value is changed?",
            answers: ["[]", "no dependency array", "[count]", "[value]"],
            correctAnswer: "[count]",
        },
        {
            id: 3,
            text: "True or false: React is a JavaScript framework",
            answers: ["True", "False"],
            correctAnswer: "True",
        },
        {
            id: 4,
            text: "What is the best/simplest way to avoid prop-drilling in React?",
            answers: [
                "Prop-drilling is the best way",
                "useRef()",
                "useContext()",
                "Import a class",
            ],
            correctAnswer: "useContext()",
        },
    ],
};

export const QuestionContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <QuestionContext.Provider
            value={{
                questions: state.questions,
            }}
        >
            {children}
        </QuestionContext.Provider>
    );
};
