import React, {useState} from "react";

import { Button } from "./Rate.styles";

export const Rate = ({callback}) => {
  const [value, setValue] = useState(5);

  return (
    <div>
      <input 
      type='range'
      min='1'
      max='10'
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)} />
      {value}
      <p>
        <Button onClick={() => callback(value)}>Rate</Button>
      </p>
    </div>
  )
};