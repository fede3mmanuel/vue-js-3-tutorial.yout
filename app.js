const app = Vue.createApp({
    data() {
        return {
            url: 'https://google.com',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true, id: 0 },
                {title: 'the way of kings', author: 'brandom sanderson', img: 'assets/2.jpg', isFav: false, id: 1 },
                {title: 'the final empire', author: 'brandom sanderson', img: 'assets/3.jpg', isFav: true, id: 2 },
            ],
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(idOfTheBook) {
            this.$data.books[idOfTheBook].isFav = !this.$data.books[idOfTheBook].isFav;
        }
    }
})

app.mount('#app')