import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import Notification from '../Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <ul className={styles.list}>
        <li className={styles.input}>Good: {good}</li>
        <li className={styles.input}>Neutral: {neutral}</li>
        <li className={styles.input}>Bad: {bad}</li>
        <li className={styles.total}>Total: {total}</li>
        <li className={styles.feedback}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
