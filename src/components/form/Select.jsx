
const Select = ({name, children}) => {

  return (
    <div className="xs:col-span-12 md:col-span-6">
        <label htmlFor={name}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
          <div>
            {children}
          </div>
        </label>
    </div>
  )

}

export default Select