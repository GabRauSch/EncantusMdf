import '../style/NovoPedidoPanel.css';
type Button = {
    title: string,
    type: string, // select --> displays various items for selection from source  ||  
    source: string // database source for selection
}

type Content ={
    title: [string, string], //[0] --> describes the placeholder, [1] --> describes the input name
    buttons?: Button[]
}

type Props = {
    display: 'flex' | 'none';
    action: string,
    content: Content;
} 
export const NovoPedidoPanel = ({display, action, content}: Props)=>{
    return (
        <div className="novo-pedido-screen" style={{display}}>
            <div className='novo-pedido-panel'>
                <input type="text" className='novo-pedido-title' placeholder={content.title[0]} name={content.title[1]}/>

                <div className='novo-pedido-quest'>
                    <div>Selecione o cliente</div>
                    <select>
                        <option value="valerio">Valerio</option>
                        <option value="batata">batata</option>
                        <option value="chocolate">chocolate</option>
                        <option value="novo">novo</option>
                    </select>
                </div>
                

                {content.buttons?.map((el)=>(
                    <div className='template-button'>{el.title}</div>
                    
                ))
                
                }
                
                <div className='novo-pedido-desenhos-list'>


                    <div className='novo-pedido-desenho'>
                        <div className='novo-pedido-desenho-title'>Batata</div>
                        <div className='novo-pedido-desenho-info'>
                            <div>Qt:</div>
                            <input type="number" value="0"/>
                        </div>
                        <div className='novo-pedido-desenho-info'>
                            <div>Valor (unidade):</div>
                            <input type="number" value="0" />
                        </div>
                        <div className='novo-pedido-desenho-desc'>
                            <div>Descrição</div>
                            <input type="text" />
                        </div>
                    </div>
                    
                    <div className='novo-pedido-desenho'>
                        <div className='novo-pedido-desenho-title'>Batata</div>
                        <div className='novo-pedido-desenho-info'>
                            <div>Qt:</div>
                            <input type="number" />
                        </div>
                        <div className='novo-pedido-desenho-info'>
                            <div>Valor (unidade):</div>
                            <input type="number" />
                        </div>
                        <div className='novo-pedido-desenho-desc'>
                            <div>Descrição</div>
                            <input type="text" />
                        </div>
                    </div>

                    <div className='novo-pedido-desenho'>
                        <div className='novo-pedido-desenho-title'>Batata</div>
                        <div className='novo-pedido-desenho-info'>
                            <div>Qt:</div>
                            <input type="number" />
                        </div>
                        <div className='novo-pedido-desenho-info'>
                            <div>Valor (unidade):</div>
                            <input type="number" />
                        </div>
                        <div className='novo-pedido-desenho-desc'>
                            <div>Descrição</div>
                            <input type="text" />
                        </div>
                    </div>

                    <div className='novo-pedido-desenho'>
                        <div className='novo-pedido-desenho-title'>Batata</div>
                        <div className='novo-pedido-desenho-info'>
                            <div>Qt:</div>
                            <input type="number" />
                        </div>
                        <div className='novo-pedido-desenho-info'>
                            <div>Valor (unidade):</div>
                            <input type="number" />
                        </div>
                        <div className='novo-pedido-desenho-desc'>
                            <div>Descrição</div>
                            <input type="text" />
                        </div>
                    </div>

                    <div className='novo-pedido-desenho'>
                        <div className='novo-pedido-desenho-title'>Batata</div>
                        <div className='novo-pedido-desenho-info'>
                            <div>Qt:</div>
                            <input type="number" />
                        </div>
                        <div className='novo-pedido-desenho-info'>
                            <div>Valor (unidade):</div>
                            <input type="number" />
                        </div>
                        <div className='novo-pedido-desenho-desc'>
                            <div>Descrição</div>
                            <input type="text" />
                        </div>
                    </div>


                </div>
                <div className='save-button-area'>
                    <div className='save-button'>Salvar</div>
                </div>
                
            </div>
        </div>
    )
}