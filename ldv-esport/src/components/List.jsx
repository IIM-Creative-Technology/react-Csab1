import React from 'react';
import Item from './Item';



const List = ({ list }) => (
  
  <div>
    
    {list.map((item, index) => (
      <Item
        key={`item${index}`}
        {...item}
  
      />
    ))}
  </div>
);
    
export default List;
