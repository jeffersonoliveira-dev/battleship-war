import React from "react"
import styled from "styled-components"



const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    </>
  )
}
export default Layout
