import React from 'react'


import SHOP_DATA from './shop-data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            collections :SHOP_DATA
        }
    }

    render(){
        return <div>
            {this.state.collections.map(({id,...otherCollection})=>(
                <CollectionPreview key={id} {...otherCollection}/>    
            ))}
        </div>
    }
}


export default ShopComponent;