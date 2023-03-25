const formataDinheiro = (valor) =>{
    valor = Math.ceil(valor * 100) / 100
    return `R$ ${valor.toFixed(2).replace('.',',')}`
}

const formataPessoas = (valor) =>{
    if(valor == 1){
        return `${valor} Pessoa`
    }else{
        return `${valor} Pessoas`
    }
}

const atualizaDados = () =>{
    let valorConta = Number(document.getElementById('valorConta').value)
    let seletorPorcentagem = document.getElementById('seletorPorcentagem').value
    let seletorPessoas = document.getElementById('seletorPessoas').value
    
    let porcentagemConta = valorConta * (seletorPorcentagem / 100)
    let totalConta = porcentagemConta + valorConta
    let dividirPessoas = totalConta / seletorPessoas

    imprimeDados(seletorPorcentagem, porcentagemConta, totalConta, seletorPessoas, dividirPessoas)
}

const imprimeDados = (seletorPorcentagem, porcentagemConta, totalConta, seletorPessoas, dividirPessoas) => {
    document.getElementById('taxaPorcentagem').innerHTML = `${seletorPorcentagem} %`
    document.getElementById('taxaGorjeta').innerHTML = formataDinheiro(porcentagemConta)
    document.getElementById('totalConta').innerHTML = formataDinheiro(totalConta)
    document.getElementById('pessoasDivisao').innerHTML = formataPessoas(seletorPessoas)
    document.getElementById('cobrarCada').innerHTML = formataDinheiro(dividirPessoas)
}