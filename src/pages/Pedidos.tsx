import { ButtonAdd } from '../components/ButtoonAdd'
import { NovoPedidoPanel } from '../components/NovoPedidoPanel'
import { Panel } from '../components/Panel'
import '../style/Pedido.css'

export const Pedidos = ()=>{
    return (
        <>
        <div className="container">
            <Panel >
                <>
                <div className='pannel-header'>
                    <ButtonAdd  text="+ Novo Pedido" />
                </div>
                <div className='pannel-display'>
                    <a href='/pedido/1500' className='item'>
                        <div className='item-title'>Pedido Nº1500</div>
                        <div className='item-description'>Supla 5 cm - 10</div>
                        <div className='item-description'>Supla 5 cm - 20</div>
                        <div className='item-value'>Total: R$10,00</div>
                    </a>
                </div>
                </>
            </Panel>
        </div>
        <NovoPedidoPanel display="none" action="/novopedidobakende" content={{
            title: ['Novo Pedido', 'novo-pedido'], 
            buttons: [
                {title: 'Adicionar Desenho', type:'select' ,source: 'DESENHOS DATABASE'} 
            ]
        }}/>
        </>
        
    )
}