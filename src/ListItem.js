import React from 'react'
import './ListItem.css'
import FlipMove from 'react-flip-move'

function ListItems({items, deleteItem, setUpdate}) {
    const listItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>
                    <input 
                        type="text" 
                        id={item.key} 
                        value={item.text}
                        onChange={
                            (e) => {
                                setUpdate(e.target.value, item.key)
                            }
                        }   
                    />
                    <span><i className="fas fa-trash"
                            onClick={() => deleteItem(item.key)}></i></span>
                </p>
            </div>
        )
    })
    return (
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

export default ListItems