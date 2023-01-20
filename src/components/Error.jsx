
const error = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center p-3
          uppercase font-bold rounded-md">
      <p>{children}</p>
    </div>
  )
}

export default error;