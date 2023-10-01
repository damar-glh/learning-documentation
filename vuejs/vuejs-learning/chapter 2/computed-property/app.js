let app = new Vue({
    el: '#app',
    data: {
        slugText: 'The Quick #(*#&@ Brown 29',
    },
    computed: {
        // jika now computed properties now maka nilainya tidak dinamis dan 
        // nilainya tidak berubah/tidak dinamis, 
        // datanya tidak diubah terus menerus
        // now: function() {
        //     const date = new Date();
        //     return (
        //         String(date.getSeconds()) +
        //         String(date.getMinutes()) +
        //         String(date.getHours())
        //     );
        // },
        slugetize: function() {
            return this.slugText
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-')+ '-' + this.now();
        },
    },
    methods: {
        // sedangkan now di methods nilainya dinamis 
        // dan nilainya berubah terus menerus 
        // datanya disimpan dan diubah terus menerus
        now: function() {
            const date = new Date();
            return (
                String(date.getSeconds()) +
                String(date.getMinutes()) +
                String(date.getHours())
            );
        },
    },
})