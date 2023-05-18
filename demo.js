import FreqCalc from './music-frequency-calculator'

// FreqCalc.calculateSteps('G', 4) === -2
// FreqCalc.calculateFrequencyByNote('C', 0) === '16.35Hz'
// FreqCalc.calculateFrequencyByStep(-12) === '220.00Hz'
// FreqCalc.calculateStepsFromFrequency(415.30) === -1
// FreqCalc.calculateNoteBySteps(-12) === 'A'
// FreqCalc.calculateOctaveBySteps(-12) === -1
// FreqCalc.calculateNoteByFrequency(440) === 'A'
// FreqCalc.calculateOctaveByFrequency(440, false) === 4

console.log(`FreqCalc.calculateSteps('G', 4) === -2`,
FreqCalc.calculateSteps('G', 4))
console.assert(FreqCalc.calculateSteps('G', 4) === -2, 'failed')

console.log(`FreqCalc.calculateFrequencyByNote('C', 0) == '16.35'`,
  FreqCalc.calculateFrequencyByNote('C', 0).toFixed(2))
console.assert(FreqCalc.calculateFrequencyByNote('C', 0).toFixed(2) == 16.35, 'failed')

console.log(`FreqCalc.calculateFrequencyByStep(-12) === '220.00'`,
  FreqCalc.calculateFrequencyByStep(-12).toFixed(2))
console.assert(FreqCalc.calculateFrequencyByStep(-12).toFixed(2) === '220.00', 'failed')

console.log(`FreqCalc.calculateStepsFromFrequency(415.30) === -1.00`,
  FreqCalc.calculateStepsFromFrequency(415.30).toFixed(0))
console.assert(FreqCalc.calculateStepsFromFrequency(415.30).toFixed(2) === -1.00, 'failed')

console.log(`FreqCalc.calculateNoteBySteps(-12) === 'A'`,
  FreqCalc.calculateNoteBySteps(-12))
console.assert(FreqCalc.calculateNoteBySteps(-12) === 'A', 'failed')

console.log(`FreqCalc.calculateOctaveBySteps(-12) === -1`,
  FreqCalc.calculateOctaveBySteps(-12))
console.assert(FreqCalc.calculateOctaveBySteps(-12) === -1, 'failed')

console.log(`FreqCalc.calculateNoteByFrequency(440) === 'A'`,
  FreqCalc.calculateNoteByFrequency(440))
console.assert(FreqCalc.calculateNoteByFrequency(440) === 'A', 'failed')

console.log(`FreqCalc.calculateOctaveByFrequency(440, false) === 4`,
  FreqCalc.calculateOctaveByFrequency(440, false))
console.assert(FreqCalc.calculateOctaveByFrequency(440, false) === 4, 'failed')

