# Glamazon
## Overview
This project is a simple webpage that allows users to search for makeup products using a Makeup API. The webpage will return information about the searched products including product name, brand name, tags like if the product is vegan or aluminum-free, an image of the product, and a link to where to buy the product. The interface will be a fun Bratz-inspired theme and will have a gradient background and match the aesthetic of the Bratz fashion Blog but for makeup

## Features
**Search for Products**: Users can search for makeup products using the product name
### Display Information 
- **Name** of product
- **Brand** that manufactures the product
- **Tags** associated with the product (e.g., cruelty-free, vegan)
- **Image** of the product
- **Link to purchase** the product online

### Responsive Design
- The page will be responsive and adapt to different screen sizes
### Bratz-Themed UI
- Bratz-inspired color palette (pinks and purples)

## Technologies Used 
- **HTML**
- **CSS**
- **JavaScript**
- **Axios**
- [**Makeup API**](https://makeup-api.herokuapp.com/)

## HTML Product Display
```
<div class="results">
         <img id="productImage" src="" alt="Product Image">
         <h3 id="product-type"></h3>
        <p id="brand"></p>
        <p id="product-tag"></p>
        <a id="purchase-link" href="" target="_blank">Buy Here</a>
    </div>        
```

## API Request
```
const getProductName = async (productName) => {
    let product = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${productName}`)
     productData = product.data 
```

## CSS WireFrame/Design Mockup
![Glamazon-Page](https://github.com/user-attachments/assets/48a72c04-2bab-4929-b2c5-15133d472fa2)




