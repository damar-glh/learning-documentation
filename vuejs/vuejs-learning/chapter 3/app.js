let app = new Vue({
    el: '#app',
    data: {
        priceMax: 50,
        products: null,
        cart: [],
        style: {
            label: ['font-weight-bold', 'mr-2'],
            InputWidth: 80,
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

    filters: {
        currencyFormat: function(value) {
            return 'Rp' + Number.parseFloat(value).toFixed(2);
        },
    },
    
    computed: {
        sliderState: function(){
            return  this.sliderStatus ? 'd-flex' : 'd-none';
        }
    },

    methods: {
        before: function(el){
            el.className = 'd-none';
        },
        enter: function(el){
            let delay = el.dataset.index * 100;
            setTimeout(function(){
                el.className = 'animated fadeInRight';
            }, delay);
        },
        leave: function(el){
            let delay = el.dataset.index * 100;
            setTimeout(function(){
                el.className = 'animated fadeOutRight';
            }, delay);
        },
        addItem: function(product) {
            let productIndex;
            let productExist = this.cart.filter(function(item, index) {
                if (item.product.id == Number(product.id)) {
                    productIndex = index;
                    return true;
                } else {
                    return false;
                }
            });
            if (productExist.length) {
                this.cart[productIndex].qty++;
            } else {
                this.cart.push({ product: product, qty: 1 });
            }
        },
        
        reduceItem: function(product){
            let productIndex = -1;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].product.id === product.id) {
                    productIndex = i;
                    break;
                }
            }
            if (productIndex !== -1) {
                if (this.cart[productIndex].qty > 1) {
                    this.cart[productIndex].qty--;
                } else {
                    this.cart.splice(productIndex, 1);
                }
            }
        }
    },
});