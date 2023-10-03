let app = new Vue({
    el: '#app',
    data: {
        priceMax: 50,
        products: null,
        cart: [],
        style: {
            label: ['font-weight-bold', 'mr-2'],
            InputWidth: 60,
            sliderStatus: false,
        },
    },
    mounted: function() {
        fetch('https://hplussport.com/api/products/order/price')
        .then(Response => Response.json())
        .then(data => {
            this.products = data;
        })
    },

    computed: {
        sliderState: function(){
            return  this.sliderStatus ? 'd-flex' : 'd-none';
        }
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