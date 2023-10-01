let app = new Vue({
    el: '#app',
    imgClass: 'img-fluid',
    data: {
        priceMax: 50,
        products: null,
        cart: [],
    },
    mounted: function() {
        fetch('https://hplussport.com/api/products/order/price')
        .then(Response => Response.json())
        .then(data => {
            this.products = data;
        })
    },
    methods: {
        addItem: function(product){
            this.cart.push(product);
        },
        reduceItem: function(product){
            this.cart.pop(product);
        }
    },
});