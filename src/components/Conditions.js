import React, { Component } from 'react'
import Title from './Title'
import { FaCcVisa,FaCalendarCheck, FaClock } from 'react-icons/fa'


export default class Conditions extends Component {
    state = {
        conditions:[
            {
                icon:<FaCcVisa/>,
                info: "Предоплата 50% в качестве брони"
            },
            {
                icon:<FaCalendarCheck/>,
                info: "Оплата подлежит возврату за 3 дня до брони "
            },
            {
                icon:<FaClock/>,
                info: "Время заезда 14:00, выезда 12:00"
            },
        ]
    }
  render() {
    return (
      <section className="conditions">
<Title title = "Условия"/>
<div className="conditions-center">
    {this.state.conditions.map((item, index )=> {
        return <article key = {index} className="conditions">
            <span>{item.icon}</span>
            <p>{item.info}</p>
        </article>
  })}
    </div>    


      </section>
    )
  }
}
