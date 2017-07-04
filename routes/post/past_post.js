const express = require('express');
const router = express.Router();
const async = require('async');
const jwt = require('../module/jwt.js');
const db = require('../module/pool.js');

/*
다음화 보기
*/

router.post('/', async(req, res, next) => {
    const ID = jwt.verify(req.headers.authorization);
    const postId = req.body.post_id;

    //토큰 검증이 성공할 경우
    if(ID != -1) {

    //토큰 검증이 실패할 경우
    }else {
        res.status(401).send({
            message : "access denied"
        });
    }
});

module.exports = router;
