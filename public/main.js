//================Set and get flow type====================//
$(document).ready(function(){
    getSetFlowType();

    $('.clear').click(function(){
        window.localStorage.removeItem('flowType');
        window.localStorage.removeItem('sid');
        window.localStorage.removeItem('token');
        getSetFlowType();

        let sessionId=$('#sessionId')
        let token =$('#token');
        sessionId.val('');
        token.val('');
        editor.setValue({});
    })
})

function getSetFlowType(){
    let flowType = $('.flowType');
    let appInit = $('.appInit');
    appInit.hide();
    if(window.localStorage.getItem('flowType')){
        let value = window.localStorage.getItem('flowType');
        flowType.val(value)
        appInit.show();
    }
    else{
        flowType.val('');
    }

    flowType.change(function(){
        let value = $(this).val();
        window.localStorage.setItem('flowType',value);
        appInit.show('slow');
        flowType = value;
    })
}



//================Set and get flow type END====================//




let editor;
let pnfPOSTdata;
let activationPOSTdata;
function editorInit(){
     editor = ace.edit("pnf-editor");
    editor.setTheme("ace/theme/github");
    editor.session.setMode("ace/mode/json");
    editor.setOptions({
        fontSize: `12pt`
    })
}
editorInit();



let sessionID=document.querySelector("#sessionId");
let token=document.querySelector("#token");
let pnfGetBTN = document.querySelector("#pnfGetBTN");
let pnfPOSTBTN = document.querySelector("#pnfPOSTBTN");
let getActivation =document.querySelector("#getActivation");
let postActivation = document.querySelector("#postActivation");
let text1=document.querySelector("#text1");
let form=document.querySelector(".form");
let PNFLink=document.querySelector("#PNFLink");
let VZWTCLink=document.querySelector("#VZWTCLink");
let ACTIVATIONLink=document.querySelector("#ACTIVATIONLink");
let ACTIVATIONLink1=document.querySelector("#ACTIVATIONLink1");
let ACTIVATIONLink2=document.querySelector("#ACTIVATIONLink2");
let flowType = document.querySelector('.flowType');

pnfPOSTBTN.style.display="none";
getActivation.style.display="none";
pnfPOSTBTN.style.display="none";
postActivation.style.display="none";
text1.style.display="none";
PNFLink.style.display="none";
ACTIVATIONLink.style.display="none";
ACTIVATIONLink1.style.display="none";
ACTIVATIONLink2.style.display="none";
VZWTCLink.style.display="none";


if(window.localStorage.getItem("sid") || window.localStorage.getItem("token")){
    sessionID.value=window.localStorage.getItem("sid");
    token.value=window.localStorage.getItem("token");
}

    sessionID.addEventListener("keyup",(e)=>{
        window.localStorage.setItem("sid",sessionID.value);
    })
    token.addEventListener("keyup",()=>{
        window.localStorage.setItem("token",token.value);
    })



pnfGetBTN.addEventListener("click",GET_PNF_DATA);
pnfPOSTBTN.addEventListener("click",POST_PNF_DATA);
getActivation.addEventListener("click",GET_ACTIVATION_DATA);
postActivation.addEventListener("click",POST_ACTIVATION_DATA);

let baseURL="http:localhost:2000";

function GET_PNF_DATA(e){
    e.target.firstChild.classList.remove("displayNone");
    try {
        fetch(`${baseURL}/getPNF/${sessionID.value}/${flowType.value}`,{
            method:'GET',
            headers: { 
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${token.value}`
             },
        })
        .then(res => res.json())
        .then(json =>{
            if(json){
                e.target.firstChild.classList.add("displayNone");
                pnfPOSTBTN.style.display="block";
                pnfPOSTdata=json;
                editor.setValue(JSON.stringify(json, null, "\t"));
            }

        },error=>{
            e.target.firstChild.classList.add("displayNone");
            editor.setValue(JSON.stringify(error.message, null, "\t"));
        })
    } catch (error) {
        e.target.firstChild.classList.add("displayNone");
        editor.setValue(JSON.stringify(error.message, null, "\t"));
    }

}


function POST_PNF_DATA(e){
    e.target.firstChild.classList.remove("displayNone");
    pnfPOSTdata = JSON.parse(editor.getValue());
    try {
        fetch(`${baseURL}/postPNF/${sessionID.value}/${flowType.value}`,{
            method:'POST',
            headers: { 
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${token.value}`
             },
             body:JSON.stringify({data:pnfPOSTdata})
        })
        .then(res => res.json())
        .then(json =>{
            if(json){
                e.target.firstChild.classList.add("displayNone");
                getActivation.style.display="block";
                text1.style.display="inherit";
                PNFLink.style.display="inherit";
                VZWTCLink.style.display="inherit";
                editor.setValue(JSON.stringify(json, null, "\t"));
            }

        },error=>{
            e.target.firstChild.classList.add("displayNone");
            editor.setValue(JSON.stringify(error.message, null, "\t"));
        });
    } catch (error) {
        e.target.firstChild.classList.add("displayNone");
        editor.setValue(JSON.stringify(error.message, null, "\t"));
    }

}


function GET_ACTIVATION_DATA(e){
    e.target.firstChild.classList.remove("displayNone");
    try {
        fetch(`${baseURL}/getActivation/${sessionID.value}/${flowType.value}`,{
            method:'GET',
            headers: { 
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${token.value}`
             },
        })
        .then(res => res.json())
        .then(json =>{
            if(json){
                e.target.firstChild.classList.add("displayNone");
                postActivation.style.display="block";
                activationPOSTdata=json;
                createFormForSKUANDICCID(activationPOSTdata.OrderActivationInfo.AccountLines.length);

                editor.setValue(JSON.stringify(json, null, "\t"));
            }

        },error=>{
            e.target.firstChild.classList.add("displayNone");
            editor.setValue(JSON.stringify(error.message, null, "\t"));
        });
    } catch (error) {
        e.target.firstChild.classList.add("displayNone");
        editor.setValue(JSON.stringify(error.message, null, "\t"));
    }

}



function POST_ACTIVATION_DATA(e){
    e.target.firstChild.classList.remove("displayNone");
    activationPOSTdata = JSON.parse(editor.getValue());
    try {
        fetch(`${baseURL}/postActivationData/${sessionID.value}/${flowType.value}`,{
            method:'POST',
            headers: { 
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${token.value}`
             },
             body:JSON.stringify({data:activationPOSTdata})
        })
        .then(res => res.json())
        .then(json =>{
            if(json){
                e.target.firstChild.classList.add("displayNone");
                ACTIVATIONLink.style.display="inherit";
                ACTIVATIONLink1.style.display="inherit";
                ACTIVATIONLink2.style.display="inherit";
                editor.setValue(JSON.stringify(json, null, "\t"));
            }

        },error=>{
            e.target.firstChild.classList.add("displayNone");
            editor.setValue(JSON.stringify(error.message, null, "\t"));
        });
    } catch (error) {
        e.target.firstChild.classList.add("displayNone");
        editor.setValue(JSON.stringify(error.message, null, "\t"));
    }

}

function createFormForSKUANDICCID(lineCount){
    form.innerHTML="";
    for(let i=1;i<=lineCount ; i++){
    let div=document.createElement('div');
    div.className="input-group mb-3";
    div.id=i;
    let device=document.createElement('input');
    device.type="text";
    device.id=i;
    device.name="device";
    device.className="form-control";
    device.placeholder=`${i} - Device`;
    let iccid=document.createElement('input');
    iccid.type="text";
    iccid.className="form-control";
    iccid.name="iccid";
    iccid.id=i;
    iccid.placeholder=`${i} - ICCID`;
    div.appendChild(device);
    div.appendChild(iccid);
    form.appendChild(div);
    }
}

form.addEventListener('keyup',(e)=>{
    if(activationPOSTdata.OrderActivationInfo.AccountLines){
        activationPOSTdata.OrderActivationInfo.AccountLines.forEach(line=>{
           if(line && line.Line && line.Line.Id){
               if(e.target.id == line.Line.Id){
                  if(e.target.name == "device"){
                    line.Line.Device.DeviceSerialNumber=e.target.value;
                  }
                  if(e.target.name == "iccid"){
                    line.Line.Sim.DeviceSerialNumber=e.target.value
                  } 
               }
           }
        })
    }
    editor.setValue(JSON.stringify(activationPOSTdata, null, "\t"));

})


function openLink(flow){
    if(sessionID && sessionID.value){
    let id=sessionID.value;
    let setflow;
    let param='';
    if(flow == "PREQUAL"){
        setflow="PREQUAL";
    }
    if(flow == "PLANSFEATURES"){
        setflow="PLANSFEATURES";
    }
    if(flow == "VZWTC"){
        setflow="VZWTC";
    }
    if(flow == "ACTIVATION"){
        setflow="ACTIVATION";
    }
    if(flow == "ACTIVATION-DAY1"){
        setflow="ACTIVATION";
        param="&dFillType=DAY1";

    }
    if(flow == "ACTIVATION-DAY2"){
        setflow="ACTIVATION";
        param="&dFillType=DAY2"
    }
    let url = `http://localhost:4200/?sessionID=${id}&journeyType=${setflow}&carrier=VERIZON${param}`;
    window.open(url, '_blank');
}
}


