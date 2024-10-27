import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
	<div>
		<div className="text-2xl">Dashboard Layout!</div>
		{children}
	</div>
  )
}
