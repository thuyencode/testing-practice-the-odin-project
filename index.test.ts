import { describe, expect, test } from 'bun:test'
import { Calculator } from './src/classes/Calculator'
import {
  analyzeArray,
  caesarCipher,
  capitalize,
  reverseString
} from './src/utils'

describe("The 'capitalize' function", () => {
  test('The first character should be uppercase', () => {
    const expected = 'Hello, world!'
    const input = expected.toLowerCase()

    expect(capitalize(input)).toStrictEqual(expected)
  })
})

describe("The 'reverseString' function", () => {
  test('The first character should be uppercase', () => {
    const expected = '!dlrow ,olleH'
    const input = 'Hello, world!'

    expect(reverseString(input)).toStrictEqual(expected)
  })
})

describe("The 'Calculator' class", () => {
  test("The 'add' function should return the sum of two numbers", () => {
    const n = 5
    const expected = n + n

    expect(Calculator.add(n, n)).toEqual(expected)
  })

  test("The 'subtract' function should return the difference of two numbers", () => {
    const n1 = 15
    const n2 = 10
    const expected = n1 - n2

    expect(Calculator.subtract(n1, n2)).toEqual(expected)
  })

  test("The 'divide' function should return the quotient of two numbers", () => {
    const n1 = 15
    const n2 = 5
    const expected = n1 / n2

    expect(Calculator.divide(n1, n2)).toEqual(expected)
  })

  test("The 'multiply' function should return the product of two numbers", () => {
    const n = 5
    const expected = n * n

    expect(Calculator.multiply(n, n)).toEqual(expected)
  })
})

describe("The 'analyzeArray' function", () => {
  test("Should correctly return the 'average', 'min', 'max', and 'length' properties of the given array", () => {
    const expected = {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    }

    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual(expected)
  })
})

describe("The 'caesarCipher' function", () => {
  test('Should correctly encrypt and decrypt the given string', () => {
    const str = 'Hello, World!'

    expect(caesarCipher(caesarCipher(str, 20), 6)).toStrictEqual(str)
  })
})
