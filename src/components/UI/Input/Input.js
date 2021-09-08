import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    id,
    label,
    value,
    type,
    onChange,
    onBlur,
    className,
  } = props;

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        value={value}
        type={!type ? 'text' : type}
        onChange={onChange}
        onBlur={onBlur} />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.object,
  className: PropTypes.string,
};

export default Input;
