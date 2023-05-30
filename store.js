const store = {estado : [0,1,2,3] };

export function adicionar(valor){
    store.estado.push(valor);
}

export function getItens(){
    return [...store.estado];
}