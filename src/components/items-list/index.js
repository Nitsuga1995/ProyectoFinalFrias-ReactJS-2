import React from 'react'
import Item from '../item-card'
import { CircularProgress } from '@mui/material'

const ItemsList = ({ items, loading }) => {
  return (
    <div style={containerStyle}>
        {
            Boolean(loading) ?
            <CircularProgress value={30} variant="soft" />
            :
                items.map((item) => <Item data={item}/>)
        }
    </div>
  )
}

export default ItemsList

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap:'15px'
}