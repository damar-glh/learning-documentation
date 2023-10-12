Vue.component('price', {
    data: function(){
        return {}
    },
    props: {
        value: Number,
        prefix: {
            type: String,
            default: 'Rp',
        },
        precision: {
            type: Number,
            default: 2,
        }
    },
    template: '<span>{{ this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }}</span>'
});

Vue.component('product-list', {
    props: ['products', 'maximum'],
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
    },
    template: `
    <transition-group name="fade" tag="div" @before-Enter="before" @enter="enter" @leave="leave" >
            <div class="d-none " v-for="(item, index) in products" :key="item.id" :data-index="index">
                <div class="container">
                    <div v-if="item.price <= Number(maximum)" class="mt-3">
                        <div class="col-1 d-flex">
                            <button class="btn btn-success text-white" v-on:click="addItem(item)">+</button>
                        </div>
                        <div class="col-sm-4">
                            <!-- <img v-bind="{
                                :class: "img-fluid",
                                :src="item.image",
                                :alt="item.name" 
                            }"> -->
                            <img :src="item.image" :alt="item.name" class="img-fluid d-block">
                            <!-- <img class="img-fluid" v-bind:src="item.image" v-bind:alt="item.name"> -->
                            <!-- <img :class="img-fluid" :src="item.image" :alt="item.name"> // bisa juga seperti ini -->      
                        </div>
                        <div class="col">
                            <h2 class="text-info">{{ item.name }}</h2>
                            <p class="mb-0 text-justify">{{ item.description }}</p>
                            <div class="h5 float-start">
                                <price :value="Number(item.price)" :prefix="'$'" :precision="3"></price>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    `,
});

let app = new Vue({
    el: '#app',
    data: {
        maximum : 50,
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