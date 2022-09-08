import React from 'react'

function Popup({selected, closePopup}) {
  return (
  <section className='popup'>
<div className='content'>
<h2>{selected.Title} <span>({selected.Year})</span></h2>
<p className='rating'>Rating: {selected.im}</p>
</div>
  </section>
    )
}

export default Popup