let app = new Vue({
    el: '#app',
    data: {
        priceMax: 50,
        products: null,
        cart: [],
        style: {
            label: ['font-weight-bold', 'mr-2'],
        },
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