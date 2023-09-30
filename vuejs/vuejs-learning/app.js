let app = new Vue({
    el: '#app',
    data: {
        priceMax: 50,
        products: null
    },
    mounted: function() {
        fetch('https://hplussport.com/api/products/order/price')
        .then(Response => Response.json())
        .then(data => {
            this.products = data;
        })
    },
});