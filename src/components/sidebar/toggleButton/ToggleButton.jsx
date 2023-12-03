
const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
        <span className="line_1"></span>
        <span className="line_2"></span>
        <span className="line_3"></span>
    </button>
  )
}

export default ToggleButton