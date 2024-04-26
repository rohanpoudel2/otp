interface OPTLayoutProps {
  children: React.ReactNode
}

const OTPLayout: React.FC<OPTLayoutProps> = ({ children }) => {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
    >
      {children}
    </div>
  )
}

export default OTPLayout