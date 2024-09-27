
const search = document.querySelector('#searchButton')
const input = document.querySelector('#textInput')
const resultsGrid = document.querySelector('.results-grid')

const getProductName = async (productName) => {
    let product = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${productName}`)
     productData = product.data 
     resultsGrid.innerHTML = ''

    if (productData.length > 0) {
    for (let i = 0; i < productData.length; i++) {
        const productDiv = document.createElement('div')
        productDiv.classList.add('result-item')
        const productName = productData[i].name
        const brandName = productData[i].brand
        const productTags = productData[i].tag_list.length > 0 ?
        productData[i].tag_list.join(",") : 'No tags available'
        const productImage = productData[i].api_featured_image
        const productDescription = productData[i].description
        const productColors = productData[i].product_colors.length > 0 ?
        productData[i].product_colors.map(color => color.colour_name).join(",") : 'No colors available'

        productDiv.innerHTML = `<img src="${productImage}" alt="${productName}">
        <h3> ${productName}</h3> <p>${brandName}</p> <p>${productTags}</p>  <p><strong>Description:</strong> ${productDescription}</p>  <p>${productColors}</p>`
        resultsGrid.appendChild(productDiv)
    }
    } 
}

search.addEventListener('click', () => {
     getProductName(input.value)

})