const TextArea = (props) => {
    const { value, onChange, placeholder, className, name} = props;
    return (
        <>
            <textarea
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={className}
                name={name}
            />
        </>
    )
}

export default TextArea