import React from 'react'
import LoadingSpinner from './LoadingSpinner'

const LoadingText = ({ text }: { text?: string }) => (
  <div className="d-flex justify-content-center align-items-center margin-0">
    <LoadingSpinner />
    <h6 className="margin-0 ml-1">{text ?? ''}</h6>
  </div>
)

export default LoadingText
