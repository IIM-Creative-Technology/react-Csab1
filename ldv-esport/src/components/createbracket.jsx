import React from 'react';
import ReactDOM from 'react-dom';
import List from './List'
import data from '../data.json'
import Item from './Item'



 function createbracket(){




var number = document.getElementById("nb-select").options[document.getElementById('nb-select').selectedIndex].text;
for(let i=0;i<{number};i++){React.createElement(<Item/>)}
ReactDOM.render(

<List list={data}/>,
document.getElementById('bracket'),

)




 }

export default createbracket




