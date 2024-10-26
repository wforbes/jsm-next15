import React from 'react'

export const layout = ({children}: {children: React.ReactNode}) => {
  return (
	<div>
		<div className="text-2xl">Dashboard Layout!</div>
		{children}
	</div>
  )
}
