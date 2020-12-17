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
    selected:"",
  },
  methods: {
    albumGenre : function () {
      console.log(this.selected);
      
    },
  },
  created: function (){
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(function (result) {
        let albumSpecs = result.data.response;
        root.albums = albumSpecs;
        console.log(root.albums);

      });
  }
})
