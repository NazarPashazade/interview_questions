
// **Question:**
//  **First Requirement:** ------------------------------------------------------------------

// 1. **Loop through numbers from 0 to N (assume N is 100 for fast testing)**.  0-100
// 2. **If the number is divisible by 3, output "bar"**.   
// 3. **If the number is divisible by 7, output "foo"**.  
// 4. **If the number is divisible by both 3 and 7, output "foobar"**.
// 5. **If a number does not meet any of the above conditions, simply output the number itself**.



//  **Second Requirement:** ------------------------------------------------------------------
 
// If the number is divisible by 5, output "baz".  The other rules remain the same 

//(i.e., you still need to check for 3, 7, and all combinations like  [3,7], [3,5] , [5.7] , [3,5,7] , ...).



//  **Third Requirement:** ------------------------------------------------------------------

// 1. **Let's imagine this task might evolve further**. 

// There could be additional divisibility rules in the future, or maybe we want to make the solution configurable. 
// For example, you might have a settings input that specifies which numbers to check and what to output.


// Implement here.....

const settings = {
    numbers: [
        {
            num: 3,
            value: "bar"
        },
        {
            num: 5,
            value: "foo"
        },
        {
            num: 7,
            value: "baz"
        }
    ]
}

const test = (settings: any): any[] => {

    const arr = []

    for (let i = 0; i < 100; i++) {
        let str = ""
        settings.numbers.forEach((setting: any) => {
            if (i % setting.num === 0) {
                str += setting.value
            }
        })

        str ? arr.push(str): arr.push(i)
    }

    return arr
}

console.log(test(settings))
