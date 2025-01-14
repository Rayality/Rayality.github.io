

export default function DataEntry({ text, placeholder, userInput, setUserInput}) {
    const valueHandler = (e) => {
        setUserInput(e.target.value)
    }
    return (
        <div className="entry-card">
            <p>
                {text}
            </p>
            <input
                className=""
                placeholder={placeholder}
                value={userInput}
                onChange={valueHandler}
            />
        </div>
    )
}
