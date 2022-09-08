import React from 'react'

function Results({results}) {
  return (
  <section className='results'>
{results.map(result => (
  <Resultlt result={result}/>
))}
  </section>
    )
}

export default Results