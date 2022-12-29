import React from "react"
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (

        <ul className={style.feedbacklist}>
            {options.map(item => (
                <li key={item}>
                    <button onClick={() => onLeaveFeedback(item)} className={style.feedbackbtn}>{item}</button>
                </li>
            ))}
        </ul>

    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};