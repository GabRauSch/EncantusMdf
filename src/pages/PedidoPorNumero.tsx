import '../style/PedidoNumero.css';

export const PedidoPorNumero = ()=>{
    return (
        <div className="container">
            <div className='pannel'>
                <div className='major-information'>
                    <div className='name-information'>Pedido Nº 1500</div>
                    <div className='status-information'>
                        <div className='status-item'>Entregue </div>
                        <div className='status-item'>Pago </div>
                        <div className='status-item finish'>Finalizar pedido</div>
                    </div>
                    
                </div>
                <div className='detailed-information'>
                    <div className='information-item'>
                        <div className='request-info'>
                            <div className='desenho-info'>
                                <div className='desenho-name-display'>
                                    <div className='desenho-name'>Desenhozinho blablabla</div>
                                    <i className='desenho-info-item'>tipo: Stencil</i>    
                                </div>
                                <i className='desenho-info-item'>
                                    <div>mais informações: Além de desenhar, fazer a desenhação do desenho desenhado</div>
                                    <div className='desenho-info-item-price'>R$10</div>
                                </i>
                                
                            </div>
                        </div>
                        
                        <div className='done'>Cortado!</div>
                    </div>

                    <div className='information-item'>
                        <div className='request-info'>
                            <div className='desenho-info'>
                                <div className='desenho-name-display'>
                                    <div className='desenho-name'>Desenho blablabla</div>
                                    <i className='desenho-info-item'>tipo: estereencilncil</i>    
                                </div>
                                <i className='desenho-info-item'>
                                    <div>mais informações: Além de desenhar, fazer a desenhação do desenho desenhado</div>
                                    <div className='desenho-info-item-price'>R$10</div>
                                </i>
                                
                            </div>
                        </div>
                        
                        <div className='batata'>Não cortado!</div>
                    </div>
                        <div className='information-total'>Total: R$20</div>
                </div>
            </div>
        </div>
    )   
}       