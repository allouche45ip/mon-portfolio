"use client"

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  onClick,
  ...props
}) => {
  const baseClasses =
    "font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"

  const variants = {
    primary: "bg-cyan-400 hover:bg-cyan-500 text-gray-900 focus:ring-cyan-400",
    secondary:
      "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 focus:ring-gray-500",
    outline: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 focus:ring-cyan-400",
    ghost: "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 focus:ring-cyan-400",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
