import React from 'react';

const Checkbox = ({ checked, onChange, label, className }) => {
  return (
    <label className={className}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={className}
      />
      {label}
    </label>
  );
};

export default Checkbox;
