import React from 'react'

export const Error = ({children}) => {
  return (
    <div className="bg-red-700 rounded-lg p-2 mb-2">
        <p className="uppercase text-center font-bold text-white ">
            {children}
        </p>
    </div>
  )
}

export default Error;
