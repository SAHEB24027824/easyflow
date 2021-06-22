const router=require("express").Router();
const preparePnf=require("./controller/postPnf");
const getActivationJson=require('./controller/getActivationJson');
const postPNFData=require("./controller/pnfPOST")
const postActivationData=require("./controller/postActivation");


router.get("/getPNF/:sessionId/:flowType", preparePnf);

router.get("/getActivation/:sessionId/:flowType", getActivationJson);

router.post('/postPNF/:sessionId/:flowType',postPNFData)

router.post('/postActivationData/:sessionId/:flowType',postActivationData)


module.exports=router;