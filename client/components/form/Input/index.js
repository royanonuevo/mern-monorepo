const Input = (props) => {
  const {
    label = '',
    id,
  } = props
  return (
    <div className="block">
      <label htmlFor={id}>{ label }</label>
      <input
        {...props}
        id={id}
        className="p-2 w-full rounded-lg bg-gray-800 mt-2 p-2 border-2 border-transparent focus:bg-gray-800 focus:outline-none  focus:border-gray-700"
      />
    </div>
  )
}

export default Input