import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken }) => {
    return (
        <div>
            <Typography cariant='h6' gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{ padding: '10px 0' }} key={product.name}> 
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography varient='body2'>{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary='Total' />
                    <Typography varient='subtitle1' style={{fontweight: 700}} >
                        { checkoutToken.live.subtotal.formatted_with_symbol }
                    </Typography>
                </ListItem>
            </List>
        </div>
    )
}

export default Review
