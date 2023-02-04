import { ButtonAdd } from '../components/ButtoonAdd';
import '../style/Produtos.css';
import note from '../media/note.png'

export const Produto = ()=>{
    return (
        <div className="container">
            <div className="pannel">
                <div className='pannel-header'>
                    <ButtonAdd text='+ Novo Produto'/>
                </div>
                <div className='products'>
                    <div className='product-item'>
                        <div className='product-item-info'>
                            <div className='prodcut-note'><img src="/media/note.png" alt="ola" className="product-image"/></div>
                            <div className='product-name'>Produto Foda</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}