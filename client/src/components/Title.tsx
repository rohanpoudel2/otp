interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> { }

const Title: React.FC<TitleProps> = (props) => {
  const { className, title, ...rest } = props;
  return (
    <h1
      className={` ${className}`}
      {...rest}
    >
      {title}
    </h1>
  )
}

export default Title