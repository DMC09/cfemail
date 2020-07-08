import React from 'react'

const FirstName = ({onChange}) => {
  // console.log(onChange)
  return (
  <>
  <input onChange={onChange} className="fname_input" type="text" />
</>

  )
}

export default FirstName
