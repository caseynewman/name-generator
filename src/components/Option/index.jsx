

export default function Option({ option, onClick }) {

    return (
        <button onClick={() => onClick(option.nextScene)}>{option.text}</button>
    )
}