import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { QuestionContext } from "../context/Questions";
import Question from "../Question/Question";
import styles from "./QuizContainer.module.scss";

const QuizContainer = () => {
    const { questions } = useContext(QuestionContext);
    let [count, setCount] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isFalse, setIsFalse] = useState(false);
    const [questionsCorrect, setQuestionsCorrect] = useState(0);
    const increaseCount = () => {
        count < questions.length - 1 ? setCount(count + 1) : setCount(count);
        setIsFalse(false);
        setIsCorrect(false);
    };

    return (
        <div className={styles.QuizContainer}>
            {questions.length === 0 ? (
                <div>Sorry, no questions are available at this time</div>
            ) : (
                <Question
                    count={count}
                    setCount={setCount}
                    isFalse={isFalse}
                    setIsFalse={setIsFalse}
                    isCorrect={isCorrect}
                    setIsCorrect={setIsCorrect}
                    questionsCorrect={questionsCorrect}
                    setQuestionsCorrect={setQuestionsCorrect}
                />
            )}
            <h3>
                Your score is {questionsCorrect}/{questions.length + 1}.
            </h3>
            <button
                className={styles.QuizContainer__next}
                onClick={() => increaseCount()}
            >
                Next Question
            </button>
        </div>
    );
};

export default QuizContainer;
