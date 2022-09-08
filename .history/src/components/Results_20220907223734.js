import React from 'react'

function Results({results}) {
  return (
  <section className='results'>
{results.map(result => (
  <Resultult result={result}/>
))}
  </section>
    )
}

export default Results