import React from "react";
import { useState, useEffect, useContext } from "react";
import { QuestionContext } from "../context/Questions";
import { v4 as uuidv4 } from "uuid";
import styles from "./Question.module.scss";

const Question = ({
    count,
    setCount,
    isCorrect,
    setIsCorrect,
    isFalse,
    setIsFalse,
    questionsCorrect,
    setQuestionsCorrect,
}) => {
    const { questions } = useContext(QuestionContext);
    let question = questions[count];

    useEffect(() => {
        question = questions[count];
    }, [count]);

    const giveFeedback = (value) => {
        if (isCorrect === false && isFalse === false) {
            if (value === question.correctAnswer) {
                setIsCorrect(true);
                setQuestionsCorrect(questionsCorrect + 1);
            } else {
                setIsFalse(true);
            }
        }
    };
    return (
        <div className={styles.Question}>
            <h2 className={styles.Question__title}>{question.text}</h2>
            {isCorrect ? (
                <p>Congratulations! {question.correctAnswer} is correct!</p>
            ) : (
                ""
            )}
            {isFalse ? (
                <p>
                    Sorry, that's not correct. The correct answer is{" "}
                    {question.correctAnswer}.
                </p>
            ) : (
                ""
            )}
            {question.answers.map((answer, index) => (
                <button
                    className={styles.Question__answers}
                    onClick={() => {
                        giveFeedback(answer);
                    }}
                    id={answer}
                    key={uuidv4()}
                >
                    {answer}
                </button>
            ))}
        </div>
    );
};

export default Question;
