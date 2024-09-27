
const search = document.querySelector("#searchButton")
const input = document.querySelector("#textInput")
const brandType= document.querySelector("#brand")
const brandImg = document.querySelector("#brandImage")
const productType = document.querySelector("#product-type")
const productImg = document.querySelector("#productImage")
const category = document.querySelector("#product-category")
const tag = document.querySelector("#product-tag")
productData = ''
brandData = ''

const getProductName = async (productName) => {
    let product = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${productName}`)
     productData = product.data 
     console.log(product)
    if (productData.length > 0) {
    for (let i = 0; i < productData.length; i++) {
        let item = document.createElement('p')
        item.innerHTML =`Product Name: ${productData[i].name}`
        productType.appendChild(item)
    }
    } 
}

const getBrandName = async (brandName) => {
    let brand = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`)
    brandData = brand.data
    console.log(brand)
}

search.addEventListener('click', () => {
     if (getProductInfo()) {
        getProductName(input.value)
     } else {
    getBrandName(input.value)}
})