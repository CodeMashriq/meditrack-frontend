
const Checkbox = ({name, col, children}) => {
    
    return (
        <div className={`xs:col-span-12 lg:${col}`}>
            <label htmlFor={name} className="flex gap-2">
                <div>
                    {children}
                </div>
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
        </div>
    )

}

export default Checkbox