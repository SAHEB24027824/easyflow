let Device = {
    "Id": "1",
    "Type": "4GE",
    "Make": "Apple",
    "Model": "Apple iPhone 11",
    "ProductSku": "MWKM2LL/A",
    "DisplayName": "Apple iPhone 11 256GB Product RED (Verizon)",
    "SystemName": "Apple iPhone 11 256GB Product RED (Verizon)",
    "Action": "ADD",
    "Quantity": 1,
    "PlanFeatureSetup": "CONFIGURE",
    "Price": {
        "Amount": "80",
        "MSRP": "80",
        "CurrencyType": "USD",
        "EstimatedTax": "00.00",
        "Total": "80.00"
    },
    "DeviceSerialNumber": "",
    "DevicePaymentOption": "DPP",
    "Promotions": {
        "Promotion": {
            "PromoCode": null,
            "PromoDesc": null,
            "PromoValue": 0.0,
            "PromoPercentage": null
        }
    },
    "CarrierData": {
        "ATT": {
            "DevicePaymentPlan": {
                "Code": null,
                "Name": null,
                "Term": 0,
                "MinFinanceAmt": 0.0,
                "Price": 0.0,
                "MandatoryDownPayment": 0.0,
                "VoluntaryDownPayment": 0.0
            },
            "Fees": {
                "DeviceAccessCode": null,
                "DeviceAccessCodeName": null,
                "ActivationFee": null,
                "UpgradeFee": null,
                "DeviceAccessCharge": null
            }
        },
        "VZW": {
            "DevicePaymentPlan": {
                "InstallmentContractNum": null,
                "TotalAmountFinanced": "50.00",
                "FirstInstallmentAmount": "2.16",
                "InstallmentContractTerm": "24",
                "RequiredDownPaymentAmount": "0.00",
                "MonthlyInstallmentPayment": "2.08",
                "AgentDownPaymentAmount": "0.00",
                "TotalDownPaymentAmount": "0.00"
            },
            "NewDeviceType": "4GE",
            "Contract": {
                "Id": "CNT=0:CNTID=0048",
                "Description": "0 Month"
            },
            "Fees": {
                "ActivationFee": null,
                "UpgradeFee": null,
                "LineAccessFee": null
            }
        }
    }
}
let Sim = {
    "Id": "2",
    "ProductSku": "BULKSIM-TRI-A",
    "DisplayName": "Nano SIM for iPhone",
    "SystemName": "Nano SIM for iPhone",
    "Action": "ADD",
    "Quantity": 1,
    "Price": {
        "Amount": "0.00",
        "CurrencyType": "USD",
        "EstimatedTax": "0.00",
        "Total": "0.00",
        "PaymentType": "OneTime"
    },
    "DeviceSerialNumber": "",
    "CarrierData": {}
}



let PlanFeaturesStartData=[];

function preapareData(arrayData){
    
    if(Array.isArray(arrayData)){
        arrayData.forEach(order=>{
            if (order && order.AccountLines) {
                order.AccountLines.forEach(line => {
                        line.Line.Device=Device
                        line.Line.Sim = Sim
                })
            }
            PlanFeaturesStartData.push(order);
        })

        return PlanFeaturesStartData;
    }
}


function postPNF(data) {
    console.log(data)

    let PlanFeaturesStartData=preapareData(data.CarrierData);
    console.log()

    // data.CarrierData=
    let resData={
        "PlanFeaturesStartData":PlanFeaturesStartData,
        "ReferenceIdentifier": null
    }
     PlanFeaturesStartData=[];
    return  resData;
}

module.exports=postPNF;




$('#model-ok-btn').click(function(){
    $('#modalid').modal('hide'); 
})


