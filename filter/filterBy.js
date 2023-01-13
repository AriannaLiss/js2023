//excludes from the array elements with type 'type'
function filterBy(arr, type){
    return arr.filter((item) => typeof item != type)
}

const arr = ['1', 'a', 32, 0, null, 'null'];
console.log(filterBy(arr,'string'));