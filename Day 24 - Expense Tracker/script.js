const Expense = document.getElementById('TotalExpense');
const listExpense = document.getElementById('listExpense');
const expenses = [];

function addExpense() {
    const Title = document.getElementById('title').value;
    const Price = parseFloat(document.getElementById('price').value);

    if(Title && !isNaN(Price)){
        const time = new Date().toLocaleString();
        const newexpenses = { Title,Price,time };
        expenses.push(newexpenses);
        
        const li = document.createElement('li');
        li.textContent = `${Title} - ₹${Price} (Added on ${time})`;   
        
        const btn = document.createElement('button');
        btn.textContent = "❌";
        btn.style.marginLeft = "10px";
        btn.onclick = () => {
            const index = expenses.indexOf(newexpenses);
            if(index !== -1) {
                expenses.splice(index,1);
                li.remove();

                const total = expenses.reduce((acc, item) => acc + item.Price, 0);
                Expense.textContent = `Total: ₹${total}`;
            }
        };
        li.appendChild(btn);
        listExpense.appendChild(li);
        const total = expenses.reduce((acc, item) => acc + item.Price, 0);
        Expense.textContent = `Total: ₹${total}`;
    
        document.getElementById('title').value = "";
        document.getElementById('price').value = "";
    }
}
function clearExpenses(){
    expenses.length = 0;
    listExpense.innerHTML = "";
    Expense.textContent = "All expenses cleared. Total: ₹0";
}

