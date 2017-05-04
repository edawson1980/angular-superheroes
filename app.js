var superheroList = [
  {name: "Spiderman", number: "800-WEB-CRWL", group: "Marvel", img: "http://www.writeups.org/wp-content/uploads/Spider-Man-Marvel-Comics-Peter-Parker-h0011.jpg"},
  {name: "The Incredible Hulk", number: "800-HLK-SMSH", group: "Marvel", img: "http://www.writeups.org/wp-content/uploads/Savage-Hulk-Marvel-Comics-iconic-h6.jpg"},
  {name: "Wonder Woman", number: "800-GRL-WNDR", group: "DC", img: "https://www.wired.com/images_blogs/underwire/2013/07/wonder-woman.jpg"},
  {name: "Storm", number: "800-DRK-CLDS", group: "Marvel", img: "http://www.writeups.org/wp-content/uploads/Storm-Marvel-Comics-X-Men-Ororo-Munroe-h.jpg"},
  {name: "Iron Man", number: "800-STA-RKME", group: "Marvel", img: "https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F2%2F8%2F211068%2F1880%2F500x775x26e91ac9582f8ab5f90131ba.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r"},
  {name: "Black Panther", number: "800-TCH-ALLA", group: "Marvel", img: "https://cdn.bleedingcool.net/wp-content/uploads/2016/04/0110-600x566.jpg"},
  {name: "Catwoman", number: "800-NO-DAMSL", group: "DC", img: "https://s-media-cache-ak0.pinimg.com/originals/90/0e/1f/900e1f5f35fd9641646c65222611fe8c.jpg"},
  {name: "Batman", number: "800-DRK-NITE", group: "DC", img: "https://comicsauthorityblog.files.wordpress.com/2013/10/arkham_asylum_entrance.jpg"},
  {name: "TaNk GiRl",number: "800-WTR-NPWR",group: "No Masters",img: "https://vignette4.wikia.nocookie.net/tankgirl/images/0/0a/Hewl-Tanky.jpg/revision/latest?cb=20121002235926"}
];


angular
  .module('superContacts', [])
  .controller('SuperConsController', [
    SuperConsFunction
  ]);

  function SuperConsFunction () {
    this.supes = superheroList;
  }
