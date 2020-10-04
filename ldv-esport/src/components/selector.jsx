import React from 'react';
import Createbracket from './createbracket'

const Selector = ({ }) => (
  
    <div >
        
        <h1>Crée votre tournois</h1>
        <label for="bracket-select">Choisir un type de tournois</label>
        <select name="selectortype" id="tournament-select">
            <option value="">--Option de tournois--</option>
            <option value="Single elimination">Single Elimination</option>
            <option value="Dual elimination ">Dual Elimination</option>
        </select>
        <select name="selectornb" id="nb-select">
            <option value="">--Participant--</option>
            <option id="2">2</option>
            <option value="4 ">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12 ">12</option>
            <option value="14">14</option>
            <option value="16 ">16</option>
        </select>
        
        <p>Entrer le nom des participant</p>

   <form id='json'>
        <input id='player'></input>
        
        <button id='getDataBtn' onClick={Createbracket}  >Go</button>
</form>
    </div>
// recuperer le form en json ??? //
);





export default Selector;
