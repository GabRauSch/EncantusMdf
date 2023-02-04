import '../style/NovoPedidoPanel.css';

type Props = {
    display: 'flex' | 'none';
} 
export const NovoPedidoPanel = ({display}: Props)=>{
    return (
        <div className="novo-pedido-screen" style={{display}}>
            <div className='novo-pedido-panel'>
                <input type="text"/>
            </div>
        </div>
    )
}