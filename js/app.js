
//Player Select and atted to selected list
const selectedPlayersArray = [];


function display(button){
   
    const showplayers = document.getElementById('Selected-players-table');
    if(selectedPlayersArray.length > 5){
        alert("You can not select more than 5 players!!! Please select highest 5 players");

        selectedPlayersArray.pop();
        return button.removeAttribute('disabled');
        
    }
    showplayers.innerHTML = "";
    for(let i = 0 ; i < selectedPlayersArray.length; i++)
    {
       const playerName = selectedPlayersArray[i].playerName;

       const tr = document.createElement("tr");
        tr.innerHTML = `
        <th> ${i+1}. </th>
        <td> ${playerName} </td>
        `;

        showplayers.appendChild(tr);
    }
}

function selectPlayer(element){
    const button = element;
    button.setAttribute('disabled', 'ture');
    
    const selectedPlayerForV = element.parentNode.children[0].innerText;

    const playersObj =
    {
        playerName: selectedPlayerForV
    }
    
    selectedPlayersArray.push(playersObj);

    display(button);
}

// get per player budget and calculate total expenses (function called from common)

document.getElementById('btn-calculate').addEventListener('click',function(){
    let perPlayerBudget =  getInputFieldValueById('per-player-budget-field');
    // Calculate total budget for selected players
    selectedPlayersExpense = perPlayerBudget * selectedPlayersArray.length;

    setTextaValueById('selected-player-expense',selectedPlayersExpense);
})


