import React from 'react'

type Props = {
  name: string
}

function Greeting({ name }: Props) {
  return <div className="tc w100">Hey, {name}</div>
}

export default Greeting
