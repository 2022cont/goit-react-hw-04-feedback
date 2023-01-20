import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total}) => {
    let positiveFeedback = ((good / total) * 100).toFixed(0);

    return (
        <div>
            <p>Good:<span>{good}</span></p>
            <p>Neutral:<span>{neutral}</span></p>
            <p>Bad:<span>{bad}</span></p>
            <p>Total:<span>{total}</span></p>
            <p>Positive feedback:<span>{positiveFeedback}%</span></p>
        </div>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
}