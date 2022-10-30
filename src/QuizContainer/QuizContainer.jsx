import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { QuestionContext } from "../context/Questions";
import Question from "../Question/Question";
import styles from "./QuizContainer.module.scss";

const QuizContainer = () => {
    const { questions } = useContext(QuestionContext);
    let [count, setCount] = useState(0);
    const increaseCount = () => {
        count < questions.length - 1 ? setCount(count + 1) : setCount(count);
    };
    return (
        <div className={styles.QuizContainer}>
            {questions.length === 0 ? (
                <div>Sorry, no questions are available at this time</div>
            ) : (
                <Question count={count} setCount={setCount} />
            )}
            {count === questions.length ? <h3>Your score</h3> : ""};
            <button onClick={() => increaseCount()}>Next Question</button>
        </div>
    );
};

export default QuizContainer;
