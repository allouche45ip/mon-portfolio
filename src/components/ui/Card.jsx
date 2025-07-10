const Card = ({ children, className = "", ...props }) => {
  const baseClasses = "border rounded-lg transition-all duration-300"
  const classes = `${baseClasses} ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card
