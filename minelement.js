function minimum(array){
    let min = array[0];
    for(let i =1; i<array.length; i++){
        if(array[i]<min){
            min = array[i];
        }
    }
    console.log("mimnimum array in element is" , min);

}
minimum([3, 4, 7, 8, 9, 2])