export const isNumberCheck = (string) => {

    if(string[0] === '0'){
        return true
    }

    if(string[0] === 0){
        return true
    }

    return !!Number(string[0])
}