import MyButton from '../Button';

export default function CustomOption({ option, onClick }) {

    return (
        <MyButton onClick={() => onClick(option.nextScene)}>{option.text}</MyButton>
    )
}