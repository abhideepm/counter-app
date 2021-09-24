import React, { memo } from 'react'

type CounterProps = {
  count: number
  incrementCount: () => void
  decrementCount: () => void
  replaceCounterValue: (value: number) => void
}

const Counter = ({
  incrementCount,
  decrementCount,
  count,
  replaceCounterValue
}: CounterProps) => (
  <div className="d-flex border">
    <button
      className="btn box-dimension bg-white text-maroon"
      onClick={decrementCount}
    >
      <strong>-</strong>
    </button>
    <input
      className="input box-dimension d-flex justify-content-center align-items-center text-maroon bg-light-maroon"
      value={count}
      min="1"
      max="1000"
      onChange={e => replaceCounterValue(+e.target.value)}
    />

    <button
      className="btn box-dimension text-white bg-maroon"
      onClick={incrementCount}
    >
      <strong>+</strong>
    </button>
  </div>
)

export default memo(Counter)
