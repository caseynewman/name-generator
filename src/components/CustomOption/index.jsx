
export default function CustomOption({ option, onClick }) {

    return (
        <button onClick={() => onClick(option.nextScene)}>{option.text}</button>
    )
}