import React, { Component } from 'react'
import items from './data'
const DomikContext = React.createContext();
 class DomikProvider extends Component {
  state = {
    domiki:[],
    sortedDomiki:[],
    homeDomiki:[],
    loading: true,
    type: 'все',
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false
  };
  
componentDidMount(){ //is used to make changes after it was displayed (asynchronious)
  
  let domiki = this.formatData(items)
  let  homeDomiki = domiki.filter( domik => domik.homed === true ); //with homed value
  let maxPrice = Math.max(...domiki.map(item => item.price));
  let maxSize = Math.max(...domiki.map(item => item.size));

  this.setState({ //updating 
    domiki,homeDomiki, sortedDomiki:domiki, loading:false, price: maxPrice,
    maxPrice,
    maxSize
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

getDomik = (info) =>{ //retrieve domik by info
  let tempDomiki = [...this.state.domiki];
  const domik = tempDomiki.find((domik)=>domik.info===info);
  return domik;
}

handleChange = event=>{ //handles according to user filter
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;
  console.log(name, value);


  this.setState(
      {
        [name]: value
      },
      this.filterDomiki
    );
  };
  filterDomiki = () => {
    let {
      domiki,
      type,
      price,
      minSize,
      maxSize,
      breakfast
    } = this.state;

    let tempDomiki = [...domiki]; //to hold intermediate values after filtering
    price = parseInt(price);
    // filter by type
    if (type !== "все") {
      tempDomiki = tempDomiki.filter(domik => domik.type === type);
    }
    // filter by price
    tempDomiki = tempDomiki.filter(domik => domik.price <= price);
    //filter by size
    tempDomiki = tempDomiki.filter(
      domik => domik.size >= minSize && domik.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempDomiki = tempDomiki.filter(domik => domik.breakfast === true);
    }
    
    this.setState({
      sortedDomiki: tempDomiki
    });
}
  render() {
    return (
      <DomikContext.Provider value = {{...this.state, getDomik: this.getDomik, handleChange: this.handleChange}}>
        {this.props.children}

      </DomikContext.Provider>

    )
  }
}
const DomikConsumer = DomikContext.Consumer;
export{DomikProvider, DomikConsumer, DomikContext};

export function withDomikConsumer(Component){ //hoc
  return function ConsumerWrapper(props){
    return <DomikConsumer>
      {value => <Component {...props} context={value}/>}
    </DomikConsumer>
  }
}

