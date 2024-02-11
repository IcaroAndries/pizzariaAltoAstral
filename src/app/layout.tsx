import React from "react";

const RootLayout:React.FC = function ({children}) {
  return (
    <div>
      <h1>Layout</h1>
    {children} 
    </div>
  )
}

export default RootLayout