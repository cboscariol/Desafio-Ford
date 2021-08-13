const chassi1 = '1GH'
const chassi2 = 'CM8263'
const chassi3 = '3A004352'



// const reverted1 = chassi1.split('').reverse().join('')

// console.log(reverted1)

// const firtsAsc = reverted1.charCodeAt()

// console.log(firtsAsc)

// //-----------------------------------//

// const reverted2 = chassi2.split('').reverse().join('')

// console.log(reverted2)

// const secondAsc = reverted2.charCodeAt()

// console.log(secondAsc)

// //-----------------------------------//

// const reverted3 = chassi3.split('').reverse().join('')

// console.log(reverted3)

// const thirdAsc = reverted3.charCodeAt()

// console.log(thirdAsc)

// //-----------------------------------//

// console.log(firtsAsc + secondAsc + thirdAsc)

const reverse = (chassi) => {
    const revert1 = chassi.split('').reverse().join('')
    const result = revert1.charCodeAt()
    console.log(result)
}

const firstResult = reverse(chassi1)
const secondResult = reverse(chassi2)
const thirdResult = reverse(chassi3)


const returning = (result) => {
    const invert1 = toString(result).fromCharCode()
    console.log(invert1)
}

const returnResult = returning(firstResult)