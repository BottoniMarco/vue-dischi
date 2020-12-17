// {
//      "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
//      "title": "New Jersey",
//      "author": "Bon Jovi",
//      "genre": "Rock",
//      "year": "1988"
//  },
//

var root = new Vue({
  el: "#root",
  data: {
    albums:[],
    selected:"All",
    genres:[],
  },
  methods: {
    albumGenre : function () {
      this.albums.forEach((item, i) => {
        if (!this.genres.includes(item.genre)) {
          this.genres.push(item.genre);
        }
        console.log(this.genres);

      });

      console.log(this.selected);
    },
  },
  created: function (){
    const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(function (result) {
        let albumSpecs = result.data.response;
        self.albums = albumSpecs;
        console.log(self.albums);

      });
  }
})
