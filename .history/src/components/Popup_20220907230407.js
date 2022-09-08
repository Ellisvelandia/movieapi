import React from 'react'

function Popup({selected, closePopup}) {
  return (
  <section className='popup'>
<div className='content'>
<h2>{selected.Title} span </h2>
</div>
  </section>
    )
}

export default Popup