// import React from 'react'

import { useContext } from "react"
import { UserContext } from "../../context/userContext"

const DashboardLayout = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <Navboar/>

        {user && <div>{children}</div>}
    </div>
  )
}

export default DashboardLayout