const express = require('express');
const router  = express.Router();



// @route  : GET api/posts/test
// @desc   : Tests post route
// @access : public
router.get('/test',function(req,res){
    res.json({msg:"User works"});
});

module.exports = router;
