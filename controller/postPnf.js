const fetch = require('node-fetch');
const postPNF=require('./preparePNFJSON');
const config =require('../config');

function preparePnf(req,res){
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
      console.log(flowType)
      console.log(flow)
        if(!sessionId || !flow) return res.status(400).send("Please send sessionID and Token as URL params"); 
        if(req.headers && !req.headers.authorization)return res.status(401).send("Please send the token"); 
        fetch(`${flow}/api/creditresult?SessionId=${sessionId}`,{
            headers: { 
                'Content-Type': 'application/json',
                "Authorization":`${req.headers.authorization}`
             },
        })
        .then(res => res.json())
        .then(json =>{
            if(json){
                let data= postPNF(json);
                 res.status(200).send(data);
            }
            else{
                res.status(400).send("Bad Request"); 
            }
        },error=>{
            res.status(400).send("Bad Request"); 
        });
    } catch (error) {
        res.status(500).send(error.message)
    }
}





module.exports = preparePnf;
