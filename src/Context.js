import React, { Component } from 'react'
import items from './data'
const DomikContext = React.createContext();
 class DomikProvider extends Component {
  state = {
    domiki:[],
    sortedDomiki:[],
    homeDomiki:[],
    loading: true
  };
  
componentDidMount(){
  
  let domiki = this.formatData(items)
  let  homeDomiki = domiki.filter( domik => domik.homed === true );
  this.setState({
    domiki,homeDomiki, sortedDomiki:domiki, loading:false
  })
}

formatData(items) {
  let tempItems = items.map(item => {
    let id = item.sys.id
    let images = item.fields.images.map(image => image.fields.file.url );

    let domik = {...item.fields, images,id}
    return domik;
  });
  return tempItems
}

getDomik = (info) =>{
  let tempDomiki = [...this.state.domiki];
  const domik = tempDomiki.find((domik)=>domik.info===info);
  return domik;
}


  render() {
    return (
      <DomikContext.Provider value = {{...this.state, getDomik: this.getDomik}}>
        {this.props.children}

      </DomikContext.Provider>

    )
  }
}
const DomikConsumer = DomikContext.Consumer;

export function withDomikConsumer(Component){
  return function ConsumerWrapper(props){
    return <DomikConsumer>
      {value => <Component {...props} context={value}/>}
    </DomikConsumer>
  }
}

export {DomikProvider, DomikConsumer, DomikContext};