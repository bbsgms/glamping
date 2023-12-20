import React, { Component } from 'react'
import { DomikContext } from '../Context'
import Loading from './Loading';
import Domik from './Domik';
import Title from './Title';

export default class HomeDomiki extends Component {
    static contextType = DomikContext
  render() {
    let {loading, homeDomiki:domiki} = this.context;
    domiki = domiki.map(domik => {
        return <Domik key = {domik.id} domik = {domik}/>
    })
      return <div>
         <section className = "home-domiki">
            <Title title = "Домики"/>
        <div className="home-domiki-center">
            {
                loading?<Loading/>:domiki
            }
        </div>


         </section>
         
         
      </div>
    
  }
}
