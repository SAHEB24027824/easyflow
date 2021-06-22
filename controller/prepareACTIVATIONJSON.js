
    let Fulfillment= {
        "Store": {
            "Address": {
                "AddressLine1": "444 Main St Dr",
                "AddressLine2": "Suite 300",
                "City": "SAN ANTONIO",
                "State": "TX",
                "Zip": "78216"
            },
            "PhoneNumber": null
        },
        "Shipping": {
            "Name": null,
            "ShippingPrice": 0.0,
            "Carrier": null,
            "CarrierTracking": null,
            "ShippingAddress": {
                "AddressLine1": "43 W WHEELOCK ST APT 305",
                "AddressLine2": null,
                "City": "HANOVER",
                "State": "NH",
                "Zip": "03755"
            },
            "CarrierData": {
                "ATT": {
                    "Shipping": {
                        "choiceCode": null,
                        "customizationCode": null,
                        "usoc": null
                    }
                }
            }
        }
    }
    let Payment= {
        "OneTimeCreditCardPayment": {
            "Amount": 0.0,
            "CreditCardNumber": null,
            "CreditCardLast4Numbers": null,
            "CreditCardType": null,
            "ExpirationMonthYear": null,
            "CVV2": null,
            "FirstName": null,
            "MiddleName": null,
            "LastName": null,
            "PaymentBillingAddress": {
                "AddressLine1": "13811 MORNINGBLUFF DR",
                "AddressLine2": "Suite 300",
                "City": "SAN ANTONIO",
                "State": "TX",
                "Zip": "78216"
            },
            "AuthorizationCode": null,
            "AuthorizationDate": "0001-01-01T00:00:00",
            "AuthorizationExpirationDate": "0001-01-01T00:00:00"
        }
    }
    let NonCarrierFeatureList= {
        "Lines": []
    }
function prepareActJSON(data,sessionId) {
    let resData={
        "SessionId": sessionId,
        "OrderActivationInfo": {
        "OrderDetails":data.OrderDetails,
        "AccountDetails":data.AccountDetails,
        "AccountLines":data.AccountLines,
        "Fulfillment":Fulfillment,
        "Payment":Payment,
        "NonCarrierFeatureList":NonCarrierFeatureList
        },
        "RequestIdentifier": null,
        "ReferenceIdentifier": null
    }
    return resData;
}

module.exports=prepareActJSON;