Vue.component('price', {
    data: function(){
        return {
            prefix: 'Rp',
            value: 34.09,
            precision: 2,
        }
    },
    template: '<span>{{ this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }}</span>'
});

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
        },
        cartTotal: function(){
            let sum = 0;
            for(let key in this.cart){
                sum = sum + (this.cart[key].product.price * this.cart[key].qty);
            }
            return sum;
        },
        cartQty: function(){
            let qty = 0;
            for(let key in this.cart){
                qty = qty + this.cart[key].qty;
            }
            return qty;
        },
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
        
        deleteItem: function(key){
            if(this.cart[key].qty > 1){
                this.cart[key].qty--;
            } else {
                this.cart.splice(key, 1);
            }
        }
    },
});