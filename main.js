const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcone = document.querySelector('.navbar-shopping-cart');
const menuHamIcone = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside  = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcone.addEventListener('click',toggleMobileMenu);
menuCarritoIcone.addEventListener('click',toggleCarritoAside);

/*Función que cuando se abra desktopmenu se cierre aside que es carrito con productos selecionados*/
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
  
    if (!isAsideClosed) {
      aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
  }
/*Función que cuando se abra aside que es carrito con productos selecionados se cierre desktopmenu */
  function toggleCarritoAside() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isDesktopMenuClosed) {
      desktopMenu.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
  }
  /*Función que cuando se abra mobilemenu se cierre aside que es carrito con productos selecionados*/
  function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
  
    if (!isAsideClosed) {
      aside.classList.add('inactive'); 
    }
    
    mobileMenu.classList.toggle('inactive');
  }
  /*Función que cuando se abra aside que es carrito con productos selecionados se cierre mobilemenu */
  function toggleCarritoAside() {
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    
    if (!isDesktopMenuClose) {
      desktopMenu.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
  }
  const productList = [];
        productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        });
        productList.push({
        name: 'Pantalla',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        });
        productList.push({
        name: 'Compu',
        price: 620,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        });

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './Imagenes/icono-anadir-al-carrito.png');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
 

