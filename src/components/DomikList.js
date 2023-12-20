import React from 'react'
import Domik from './Domik'

export default function DomikList({domiki}) {
if(domiki.length === 0) {
    return (
        <div className = "empty-search">
            <h3> К сожалению, по вашему запросу нет домиков</h3>
        </div>
    )
}
  return (
    <section className="domikilist">
        <div className="domikilist-center">{
            domiki.map(item=> {
                return <Domik key={item.id} domik={item}/>})
        }

        </div>

    </section>
  )
}
