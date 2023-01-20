import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export default function Section({ title }) {
    
    const [isVisible, setVisible] = useState(false);

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);

    const onClickGood = () => {
        setGood(prevState => prevState + 1);
    };

    const onClickNeutral = () => {
        setNeutral(prevState => prevState + 1);

    };

    const onClickBad = () => {
        setBad(prevState => prevState + 1);

    };

    useEffect(() => {
        setTotal(good + neutral + bad);
    }, [good, neutral, bad]);

 


    return (<section>
        <h1>{title}</h1>

        <FeedbackOptions onLeaveFeedback={[onClickGood, onClickBad, onClickNeutral]} options={()=>{setVisible(true)}}/>
        <h2>Statistics</h2>

        {!isVisible &&
            (<Notification message="There is no feedback" />)
        }

        {isVisible &&
            <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        }

    </section>)

}

Section.propTypes = {
    title: PropTypes.string,
}
