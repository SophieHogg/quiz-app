import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { QuestionContext } from "../context/Questions";
import { v4 as uuidv4 } from "uuid";
import styles from "./Question.module.scss";

const Question = ({ count, setCount }) => {
    const { questions } = useContext(QuestionContext);
    let question = questions[count];

    useEffect(() => {
        question = questions[count];
    }, [count]);

    const giveFeedback = (value) => {
        if (value === question.correctAnswer && count < questions.length - 1) {
            setCount(count + 1);
        } else {
            setCount(count);
        }
    };
    return (
        <div className={styles.Question}>
            <h2 className={styles.Question__title}>{question.text}</h2>
            {question.answers.map((answer, index) => (
                <button
                    className={styles.Question__answers}
                    onClick={() => {
                        giveFeedback(answer);
                    }}
                    key={uuidv4()}
                >
                    {answer}
                </button>
            ))}
        </div>
    );
};

export default Question;
