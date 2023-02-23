const menuEmail = document.querySelector('.navbar-email');
const menuCarritoIcone = document.querySelector('.navbar-shopping-cart');
const menuHamIcone = document.querySelector('.menu');
const productDetailCloseIcon=document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer  = document.querySelector('#shoppingCartContainer');
const productDetailContainer=document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcone.addEventListener('click',toggleMobileMenu);
menuCarritoIcone.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

/*Función que cuando se abra desktopmenu se cierre shoppingCartContainer que es carrito con productos selecionados*/
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
  }
/*Función que cuando se abra aside que es carrito con productos selecionados se cierre desktopmenu */
  function toggleCarritoAside() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isDesktopMenuClosed) {
      desktopMenu.classList.add('inactive'); 
    }
    
    shoppingCartContainer.classList.toggle('inactive');
  }
  /*Función que cuando se abra mobilemenu se cierre shoppingCartContainer que es carrito con productos selecionados*/
  function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive'); 
    }
    closeProductDetailAside();
    
    mobileMenu.classList.toggle('inactive');
  }
  /*Función que cuando se abra shoppingCartContainer que es carrito con productos selecionados se cierre mobilemenu */
  function toggleCarritoAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive'); 
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive'); 
    }
    
    shoppingCartContainer.classList.toggle('inactive');
  }
  function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
  }
  function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
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
    productImg.addEventListener('click', openProductDetailAside);

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
