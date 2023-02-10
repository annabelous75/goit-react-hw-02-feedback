import PropTypes from 'prop-types';
export const Notific = ({ message }) => {
  return message && <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};