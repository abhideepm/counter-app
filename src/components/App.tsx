import { useEffect, useState } from 'react'
import { getCounterValue, putCounterValue } from '../api/httpRequests'
import {
  DEBOUNCE_DELAY_IN_MS,
  MAX_COUNTER_VALUE,
  MIN_COUNTER_VALUE
} from '../utils/constants'
import { useDebounce } from '../hooks/useDebounce'
import Counter from './Counter'
import CounterValue from './CounterValue'
import LoadingText from './LoadingText'

const App = () => {
  const [count, setCount] = useState(1)
  const [saveLoading, setSaveLoading] = useState(false)
  const debouncedSaveCounter = useDebounce(count, DEBOUNCE_DELAY_IN_MS)

  const loadCounterValue = async () => {
    const counterValue = await getCounterValue()
    setCount(counterValue ?? 1)
  }

  const saveCounterValue = async (countValue: number) => {
    setSaveLoading(true)
    await putCounterValue(countValue)
    setSaveLoading(false)
  }

  useEffect(() => {
    loadCounterValue()
  }, [])

  useEffect(() => {
    if (debouncedSaveCounter) {
      saveCounterValue(debouncedSaveCounter)
    }
  }, [debouncedSaveCounter])

  const isCountInRange = (existingCount: number) =>
    existingCount >= MIN_COUNTER_VALUE && existingCount <= MAX_COUNTER_VALUE

  const modifyCounter = async (incrementValue: number) =>
    setCount(existingCount => {
      const incrementedValue = existingCount + incrementValue
      return isCountInRange(incrementedValue) ? incrementedValue : existingCount
    })

  const replaceCounterValue = async (value: number) => {
    const validCounterValue =
      Number.isNaN(value) || value === 0 ? MIN_COUNTER_VALUE : value
    setCount(Math.min(validCounterValue, MAX_COUNTER_VALUE))
  }

  const incrementCounter = () => modifyCounter(1)
  const decrementCounter = () => modifyCounter(-1)

  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center flex-column">
      {saveLoading && <LoadingText text="Saving Counter Value" />}
      <div className="d-flex flex-column">
        <Counter
          count={count}
          incrementCount={incrementCounter}
          decrementCount={decrementCounter}
          replaceCounterValue={replaceCounterValue}
        />
        <CounterValue count={count} />
      </div>
    </div>
  )
}

export default App
