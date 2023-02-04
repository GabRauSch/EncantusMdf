import '../style/Home.css';
import '../style/Templates.css'

export const Home = ()=>{
    return (
        <div className="container column">
            <div className='page-title'>Qual item o senhor deseja entrar hoje?</div>
            <div className="grid-area">
                <a href="/pedidos" className="pedidos grid-item">Pedidos</a>
                <a href="/clientes" className="clientes grid-item">Clientes</a>
                <a href="/produtos" className="desenhos grid-item">Produtos</a>
                <a href="/configuracoes" className="configuracoes grid-item">Configurações</a>
            </div>
        </div>
    )
}