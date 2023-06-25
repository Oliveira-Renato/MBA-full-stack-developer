//API request
async function makeupProducts() {
  try {
    const req = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    const products = await req.json()

    return products
  } catch (error) {
    console.log(error)
  }
}

//EXEMPLO DO CÓDIGO PARA UM PRODUTO
async function productItem(pProduct) {
  const products = pProduct ? pProduct : await makeupProducts();
  const catalog = document.querySelector('.catalog') 
  let item = '<div><h2>Nenhum produto disponivel!</h2></div>'

  if(products.length > 0) {
    item = ''//description
    for(elem in products) {
      item += `<div class="product" data-name="${products[elem]['name']}" data-brand="${products[elem]['brand']}" data-type="${products[elem]['product_type']}" tabindex="${products[elem]['id']}">
  <figure class="product-figure">
    <img src="${products[elem]['image_link']}" width="215" height="215" alt="${products[elem]['name']}" onerror="javascript:this.src='img/unavailable.png'">
  </figure>
  <section class="product-description">
    <h1 class="product-name">${products[elem]['name']}</h1>
    <div class="product-brands"><span class="product-brand background-brand">${products[elem]['brand']}</span>
<span class="product-brand background-price">R$ ${products[elem]['price']}</span></div>
  </section>
</div>`;
    }
  }
  catalog.innerHTML = item
}
//Pega as marcas e retorna no select
async function getBrands() {
  const products = await makeupProducts();
  const selectElement = document.getElementById('filter-brand');
  const uniqueBrands = new Set();
  // Itera sobre os dados da API e adiciona as opções ao select
  products.forEach(product => {
    const brand = product.brand;

    if(product !== null) {
      uniqueBrands.add(brand);
    }
  });

  // Adiciona as marcas únicas como opções ao select
  uniqueBrands.forEach(brand => {
    const option = document.createElement('option');
    option.value = brand;
    option.textContent = brand;
    selectElement.appendChild(option);
  });

  // Adiciona os eventos de escuta aos campos de filtro
  selectElement.addEventListener('change', function () {
    const filterBrandValue = selectElement.value.toLowerCase();
    const filteredProducts = products.filter(product => (filterBrandValue === '' || product.brand === filterBrandValue));

    filteredProducts.length > 0 && productItem(filteredProducts)
  });

}

//Pega as marcas e retorna no select
async function getCategories() {
  const products = await makeupProducts();
  const selectElement = document.getElementById('filter-type');
  const uniqueCategory = new Set();
  // Itera sobre os dados da API e adiciona as opções ao select
  products.forEach(product => {
    const category = product.category;

    if(product !== null) {
      uniqueCategory.add(category);
    }
  });

  // Adiciona as marcas únicas como opções ao select
  uniqueCategory.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    selectElement.appendChild(option);
  });

  // Adiciona os eventos de escuta aos campos de filtro
  selectElement.addEventListener('change', function () {
    const filterCategoryValue = selectElement.value.toLowerCase();
    const filteredProducts = products.filter(product => (filterCategoryValue === '' || product.category === filterCategoryValue));

    filteredProducts.length > 0 && productItem(filteredProducts)
  });
}

//Pega as marcas e retorna no select
async function getProductByName() {
  const productsData = await makeupProducts();
  const filterInput = document.getElementById('filter-name');
  // Adiciona o evento de escuta ao campo de filtro de nome
  filterInput.addEventListener('input', function () {
    const filterValue = this.value.toLowerCase();
    const filteredProducts = productsData.filter(product => product.name.toLowerCase().includes(filterValue));

    filteredProducts.length > 0 && productItem(filteredProducts)
  })
}

(async () => {
  await productItem()
  await getBrands()
  await getCategories()
  await getProductByName()
})()
//EXEMPLO DO CÓDIGO PARA OS DETALHES DE UM PRODUTO
function loadDetails(product) {
  let details = `<section class="product-details"><div class="details-row">
        <div>Brand</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">nyx</div>
        </div>
      </div><div class="details-row">
        <div>Price</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">10.49</div>
        </div>
      </div><div class="details-row">
        <div>Rating</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">5</div>
        </div>
      </div><div class="details-row">
        <div>Category</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250"></div>
        </div>
      </div><div class="details-row">
        <div>Product_type</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">bronzer</div>
        </div>
      </div></section>`;
}


