import React from 'react'
import Create from '../components/create';

export const Submit = () => {
  return (
    <div className = "submit">
      <h2 className = "submit-header">Оставьте свои контакты</h2>
      <div>
        <Create/>
      </div>
    </div>
  )
}
