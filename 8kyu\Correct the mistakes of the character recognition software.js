function correct(string)
{
    let arr = string.split('')
    for(let i = 0 ; i < string.length ; i++){
        switch (arr[i]) {
            case '0':
                arr[i] = 'O';
                break;
            case '5':
                arr[i] = 'S';
                break;
            case '1':
                arr[i] = 'I';
                break;
            default:
                break;
        }
    }
    return arr.join('')
}