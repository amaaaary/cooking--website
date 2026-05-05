const toggleBtn = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    themeLink.setAttribute('href', savedTheme);
}

toggleBtn.addEventListener('click', () => {
    let currentTheme = themeLink.getAttribute('href');
    let newTheme = (currentTheme === 'light-theme.css') ? 'dark-theme.css' : 'light-theme.css';

    themeLink.setAttribute('href', newTheme);
    localStorage.setItem('theme', newTheme);
});

/*created by Mostfa Mahmoud*/
  
    const recipesData = {
        "chicken": { name: "Chicken Recipe", img: "../images/chiken.jpeg", cal: "550 kcal", time: "45 min", diff: "Medium" },
        "spaghetti": { name: "Spaghetti Recipe", img: "../images/Spaghetti.jpeg", cal: "400 kcal", time: "30 min", diff: "Easy" },
        "fish": { name: "Grilled Fish Recipe", img: "../images/fish.jpeg", cal: "300 kcal", time: "25 min", diff: "Easy" },
        "burger": { name: "Burger Recipe", img: "../images/burger.jpeg", cal: "750 kcal", time: "20 min", diff: "Easy" },
        "kabap": { name: "Kabap", img: "../images/kapap.jpeg", cal: "500 kcal", time: "40 min", diff: "Medium" },
        "salad": { name: "Salad Recipe", img: "../images/salad.jpeg", cal: "150 kcal", time: "10 min", diff: "Very Easy" },
        "pizza": { name: "Pizza Recipe", img: "../images/pizza.jpeg", cal: "850 kcal", time: "35 min", diff: "Medium" },
        "crep": { name: "Crep Recipe", img: "../images/crep.jpeg", cal: "450 kcal", time: "15 min", diff: "Easy" },
        "steak": { name: "Grilled Steak Recipe", img: "../images/steak.jpeg", cal: "600 kcal", time: "25 min", diff: "Hard" }
    };

    function compareRecipes() {
        const id1 = document.getElementById('select1').value;
        const id2 = document.getElementById('select2').value;
        const table = document.getElementById('compareTable');

        if (id1 && id2) {
            table.style.display = 'table';
            updateUI(id1, 1);
            updateUI(id2, 2);
        } else {
            table.style.display = 'none';
        }
    }

    function updateUI(id, slot) {
        const data = recipesData[id];
        document.getElementById(`name${slot}`).innerText = data.name;
        document.getElementById(`img${slot}`).src = data.img;
        document.getElementById(`cal${slot}`).innerText = data.cal;
        document.getElementById(`time${slot}`).innerText = data.time;
        document.getElementById(`diff${slot}`).innerText = data.diff;
    }
