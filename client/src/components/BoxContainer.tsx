const BoxContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='shadow-sm border border-gray-500 p-5 rounded-lg relative'>
      {children}
    </div>
  )
}

export default BoxContainer