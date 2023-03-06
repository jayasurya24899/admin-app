import React from 'react'


function Custominput(props) {
  const {type, label, i_id, i_class, onChange}= props
  return (
    <div class="form-floating mb-3">
  <input type={type}
  class={"form-control ${i_class}"} 
  id={i_id}
  placeholder={label}
  onChange={onChange}
  />
  <label htmlFor={label}>{label}</label>
</div>
  )
}

export default Custominput