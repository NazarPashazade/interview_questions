// Given array of strings that represents the numbers like:
// ['10', '5', '-1', '2', '-2', '1', '8', '-3', '4', '9', '7', 'y', 'x', 'j']

//     Create function that accepts this array and returns another array with that values above,
//     that is sorted by absolute numeric values, omitting non-numeric characters.
//     Then dump both arrays to the debug console.

// Expected result:      // [-1,1,-2,2,3,-3,4,,,,,]  // -1 or 1 doesn't matter

function sortArrayByAbsoluteValues(arr: string[]): number[] {

    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])) {
            newArr.push(Number(arr[i]))
        }
    }

    return newArr.sort((a, b) => Math.abs(a) - Math.abs(b))

}




const original = ['10', '5', '-1', '2', '-2', '1', '8', '-3', '4', '9', '7', 'y', 'x', 'j'];

const sorted = sortArrayByAbsoluteValues(original);

console.log(original);
console.log(sorted);
