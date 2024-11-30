var express = require('express');
var router = express.Router();

router.get('/book', function(req, res, next) {// /book 하면 아래 book.ejs 가져옴
  res.render('index', { title: '도서검색', pageName:'kakao/book.ejs' });
});

//도서정보 페이지
router.get('/book/info', function(req, res, next) {
  const title=req.query.title;
  const thumbnail=req.query.thumbnail;
  const isbn=req.query.isbn;
  const price=req.query.price;
  const authors=req.query.authors;
  const publisher=req.query.publisher;
  const contents=req.query.contents;
  const info={title,thumbnail ,isbn ,price ,authors ,publisher ,contents };
  res.render('index', { title: '도서정보', pageName:'kakao/info.ejs', info });
});

// 지역검색
router.get('/local', function(req, res){
  res.render('index', { title: '지역검색', pageName:'kakao/local.ejs' });
})

// 블로그 검색
router.get('/blog', function(req, res){
  res.render('index', { title: '블로그검색', pageName:'kakao/blog.ejs' });
})

module.exports = router;