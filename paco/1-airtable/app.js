
const result = document.querySelector('.result')
const fetchProducts = async () => {
  try {
    const { data } = await axios.get('/api/dieufdieul')
    const products = data
      .map((product) => {
        const { id, url, name, price } = product
        return `
        <a href="product.html?id=${id}"class="product">
       
  <img src="${url}" alt="${name}"/>
  
  
  <div class="info">
  <h5 class="title">${name}</h5>
  <h5 class="price">${price} CFA</h5>
  </div>
  
  </a>
 `
      })
      .join('')
    result.innerHTML = products
  } catch (error) {
    result.innerHTML = `<h4>there wass an error</h4>`
  }
}

fetchProducts()

