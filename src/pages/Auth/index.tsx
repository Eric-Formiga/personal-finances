import { useState } from "react"


const index = () => {
  const [name] = useState('')
  return (
    <div>
      {name}
    </div>
  )
}

export default index
