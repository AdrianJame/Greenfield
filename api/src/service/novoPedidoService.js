
import randomString from 'randomstring'

export function criarNotaFiscal() {
    return randomString.generate(11);
}


export function lerValorFrete(frete) {
    if (frete === 'Normal')
        return 10.0;
    else
        return 25.0;
}


export function criarNovoPedido(idCliente, info) {
    
    let agora = new Date();
    let valorFrete = lerValorFrete(info.frete);

    return {
        idCliente: idCliente,
        idEndereco: info.idEndereco,
        data: agora,
        valorFrete: valorFrete,
        status: 'Confirmando Pagamento',
        tipoPagamento: 'Cartão'
    }
}
