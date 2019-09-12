
const bubble_sort = (arr) => {
    const res = arr.slice()
    const n = res.length
    let sorted = false;
    while(!sorted){
        sorted = true
        for(let i = 0; i < n; i++){
            if(res[i] > res[i+1]){
                const tmp = res[i]
                res[i] = res[i+1]
                res[i+1] = tmp
                sorted = false
            }
        }
    }
    return res
}

if (require.main === module) {
    const arr = [6,2,4,345,8,23,6,1,0,0,0,-1] // ==> [-1, 0, 0, 0, 1, 2, 4, 6, 6, 8, 23, 345]
    console.log(`\nPerforming bubble sort on arr: \n\n [${arr}]\n`)
    const sorted = bubble_sort(arr);
    console.log(`Sorted array is: \n\n [${sorted}]\n\n`)
}

module.export = {
    bubble_sort
}