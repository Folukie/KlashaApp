import React from 'react'

const Input = ({
  type,
  placeholder,
  rightIcon,
  className,
  value,
  onChange,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`border border-lightgrey rounded-lg py-1 px-4 w-36 text-sm ${className}`}
        placeholder={placeholder}
      />
      {rightIcon && <span className="absolute top-2 left-28">{rightIcon}</span>}
    </div>
  )
}

export default Input
