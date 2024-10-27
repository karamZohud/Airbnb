import React from 'react'
interface TitleProps{
    title:string
}
export const MainHeading = ({title}:TitleProps) => {
  return (
    <h1 className="text-4xl font-semibold mb-5">{title}</h1>
  )
}
