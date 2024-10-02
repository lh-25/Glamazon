
// global variables 
const search = document.querySelector('#searchButton')
const input = document.querySelector('#textInput')
const resultsGrid = document.querySelector('.results-grid')

// function to get specific api info 
const getProductName = async (productName) => {
    let product = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${productName}`)
    productData = product.data
    // having an empty results grid so it clears for each search
    resultsGrid.innerHTML = ''

    if (productData.length > 0) {
        for (let i = 0; i < productData.length; i++) {
            // Created a div to go into the html with all the product info 
            const productDiv = document.createElement('div')
            productDiv.classList.add('result-item')

            // used ternary statements so if something isnt avalible alt text will appear
            const productName = productData[i].name ? productData[i].name : 'Product name not avalible'
            const brandName = productData[i].brand ? productData[i].brand : 'Brand not avaliable'
            const productTags = productData[i].tag_list.length > 0 ?
                productData[i].tag_list.join(",") : 'No tags available'
            const productImage = productData[i].api_featured_image ? productData[i].api_featured_image : 'Product image not avalible'
            const productDescription = productData[i].description ? productData[i].description : 'Description not avalible'
            // used map() inorder to get each color option in the array or color objects and join() to convert to a single string
            const productColors = productData[i].product_colors.length > 0 ?
                productData[i].product_colors.map(color => color.colour_name).join(",") : 'Colors not available'

            const initialInfo = `<img src="${productImage}" alt="${productName}">
        <h3> ${productName}</h3> <p>${brandName}</p>`
            const extraInfo = `<div class="extra-info"> <p>${productTags}</p>  <p><strong>Description:</strong> ${productDescription}</p> <p>${productColors}</p> </div>`
            productDiv.innerHTML = initialInfo + extraInfo
            resultsGrid.appendChild(productDiv)
        }
    }
}
const getBrand = async (brandName) => {
    let brand = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`)

    const brandData = brand.data
    resultsGrid.innerHTML = " "
    if (brandData.length > 0) {
        for (let i = 0; i < brandData.length; i++) {
            // Created a div to go into the html with all the product info 
            const productDiv = document.createElement('div')
            productDiv.classList.add('result-item')

            // used ternary statements so if something isnt avalible alt text will appear
            const productName = brandData[i].name ? brandData[i].name : 'Product name not avalible'
            const brandName = brandData[i].brand ? brandData[i].brand : 'Brand not avaliable'
            const productTags = brandData[i].tag_list.length > 0 ?
                brandData[i].tag_list.join(",") : 'No tags available'
            const productImage = brandData[i].api_featured_image ? brandData[i].api_featured_image : 'Product image not avalible'
            const productDescription = brandData[i].description ? brandData[i].description : 'Description not avalible'
            // used map() inorder to get each color option in the array or color objects and join() to convert to a single string
            const productColors = brandData[i].product_colors.length > 0 ?
                brandData[i].product_colors.map(color => color.colour_name).join(",") : 'Colors not available'

            const initialInfo = `<img src="${productImage}" alt="${productName}">
            <h3> ${productName}</h3> <p>${brandName}</p>`

            const extraInfo = `<div class="extra-info"> <p>${productTags}</p>  <p><strong>Description:</strong> ${productDescription}</p> <p>${productColors}</p> </div>`

            productDiv.innerHTML = initialInfo + extraInfo

            resultsGrid.appendChild(productDiv)
        }
    }
}
search.addEventListener('click', () => {
    getProductName(input.value)

})

document.addEventListener("DOMContentLoaded", () => {
    const brandButton = document.querySelectorAll('.brandList li')
    brandButton.forEach(button => {
        button.addEventListener('click', (event) => {
            const brandName = event.target.textContent.toLowerCase()
            getBrand(brandName)
        })
    })
})
//added keypress as an event listener so you dont have to press the search bar all the time 

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getProductName(input.value)
    }
})