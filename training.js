let availableKeywords = [
    'SOUP-A-STAR COOKBOOK',
    'A-TIME-TO-EAT COOKBOOK',
    'MINI-AFFILIATE-MARKETING',
    'AFFILIATE-MARKETING-FOR-BEGINNERS',
    'MONEY-MINDSET',
    'BEGINNERS-AFFILIATE-MARKETING-GUIDE',
    'PAYAH-BUSINESS-SCHOOL',
    'GUIDE-TO-6-FIGURES-ONLINE',
    'PROFIT-ACCELERATOR-BLUEPRINT',
    'SOCIAL-MEDIA-MARKETING',
    'EMAIL-MARKETING',
    'MONETIZATION',
    'AFFILIATE-MARKETING-SECRETS',
    'AFFILIATE-MARKETING-ACCELERATOR-PROGRAM',
    'DIGITAL-COURSES',
    'EBOOKS-AND-OTHER-PRODUCTS',
    '1000+ PROMPTS TO ELEVATE YOUR CONTENT, BUSINESS AND SOCIAL MEDIA TRATEGY',
    'HACKS, CODING, EBOOKS, JAMB PAST QUESTIONS AND ANSWERS 2010-2023',
    'SANTORINI-TRAVEL-GUIDE: 2024',
    '50 AI TOOLS HANDBOOK',
    'AI COMIC COURSE',
    'DAILY-GRACE-DEVOTIONAL',
    'HOW-TO-STOP-FEAR-SPIRITUALLY',
    'SONS-OF-THE-PROPHET',
    'HOW-TO-WORRY LESS-AND-PRAY-MORE',
    'RELATIONSHIP-DISCUSSIONS',
    'ASH by JASON BRANT',
    'ON PAGE SEO TACTICS FOR WORDPRESS: INCREASE GOOGLE RANKINGS',
    'EASY MEAL PLANNING GUIDE',
    'HOW-TO-LAUNCH-YOUR-BUSINESS-AS-A-CHRISTIAN',
    'WIG-MAKING-SIMPLIFIED',
    'LEARN SPANISH: SPANISH CACTUS',
    'COMPLETE-GERMAN-COURSE',
    'CRYPTO-PROFIT-KIT',
    'PUBLISH AND SELL BOOKS ON AMAZON',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("search");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if (input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    }));

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}


const bookItems = document.querySelectorAll('.service');

search.addEventListener('input', () => {
    const searchText = search.value.toLowerCase();

    bookItems.forEach(service => {
        const title = service.getAttribute('data-title').toLowerCase();

        if(title.includes(searchText)){
            service.style.display = 'block';
        } else{
            service.style.display = 'none';
        }
    });
});

document.getElementById("searchButton").addEventListener('click', function(){
    const input = document.getElementById('search').value.trim().toLowerCase();
    const service = document.querySelectorAll(".service");

    let foundMatch = false;
    service.forEach(service => {
        const title = service.getAttribute("data-title").trim().toLowerCase();
        if (title === input) {
            service.style.display = "block";
            foundMatch = "true";
        } else{
            service.style.display = "none";
        }
    })

    if (!foundMatch){
        alert("No book found with that exact title in this section. \nTry checking another section. If the book you seek is still not found, \nyou can make a Request and you'll be attended to immediately.");
    }
});

/*add to cart button */
document.addEventListener("DOMContentLoaded", function(){
    const products = document.querySelectorAll('.service');

    products.forEach((product) => {
        const button = document.createElement('button');
        button.innerText = "Add to Cart";
        button.classList.add('add-to-cart');
        product.appendChild(button);

button.addEventListener("click", function(){
    addToCart(product);
    });
});

    function addToCart(product) {
        const dataTitle = product.getAttribute('data-title');

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        if(!cart.includes(dataTitle)){
            cart.push(dataTitle);

localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${dataTitle} has been added to your cart.`);
        } else {
            alert("This item is already in your cart.");
        }
    }
});