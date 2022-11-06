const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
            limit: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        removeToCart(number) {
            if (number > 0) 
            this.cart -= 1 
            
            else 
            this.limit = false  
        },

        updateImage(variantImage) {
            this.image = variantImage 
        },
    }
})
