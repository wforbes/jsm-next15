import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
	<div>
		<div className="text-2xl">Navbar</div>
		{children}
	</div>
  )
}

export default Layout