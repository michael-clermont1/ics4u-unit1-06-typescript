/**
 * The program gets the wood length
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-9-24
 */

// get arguments
//
import { readFileSync } from 'fs'

/**
 * The function calculates the mean
 *
 * @param {Array} arrayOfIntegers  - integer array
 * @returns {Array} Return value
 */
function meanFunction(arrayOfIntegers: number[]): number {
  let total = 0
  let mean = 0
  let addNumber = 0
  for (let counter = 0; counter < arrayOfIntegers.length; counter++) {
    addNumber = arrayOfIntegers[counter]
    total = total + addNumber
  }
  const length = arrayOfIntegers.length
  if (length > 0) {
    mean = total / length
  }
  return mean
}

/**
 * The function calculates the median
 *
 * @param {Array} arrayOfIntegers  - integer array
 * @returns {Array} Return value
 */
function medianFunction(arrayOfIntegers: number[]): number {
  let returnValue = 0
  const middle = arrayOfIntegers.length / 2
  let addNumber = 0
  if (arrayOfIntegers.length % 2 === 1) {
    returnValue = arrayOfIntegers[middle]
  } else {
    addNumber = arrayOfIntegers[middle]
    returnValue = (arrayOfIntegers[middle - 1] + addNumber) / 2
  }
  return returnValue
}
//
// print process.argv
process.argv.forEach(function (val, index, array) {})

console.log(process.argv[2])

const file = readFileSync(process.argv[2], 'utf8')
console.log(file)

const newArray = file.split(/\r?\n/)
const numberArray: number[] = []
let valueInt = 0

for (let counter = 0; counter < newArray.length; counter++) {
  valueInt = parseInt(newArray[counter])
  numberArray.push(valueInt)
}
console.log('\nCalculating stats...')
const mean = meanFunction(numberArray)
const median = medianFunction(numberArray)
console.log('The mean is %d', mean)
console.log('The median is %d', median)
