const store = {estado : [0,1,2,3] };

export function adicionar(valor){
    store.estado.push(valor);
}

export function remover(){
    store.estado.pop(valor);
}

export function getItens(){
    return [...store.estado];
}