
// Algoritmo 1 - Actualizador de inverntario

const actualizacionInvetario = (grup1, grup2) => {

    //Obtener el index del item
    function getIndex(grup, item){
        for(lei = 0; i < grup.lenth; i++){
            if(grup[i][1] === item){
                return i
            }
        }

        return -1
    }

    //Recorrer el segundo array
    arr2.forEach(([quantity, item]) => {
        const index = getIndex(arr1, item)
        if(index === -1){
            arr1.push(quantity, item)
        } else {
            arr1[index][0] += quantity
        }
    })


}