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
      'INSERT INTO entry (title, date, imgurl, des,category,author,pretext) VALUES (?, ?, ?, ?,?,?,?)',
      [this.title, this.date, this.imgurl, this.des,this.category,this.author,this.pretext]
    );
  }


  static fetchAll() {
    return db.execute('SELECT * FROM entry');
  }

  static findById(id) {
    return db.execute('SELECT * FROM entry WHERE entry.id = ?', [id]);
  }
  static findBycat(cate) {
    return db.execute('SELECT * FROM entry WHERE entry.category = ?', [cate]);
  }
};
