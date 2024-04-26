interface ErrorMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  error: string | null
}
const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { error, className, ...rest } = props;
  return (
    <span
      className={`text-[0.6rem] w-16 absolute bottom-[-1rem] left-0 text-red-500 ${className}`}
      {...rest}
    >
      {error}
    </span>
  )
}

export default ErrorMessage