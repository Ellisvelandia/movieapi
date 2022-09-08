import React from 'react'

function Results({results}) {
  return (
  <section className='results'>
{results.map(result => (
  <Result/>
))

}
  </section>
    )
}

export default Results