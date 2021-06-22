const fetch = require('node-fetch');
const config =require('../config');


function postPNFData(req,res){
    try {
    let flow;
    let sessionId=req.params.sessionId;
    let flowType=req.params.flowType;
    if(flowType){
        if(flowType == config.flowType){
          flow = config.retail
        }
        else{
          flow = config.ecom;
        }
      }

        if(!sessionId || !flow) return res.status(400).send("Please send sessionID and Token as URL params"); 
        if(req.headers && !req.headers.authorization)return res.status(401).send("Please send the token"); 
        fetch(`${flow}/api/planfeaturesstart?SessionId=${sessionId}`,{
            method:'POST',
            headers: { 
                'Content-Type': 'application/json',
                "Authorization":`${req.headers.authorization}`
             },
            body:JSON.stringify(req.body.data)
        })
        .then(res => res.json())
        .then(json =>{
            if(json){
                 res.status(200).send({Success:true,message:json});
            }
            else{
                res.status(400).send({Success:false,message:"Bad Request"}); 
            }
        },error=>{
            res.status(400).send("Bad Request"); 
        });
    } catch (error) {
        res.status(500).send({Success:false,message:error.message});
    }
}





module.exports = postPNFData;
