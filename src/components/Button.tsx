

type Props={
    title: string,
    onClick: () => void,

}

export const Button = ({title,onClick}:Props) => {
    const onClickHandler=()=>{
        onClick()
    }
    return (
        <div>
<button onClick={onClickHandler}>{title}</button>
        </div>
    );
};

