import React from 'react'

const TodosList = ({ children }) => {
  return (
    <section id="todos">

      <h2 id="bold-txt">My Todos</h2>

      <div className="grid-wrapper">

        {children}

      </div>

    </section>
  )
}

export default TodosList