const db = require('../util/database');


module.exports = class journal {
  constructor(id, title, author ,imgurl, des, category,date,pretext){
    this.id = id;
    this.title = title;
    this.author = author;
    this.category = category;
    this.imgurl = imgurl;
    this.des = des;
    this.date = date
    this.pretext = pretext;
  }

  save() {
    return db.execute(
      'INSERT INTO articles (title, date, imgurl, des,category,author,pretext) VALUES (?, ?, ?, ?,?,?,?)',
      [this.title, this.date, this.imgurl, this.des,this.category,this.author,this.pretext]
    );
  }


  static fetchAll() {
    return db.execute('SELECT * FROM articles');
  }

  static findById(id) {
    return db.execute('SELECT * FROM articles WHERE articles.id = ?', [id]);
  }
  static findBycat(cate) {
    return db.execute('SELECT * FROM articles WHERE articles.category = ?', [cate]);
  }
};
