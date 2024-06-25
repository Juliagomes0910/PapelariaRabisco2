export default function CardProdutos(props) {
    return (
        <div className="card">
            <img src="produtos/placeholder.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.nome}</h5>
            <p className="card-text">{props.descricao}</p>
            <a href="#" className="btn btn-primary">R$ {props.preco}</a>
            </div>
            <div className="card-footer">
                <p className="card-text text-sucess">
                    {props.quantidade}
                 </p>
            </div>
        </div>
    )
}