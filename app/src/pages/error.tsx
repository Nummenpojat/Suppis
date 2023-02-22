import React from "react";

const Error = (props: { statusCode: number, message: string }) => {
  return (
   <div className="h-[calc(100vh-120px)] flex place-content-center place-items-center">
     <h1 className="text-[30px]">{`Error: ${props.statusCode} - ${props.message}`}</h1>
   </div>
  )
}
export default Error;