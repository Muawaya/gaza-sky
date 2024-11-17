function removeDuplicates(array) {
    const uniqueSet = new Set(array);
    return Array.from(uniqueSet);
}
//_______________________________________________________________
const items = ["apple", "banana", "apple", "orange", "banana"];
const uniqueItems = removeDuplicates(items);
console.log(uniqueItems);["apple", "banana", "orange"]
