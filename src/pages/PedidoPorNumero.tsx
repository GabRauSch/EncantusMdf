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
                        <div className='status-item'>Finalizar pedido</div>
                    </div>
                    
                </div>
                <div className='detailed-information'>
                    <div className='information-item'>
                        <div className='request-info'>
                            <div className='desenho-info'>
                                <div className='desenho-name'>Desenho blablabla</div>
                                <i className='desenho-info-item'>tipo: Stencil</i>
                                <i className='desenho-info-item'>mais informações: Além de desenhar, fazer a desenhação do desenho desenhado</i>
                                
                            </div>
                            <div className='pedido-item-info'>
                                <div className='tamanho'>Tamanho: 30X30X30</div>
                                <div className='price-info'>
                                    <div className='price-info-item'>
                                        <div>Valor unidade:</div>
                                        <div>R$30,00</div>
                                    </div>
                                    <div className='price-info-item'>
                                        <div>Quantidade:</div>
                                        <div>30X</div>
                                    </div>
                                    <div className='price-info-item'>
                                        <div>Total:</div>
                                        <div>R$900,00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='done'>Cortado!</div>
                    </div>

                    <div className='information-item'>
                        <div className='request-info'>
                            <div className='desenho-info'>
                                <div className='desenho-name'>Desenho blablabla</div>
                                <i className='desenho-info-item'>tipo: Stencil</i>
                                <i className='desenho-info-item'>mais informações: Além de desenhar, fazer a desenhação do desenho desenhado</i>
                                
                            </div>
                            <div className='pedido-item-info'>
                                <div className='tamanho'>Tamanho: 30X30X30</div>
                                <div className='price-info'>
                                    <div className='price-info-item'>
                                        <div>Valor unidade:</div>
                                        <div>R$30,00</div>
                                    </div>
                                    <div className='price-info-item'>
                                        <div>Quantidade:</div>
                                        <div>30X</div>
                                    </div>
                                    <div className='price-info-item'>
                                        <div>Total:</div>
                                        <div>R$900,00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='batata'>Não cortado!</div>
                    </div>
                </div>
            </div>
        </div>
    )   
}       