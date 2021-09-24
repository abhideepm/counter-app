import React, { memo } from 'react'

type CounterValueProps = { count: number }

const CounterValue = ({ count }: CounterValueProps) => (
  <div className="align-self-start">
    <h5 className="margin-0 mt-2">
      <strong>Counter Value</strong>
    </h5>
    <h5 className="margin-0 mt-1 font-normal">{count}</h5>
  </div>
)

export default memo(CounterValue)
