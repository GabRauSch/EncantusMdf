import '../style/DefaultFooter.css';

export const DefaultFooter = ()=>{
    return(
        <div className="footer-display">
            <div className='container'>
                <div className="info">
                    <div className="info-message">feito com ❤️ por gabriel raulino, utilizando os dedos e uma chave inglesa</div>
                    <div className='info-item'>Fiz o site em cor de merda, para alterar, vá em configurações/alterar tema</div>
                    <div className="info-item">@copyryright  do birim do bim do meu saco</div>
                </div>
                <div className="contact-info">
                    <div className="contact-title">Para Entrar em contato:</div>
                    <div className='email contact-item'>Email: gabrielraulinoschoenell@gmail.com</div>
                    <div className='phone contact-item'>Celular: +55 48 9 84411-6469 (passa para a Luana)</div>
                </div>
            </div>
        </div>
    )
}