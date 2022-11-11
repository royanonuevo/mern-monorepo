// import styles from './Button.module.scss'

const Button = (props) => {
  const { 
    label = '',
    type = 'button',
  } = props

  return (
    <button
      {...props}
      type={type}
      // className={styles.button}
      className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/30 text-white font-semibold rounded-lg"
    >
      {label}
    </button>
  )
}

export default Button