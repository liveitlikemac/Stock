import React from 'react';
import {ListItem,ListItemText,List,Button } from '@material-ui/core';
import { db } from './firebase';
import './stock';
function stock(props) {
    return (
        <div>
                <List className="stock_list" >  
                <ListItem>
                    <ListItemText primary={props.stock.stock} secondary="NSE">  

                    </ListItemText>
                </ListItem>
                <Button onClick={event =>db.collection('stocks').doc(props.stock.id).delete()}>
                    Sell Stock
                </Button>
            </List> 

        </div>
    )
}

export default stock;