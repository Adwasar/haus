const headMenuLI = document.querySelectorAll('.head_menu ul');
console.log(headMenuLI);

headMenuLI.forEach(item => {
    item.innerHTML = item.innerHTML.toUpperCase();
});

