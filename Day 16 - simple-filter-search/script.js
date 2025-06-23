const searchInput = document.getElementById('filter-search');
const listItems = document.querySelectorAll('.item');

searchInput.addEventListener("input", function() {
    const filterSearch = this.value.toLowerCase();

    listItems.forEach(function(item) {
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(filterSearch)) {
            item.style.display = ''; 
        } else {
            item.style.display = 'none';
        }
    });
});
