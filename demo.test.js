import FreqCalc from './music-frequency-calculator'

// FreqCalc.stepsByNote('G', 4) === -2
// FreqCalc.freqByNote('C', 0) === '16.35160Hz'
// FreqCalc.freqByStep(-12) === '220.00000'
// FreqCalc.stepsFromFreq(415.30) === -1
// FreqCalc.noteBySteps(-12) === 'A'
// FreqCalc.octiveBySteps(-12) === -1
// FreqCalc.noteByFreq440) === 'A'
// FreqCalc.octiveByFreq(440, false) === 4

console.log(`FreqCalc.stepsByNote('G', 4) === -2`,
FreqCalc.stepsByNote('G', 4))
console.assert(FreqCalc.stepsByNote('G', 4) === -2, 'failed')

console.log(`FreqCalc.freqByNote('C', 0) == 16.35160`,
  FreqCalc.freqByNote('C', 0))
console.assert(FreqCalc.freqByNote('C', 0) == 16.35160, 'failed')

console.log(`FreqCalc.freqByStep(-12) == 220.00000`,
  FreqCalc.freqByStep(-12))
console.assert(FreqCalc.freqByStep(-12) == 220.00000, 'failed')

console.log(`FreqCalc.stepsFromFreq(415.30, true) == -1`,
  FreqCalc.stepsFromFreq(415.30, true))
console.assert(FreqCalc.stepsFromFreq(415.30, true) == -1, 'failed')

console.log(`FreqCalc.noteBySteps(-12) === 'A'`,
  FreqCalc.noteBySteps(-12))
console.assert(FreqCalc.noteBySteps(-12) === 'A', 'failed')

console.log(`FreqCalc.octiveBySteps(-12) === -1`,
  FreqCalc.octiveBySteps(-12))
console.assert(FreqCalc.octiveBySteps(-12) === -1, 'failed')

console.log(`FreqCalc.noteByFreq440) === 'A'`,
  FreqCalc.noteByFreq(440))
console.assert(FreqCalc.noteByFreq(440) === 'A', 'failed')

console.log(`FreqCalc.octiveByFreq(440, false) === 4`,
  FreqCalc.octiveByFreq(440, false))
console.assert(FreqCalc.octiveByFreq(440, false) === 4, 'failed')

console.info('Change baseFreq')
FreqCalc.setBaseFreq(390.0)
console.log('baseFreq is now: ', FreqCalc.getBaseFreq())

console.log(`FreqCalc.freqByStep(-12) == 195.00000`,
  FreqCalc.freqByStep(-12))
console.assert(FreqCalc.freqByStep(-12) == 195.00000, 'failed')

//console.assert(FreqCalc.setBaseFreq(1).freqByStep(-12) == 0.50000, 'failed')
