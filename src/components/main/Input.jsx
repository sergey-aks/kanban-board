const Input = (props) => {
    const  { value, onChange, inputType, id, name, placeholder, className } = props;
    return (
        <>
            <input
                type={inputType}
                value={value}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className={className}
            />
        </>
    )
}

export default Input