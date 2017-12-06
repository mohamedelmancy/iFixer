var express = require('express');
var router = express.Router();

var mysql = require("mysql");
var DBconn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "11111111",
    database :"iFix"
});
DBconn.connect(function (err) {
    if(err){console.log("error not connectd");}
    else {
        console.log("Ok Connected");

    }
});
var brand,Li_1,h2,p1,Li_2,p2,span1,span2,Li_3,p3,p4,img;
DBconn.query("select Brand,Li,Heading,P,ImgUrl from header where id=?",1,function (err,result) {
    if (err)
    {
      throw  err;
    }
    else
    {
        brand=result[0].Brand;
        img=result[0].ImgUrl;
        Li_1=result[0].Li;
        h2=result[0].Heading;
        p1=result[0].P;
        console.log(brand,Li_1,h2,p1,img)
    }
});
DBconn.query("select Li,P,Span from header where id=?",2,function (err,result) {
    if (err)
    {
        throw  err;
    }
    else
    {
        Li_2=result[0].Li;
        p2=result[0].P;
        span1=result[0].Span;
        console.log(Li_2,p2,span1)
    }
});
DBconn.query("select Li,P,Span from header where id=?",3,function (err,result) {
    if (err)
    {
        throw  err;
    }
    else
    {
        Li_3=result[0].Li;
        p3=result[0].P;
        span2=result[0].Span;
        console.log(Li_3,p3,span2)
    }
});
DBconn.query("select P from header where id=?",4,function (err,result) {
    if (err)
    {
        throw  err;
    }
    else
    {
        p4=result[0].P;
        console.log(p4)
    }
});
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
      title:brand,
      nav1:Li_1,
      firstp:p1,
      head:h2,
      nav2:Li_2,
      sep:p2,
      sp1:span1,
      nav3:Li_3,
      thp:p3,
      sp2:span2,
      fp:p4,
      myimg:img

  });
});

module.exports = router;