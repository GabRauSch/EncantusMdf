type Props = {
    text: string
}

export const ButtonAdd =  ({text}: Props)=>{
    return (
        <div className="create-order">{text}</div>
    )
}