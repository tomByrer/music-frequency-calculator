# Music Frequency calculator

(forked from [Sambego/frequency-calculator](https://github.com/Sambego/frequency-calculator))

This is a small library to convert frequencies to steps, notes and octaves.

```js
import FreqCalc from 'music-frequency-calculator'
```

## calculateSteps
You can calculate the number of half steps between the base note (A4) and a given note:
```js
FreqCalc.stepsByNote('G', 4) // -> -2
```

## freqByNote
Once imported you can calculate the frequency of a note by supplying the note name and octave:
```js
FreqCalc.freqByNote('C', 0) // -> 16.35160
```

## freqByStep
If you know the number of half steps, you can also calculate the frequency based on these steps, this can be a negative number if the note is below the base note (A4):
```js
FreqCalc.freqByStep(-12) // -> 220.00000
```

## calculateStepsFromFrequency
You calculate the amount of half steps between a frequency and A4 (440Hz). If you want to round the steps, you can add `true` as the second parameter:
```js
FreqCalc.stepsFromFreq(415.30) // -> -1.0001958238467235
```

or

```js
FreqCalc.stepsFromFreq(415.30, true) // -> -1
```

## calculateNoteBySteps
You can calculate a note based on the the distance in half steps of A4:
```js
FreqCalc.noteBySteps(-12) // -> A
```

## calculateOctaveBySteps
You can calculate an octave based on the the distance in half steps of A4, if you don't want the octave to be relative to A4, add `false` as the second parameter:
```js
FreqCalc.octiveBySteps(-12) // -> -1
```

or

```js
FreqCalc.octiveBySteps(-12, false) // -> -3
```

## calculateNoteByFrequency
You can calculate the note of a frequency:
```js
FreqCalc.noteByFreq440) // -> A
```

## octiveByFreq
You can calculate the octave of a frequency. If you don't want the octave to be relative to A4, add `false` as the second parameter:
```js
FreqCalc.octiveByFreq(440) // -> 0
```

or

```js
FreqCalc.octiveByFreq(440, false) // -> 4
```

## TODO
- [ ] Write tests
- [ ] Create a demo

## The MIT License (MIT)
Copyright © 2016 Sam Bellen (as "frequency-calculator" v0.0.8)
Copyright © 2023 Tom Byrer (as "music-frequency-calculator" v0.1.0+)

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
