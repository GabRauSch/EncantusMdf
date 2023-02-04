type Props = {
    children: JSX.Element
}
export const Panel =({children}: Props)=>{
    return (
        <div className="pannel">
            {children}
        </div>
    )
}