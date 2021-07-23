import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={styles.section}>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </section>
);

Section.defaultProps = {
  children: [],
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
