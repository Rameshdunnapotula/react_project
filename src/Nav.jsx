import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <section className="main">
      <article className="sub">
        <aside className="logo">
          <h3>CRUD</h3>
        </aside>
        <aside className="menu">
          <NavLink to="/" className="link">Create</NavLink>
          <NavLink to="/allpost" className="link">AllPost</NavLink>
          <NavLink to="/update" className="link">Update</NavLink>
          <NavLink to="/individual" className="link">Individual</NavLink>
        </aside>
      </article>
    </section>
  )
}

export default Nav