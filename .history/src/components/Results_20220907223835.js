import React from 'react'
import Result from "../components";

function Results({results}) {
  return (
  <section className='results'>
{results.map(result => (
  <Result result={result}/>
))}
  </section>
    )
}

export default Results;