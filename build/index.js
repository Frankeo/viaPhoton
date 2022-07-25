'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
const readline_1 = __importDefault(require('readline'))
const process_1 = require('process')
const logic_1 = require('./logic')
const rl = readline_1.default.createInterface({
    input: process_1.stdin,
    output: process_1.stdout,
})
const checkValue = (value) => {
    if (!(0, logic_1.isValid)(value)) {
        console.log('invalid value')
        rl.close()
        return true
    }
}
rl.question(
    'Please enter the number of kilometers away from the pile(D) ',
    (D) => {
        if (checkValue(D)) return
        rl.question(
            'Please enter the maximum number of kilograms of nuts for carring(C) ',
            (C) => {
                if (checkValue(C)) return
                const c = parseFloat(C)
                rl.question(
                    'Please enter the kilogram of nuts consuming during travel(F) ',
                    (F) => {
                        if (checkValue(F)) return
                        const f = parseFloat(F)
                        if (!(0, logic_1.isValidFandCValues)(c, f)) {
                            console.log('C must be 2 times bigger than F')
                            rl.close()
                            return
                        }
                        rl.question(
                            'Please enter the total amount of kilograms of nuts in the pule(N) ',
                            (N) => {
                                if (checkValue(F)) return
                                const X = (0, logic_1.computeX)(
                                    parseFloat(D),
                                    f,
                                    parseFloat(N),
                                    c
                                )
                                console.log(
                                    `The maximum number of nuts that can be transported is: ${X}`
                                )
                                rl.close()
                            }
                        )
                    }
                )
            }
        )
    }
)
