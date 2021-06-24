
let Fulfillment = {
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
let Payment = {
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
let NonCarrierFeatureList = {
    "Lines": []
}

function setActivationData(arrayData) {
    let activationArrayData = [];
    let orderDetaildObj = {};
    
    if (Array.isArray(arrayData)) {
        arrayData.forEach(order => {

            if (order.OrderDetails) {
                orderDetaildObj.OrderDetails = order.OrderDetails
            }
            if (order.AccountDetails) {
                orderDetaildObj.AccountDetails = order.AccountDetails
            }
            if (order.AccountLines) {
                orderDetaildObj.AccountLines = order.AccountLines
            }
            if (order.Fulfillment) {
                orderDetaildObj.Fulfillment = order.Fulfillment
            }
            if (order.Payment) {
                orderDetaildObj.Payment = order.Payment
            }

            activationArrayData.push(orderDetaildObj);
        })

        return activationArrayData;
    }
}



//===========================================
let datamain = {
    "SessionId": "eeac3859-f74e-437b-b321-647a0652104c-9943",
        "OrderActivationInfo": [
            {
        "OrderDetails": {
        "InternalOrderId": "1234567-DFDFDF-1212212",
        "CreatedDatetime": "2019-07-03T09:10:33+00:00",
        "SubmittedDatetime": "2019-07-03T09:10:33+00:00",
        "SubmittedSystem": "WA-MAGENTO-COSTCO",
        "Carrier": "VERIZON",
        "OrderType": "NEW",
        "NumberOfLines": 2,
        "FulfillmentType": "ONLINE",
        "MinimumOneBYODLine": false,
        "StoreId": "9999",
        "CarrierData": {
        "ATT": {
        "Rc1SalesCode": null,
        "DealerCode": null,
        "AffiliateOrderNumber": null,
        "CommonOrderId": null,
        "TransactionId": null
        },
        "VZW": {
        "OrderNum": "2030116",
        "ClusterInfo": "DEVEL",
        "Location": "P554201",
        "BillingSystem": "VE",
        "SalesForceId": "ENC",
        "OutletId": "000106449"
        },
        "TMO": {
        "ServiceTransactionId": null,
        "PartnerId": null,
        "SalesOrderId": null
        }
        },
        "OrderContactInfo": {
        "FirstName": "John",
        "MiddleName": "F",
        "LastName": "Doe",
        "EmailAddress": "sda@test.com",
        "PhoneNumber": "6092041480"
        },
        "DXP": {
        "SessionID": "eeac3859-f74e-437b-b321-647a0652104c-9943",
        "Token": null,
        "SubSessionID": "1",
        "RequestID": "eeac3859-f74e-437b-b321-647a0652104c-9943",
        "PFID": "eeac3859-f74e-437b-b321-647a0652104c-9977",
        "QualReturnURL": "http://www.wa.com/devicelisting",
        "ActivationReturnURL": "http://www.wa.com/actcomplete",
        "PlansFeaturesReturnURL": "http://www.wa.com/devicelisting",
        "QualReturnErrorURL": "http://www.wa.com/devicelisting",
        "PlansFeaturesReturnErrorURL": "http://www.wa.com/devicelisting",
        "ActivationReturnErrorURL": "http://www.wa.com/actcomplete",
        "PlanDetailsURL": "http://www.wirelessadvocates.com",
        "FeatureDetailsURL": "http://www.wirelessadvocates.com",
        "TCReturnURL": "http://www.wa.com/actcomplete",
        "TCReturnErrorURL": "http://www.wa.com/actcomplete",
        "WAFeaturesDetailsURL": null
        },
        "OrderStatus": {
        "Status": "AP",
        "Message": null
        },
        "MultiTypeProcessFirst": null
        },
        "AccountDetails": {
        "BillingAccountNumber": null,
        "PaymentArrangement": "Postpaid",
        "CustomerType": "CONSUMER",
        "AccountContactInfo": {
        "FirstName": "John",
        "MiddleName": "F",
        "LastName": "Doe",
        "EmailAddress": "sda@test.com",
        "PhoneNumber": "6092041480"
        },
        "ServiceAddress": {
        "AddressLine1": "3148 SAND HOLLER SE SE",
        "AddressLine2": null,
        "City": "DALE",
        "State": "TX",
        "Zip": "78616"
        },
        "BillingAddress": {
        "AddressLine1": null,
        "AddressLine2": null,
        "City": null,
        "State": null,
        "Zip": null
        },
        "Authentication": {
        "DOB": null,
        "Last4SSN": null,
        "SSN": null,
        "DrivingLicense": null,
        "DrivingLicenseState": null,
        "DrivingLicenseExpDate": null,
        "Passcode": null,
        "DocIdType": null,
        "DocIdNumber": null,
        "DocIdState": null,
        "DocIdExpDate": null
        },
        "CreditCheck": {
        "ApplicationNumber": "489924409",
        "CreditStatus": "AP",
        "ApplicationApprovalDate": null
        },
        "Language": "E",
        "SpokenLanguagePreference": null,
        "CarrierData": {
        "ATT": null,
        "VZW": {
        "BillingSubAccountNumber": null,
        "UniqueTransactionToken": null,
        "CreditCheck": {
        "CreditApprovalStatus": "AP",
        "SecurityDepositAmountForEdge": 0.0,
        "SecurityDepositAmountForZeroContract": 0.0,
        "SecurityDepositAmountForContract": 0.0,
        "EdgeIndicator": "Y",
        "PercentageOfVZWRequiredDownPaymentAmount": "0",
        "RequiredPaymentForEDGEUp": "N",
        "SpendingLimit": 4000.0,
        "LineLevelSpendingLimitAmount": 1500.0
        },
        "ExistingUsers": []
        },
        "TMO": {
        "MarketCode": null,
        "AccountType": "INDIVIDUAL",
        "AccountSubtype": "INDIVIDUAL_REGULAR",
        "NumberOfActiveLines": 0,
        "AddressClassification": [],
        "ExistingUsers": [],
        "FinanceQuoteId": null,
        "AutoPayEnabled": false
        }
        }
        },
        "AccountLines": [
            {
                "Line": {
                    "Id": "1",
                    "OrderSubType": "NEW",
                        "LineFulfillmentType": null,
                    "PrimaryLine": false,
                    "BYOD": false,
                    "PlanFeaturesChangeOnly": false,
                    "PFChangeOnlyPhoneNumber": null,
                    "FulfillmentDays": 0,
                    "ShippingTransitDays": 0,
                    "ActivationDate": null,
                    "Porting": {
                        "PortRequired": false,
                        "FirstName": null,
                        "LastName": null,
                        "Address": {
                            "AddressLine1": null,
                            "AddressLine2": null,
                            "City": null,
                            "State": null,
                            "Zip": null
                        },
                        "OSPaccountnumber": null,
                        "AuthorizedSignator": {
                            "FirstName": null,
                            "LastName": null
                        },
                        "PasswordPin": null,
                        "PortInNumber": null,
                        "PortingType": null
                    },
                    "NPANXX": "512470",
                    "ReservedPhoneNumber": "5124702271",
                        "UpgradeDetails": {
                            "UpgradePhoneNumber": null
                        },
                    "TradeIn": {
                        "Type": null,
                        "Details": {
                            "DeviceIMEI": null,
                            "Make": null,
                            "Model": null
                        }
                    },
                    "PreOrder": {
                        "Status": null,
                        "DeliveryDate": null
                    },
                    "Subscriber": {
                        "FirstName": null,
                        "MiddleName": null,
                        "LastName": null,
                        "EmailAddress": null
                    },
                    "LineStatus": {
                        "Status": null,
                        "Message": null
                    },
                    "CarrierData": {
                        "ATT": {
                            "UpgradeDetails": {
                                "UpgradeType": null,
                                "Amount": 0.0,
                                "UpgradeOffers": []
                            },
                            "TradeIn": {
                                "DeviceCondition": []
                            }
                        },
                        "VZW": {
                            "Porting": {
                                "RateCenter": null,
                                "State": null,
                                "formerCompanyCode": null
                            },
                            "UpgradeDetails": {
                            "UpgradeType": null,
                            "Amount": 0.0
                            },
                            "ExistingDeviceAndPlanInfo": {
                            "MobileNumber": null,
                            "ExistingPlanList": {
                            "PlanInfo": {
                            "PlanType": null,
                            "PricePlanId": null,
                            "PlanPrice": null,
                            "PlanSetId": null,
                            "PlanChangeRequired": null,
                            "PricePlanDescription": null,
                            "DataOnlyPlan": null,
                            "NafInfo": {
                            "NafCode": null,
                            "NafDescription": null,
                            "NafPrice": null
                            }
                            }
                            },
                            "EqptInfo": {
                            "DeviceInfo": {
                            "DeviceId": null,
                            "DeviceSKU": null,
                            "DeviceType": null,
                            "ModelName": null,
                            "DeviceFamily": null,
                            "DeviceCategoryDesc": null,
                            "LostStolen": null
                            },
                            "LteEqpt": {
                            "ICCID": null,
                            "SimSKU": null
                            }
                            }
                            }
                        }
                    },
                    "Device": {
                    "Id": "1",
                    "Type": "4GE",
                    "Make": "Apple",
                    "Model": "Apple iPhone 11",
                    "ProductSku": "MWKM2LL/A",
                    "DisplayName": "Apple iPhone 11 256GB Product RED (Verizon)",
                    "SystemName": "Apple iPhone 11 256GB Product RED (Verizon)",
                    "Action": "ADD",
                    "Quantity": 1,
                    "PlanFeatureSetup": "COMPLETE",
                    "Price": {
                    "Amount": 80.0,
                    "MSRP": 80.0,
                    "CurrencyType": "USD",
                    "EstimatedTax": 0.0,
                    "Total": 80.0
                    },
                    "DeviceSerialNumber": "353246100445321",
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
                    "IMEIType": null,
                    "DevicePaymentPlan": {
                    "Code": null,
                    "Name": null,
                    "Term": 0,
                    "MinFinanceAmt": 0.0,
                    "Price": 0.0,
                    "MandatoryDownPayment": 0.0,
                    "VoluntaryDownPayment": 0.0,
                    "monthlyNextUpChargeAmt": null
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
                    "TotalAmountFinanced": 50.0,
                    "FirstInstallmentAmount": 2.16,
                    "InstallmentContractTerm": 30,
                    "MonthlyInstallmentPayment": 2.08,
                    "RequiredDownPaymentAmount": 0.0,
                    "AgentDownPaymentAmount": 0.0,
                    "TotalDownPaymentAmount": 0.0
                    },
                    "NewDeviceType": "4GE",
                    "Contract": {
                    "Id": "CNT=0:CNTID=0048",
                    "Description": "0 Month"
                    },
                    "Fees": {
                    "ActivationFee": "35",
                    "UpgradeFee": null,
                    "LineAccessFee": "0.00"
                    }
                    }
                    }
                    },
                    "Sim": {
                    "Id": "2",
                    "ProductSku": "BULKSIM-TRI-A",
                    "DisplayName": "Nano SIM for iPhone",
                    "SystemName": "Nano SIM for iPhone",
                    "Action": "ADD",
                    "Quantity": 1,
                    "Price": {
                    "Amount": 0.0,
                    "CurrencyType": "USD",
                    "EstimatedTax": 0.0,
                    "Total": 0.0,
                    "PaymentType": "OneTime"
                    },
                    "DeviceSerialNumber": "89148000006476273550",
                    "CarrierData": {
                    "ATT": {
                    "Fees": {
                    "ActivationFee": 0.0,
                    "DeviceAccessCharge": 0.0
                    }
                    }
                    }
                    },
                    "RatePlan": {
                    "Id": "1",
                    "PlanType": "INDIVIDUAL",
                    "ProductSku": "25582",
                    "DisplayName": "JUST KIDS",
                    "SystemName": "JUST KIDS",
                    "Action": "ADD",
                    "Quantity": 1,
                    "Price": {
                    "Amount": 60.0,
                    "EstimatedTax": 0.0,
                    "Total": 60.0,
                    "TaxInclusive": false
                    },
                    "CarrierData": {
                    "ATT": {}
                    }
                    },
                    "DataPlan": {
                        "Id": null,
                        "ProductSku": null,
                        "DisplayName": null,
                        "SystemName": null,
                        "Action": null,
                        "Quantity": 0,
                        "Price": {
                            "Amount": 0.0,
                            "EstimatedTax": 0.0,
                            "Total": 0.0
                        }
                    },
                    "OptionalFeatures": [
                    {
                    "Id": "1",
                    "ProductSku": "88689",
                    "Type": "LINE",
                    "DisplayName": "VERIZON MOBILE PROTECT $17",
                    "SystemName": "VERIZON MOBILE PROTECT $17",
                    "Action": "ADD",
                    "Quantity": 1,
                    "Price": {
                    "Amount": 17.0,
                    "EstimatedTax": 0.0,
                    "Total": 17.0
                    }
                    }
                    ],
                    "NonCarrierFeatures": []
                }
            },
            {
                "Line": {
                    "Id": "2",
                    "OrderSubType": "NEW",
                        "LineFulfillmentType": null,
                    "PrimaryLine": false,
                    "BYOD": false,
                    "PlanFeaturesChangeOnly": false,
                    "PFChangeOnlyPhoneNumber": null,
                    "FulfillmentDays": 0,
                    "ShippingTransitDays": 0,
                    "ActivationDate": null,
                    "Porting": {
                        "PortRequired": false,
                        "FirstName": null,
                        "LastName": null,
                        "Address": {
                            "AddressLine1": null,
                            "AddressLine2": null,
                            "City": null,
                            "State": null,
                            "Zip": null
                        },
                        "OSPaccountnumber": null,
                        "AuthorizedSignator": {
                            "FirstName": null,
                            "LastName": null
                        },
                        "PasswordPin": null,
                        "PortInNumber": null,
                        "PortingType": null
                    },
                    "NPANXX": "512470",
                    "ReservedPhoneNumber": "5124702421",
                        "UpgradeDetails": {
                            "UpgradePhoneNumber": null
                        },
                    "TradeIn": {
                        "Type": null,
                        "Details": {
                            "DeviceIMEI": null,
                            "Make": null,
                            "Model": null
                        }
                    },
                    "PreOrder": {
                        "Status": null,
                        "DeliveryDate": null
                    },
                    "Subscriber": {
                        "FirstName": null,
                        "MiddleName": null,
                        "LastName": null,
                        "EmailAddress": null
                    },
                    "LineStatus": {
                        "Status": null,
                        "Message": null
                    },
                    "CarrierData": {
                        "ATT": {
                            "UpgradeDetails": {
                                "UpgradeType": null,
                                "Amount": 0.0,
                                "UpgradeOffers": []
                            },
                            "TradeIn": {
                                "DeviceCondition": []
                            }
                        },
                        "VZW": {
                            "Porting": {
                                "RateCenter": null,
                                "State": null,
                                "formerCompanyCode": null
                            },
                            "UpgradeDetails": {
                            "UpgradeType": null,
                            "Amount": 0.0
                            },
                            "ExistingDeviceAndPlanInfo": {
                            "MobileNumber": null,
                            "ExistingPlanList": {
                            "PlanInfo": {
                            "PlanType": null,
                            "PricePlanId": null,
                            "PlanPrice": null,
                            "PlanSetId": null,
                            "PlanChangeRequired": null,
                            "PricePlanDescription": null,
                            "DataOnlyPlan": null,
                            "NafInfo": {
                            "NafCode": null,
                            "NafDescription": null,
                            "NafPrice": null
                            }
                            }
                            },
                            "EqptInfo": {
                            "DeviceInfo": {
                            "DeviceId": null,
                            "DeviceSKU": null,
                            "DeviceType": null,
                            "ModelName": null,
                            "DeviceFamily": null,
                            "DeviceCategoryDesc": null,
                            "LostStolen": null
                            },
                            "LteEqpt": {
                            "ICCID": null,
                            "SimSKU": null
                            }
                            }
                            }
                        }
                    },
                    "Device": {
                    "Id": "1",
                    "Type": "4GE",
                    "Make": "Apple",
                    "Model": "Apple iPhone 11",
                    "ProductSku": "MWKM2LL/A",
                    "DisplayName": "Apple iPhone 11 256GB Product RED (Verizon)",
                    "SystemName": "Apple iPhone 11 256GB Product RED (Verizon)",
                    "Action": "ADD",
                    "Quantity": 1,
                    "PlanFeatureSetup": "COMPLETE",
                    "Price": {
                    "Amount": 80.0,
                    "MSRP": 80.0,
                    "CurrencyType": "USD",
                    "EstimatedTax": 0.0,
                    "Total": 80.0
                    },
                    "DeviceSerialNumber": "353975101677017",
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
                    "IMEIType": null,
                    "DevicePaymentPlan": {
                    "Code": null,
                    "Name": null,
                    "Term": 0,
                    "MinFinanceAmt": 0.0,
                    "Price": 0.0,
                    "MandatoryDownPayment": 0.0,
                    "VoluntaryDownPayment": 0.0,
                    "monthlyNextUpChargeAmt": null
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
                    "TotalAmountFinanced": 50.0,
                    "FirstInstallmentAmount": 2.16,
                    "InstallmentContractTerm": 24,
                    "MonthlyInstallmentPayment": 2.08,
                    "RequiredDownPaymentAmount": 0.0,
                    "AgentDownPaymentAmount": 0.0,
                    "TotalDownPaymentAmount": 0.0
                    },
                    "NewDeviceType": "4GE",
                    "Contract": {
                    "Id": "CNT=0:CNTID=0048",
                    "Description": "0 Month"
                    },
                    "Fees": {
                    "ActivationFee": "35",
                    "UpgradeFee": null,
                    "LineAccessFee": "0.00"
                    }
                    }
                    }
                    },
                    "Sim": {
                    "Id": "2",
                    "ProductSku": "BULKSIM-TRI-A",
                    "DisplayName": "Nano SIM for iPhone",
                    "SystemName": "Nano SIM for iPhone",
                    "Action": "ADD",
                    "Quantity": 1,
                    "Price": {
                    "Amount": 0.0,
                    "CurrencyType": "USD",
                    "EstimatedTax": 0.0,
                    "Total": 0.0,
                    "PaymentType": "OneTime"
                    },
                    "DeviceSerialNumber": "89148000005836885194",
                    "CarrierData": {
                    "ATT": {
                    "Fees": {
                    "ActivationFee": 0.0,
                    "DeviceAccessCharge": 0.0
                    }
                    }
                    }
                    },
                    "RatePlan": {
                    "Id": "1",
                    "PlanType": "INDIVIDUAL",
                    "ProductSku": "26872",
                    "DisplayName": "START UNLIMITED (SMARTPHONE)",
                    "SystemName": "START UNLIMITED (SMARTPHONE)",
                    "Action": "ADD",
                    "Quantity": 1,
                    "Price": {
                    "Amount": 70.0,
                    "EstimatedTax": 0.0,
                    "Total": 70.0,
                    "TaxInclusive": false
                    },
                    "CarrierData": {
                    "ATT": {}
                    }
                    },
                    "DataPlan": {
                        "Id": null,
                        "ProductSku": null,
                        "DisplayName": null,
                        "SystemName": null,
                        "Action": null,
                        "Quantity": 0,
                        "Price": {
                            "Amount": 0.0,
                            "EstimatedTax": 0.0,
                            "Total": 0.0
                        }
                    },
                    "OptionalFeatures": [
                    {
                    "Id": "1",
                    "ProductSku": "79184",
                    "Type": "LINE",
                    "DisplayName": "EXTENDED WARRANTY - $5.00",
                    "SystemName": "EXTENDED WARRANTY - $5.00",
                    "Action": "ADD",
                    "Quantity": 1,
                    "Price": {
                    "Amount": 5.0,
                    "EstimatedTax": 0.0,
                    "Total": 5.0
                    }
                    }
                    ],
                    "NonCarrierFeatures": []
                }
            }
        ],
        "Fulfillment": {
            "Store": {
            "Address": {
            "AddressLine1": null,
            "AddressLine2": null,
            "City": null,
            "State": null,
            "Zip": null
            },
                "PhoneNumber": null
            },
            "Shipping": {
            "Name": null,
            "ShippingPrice": 0.0,
            "Carrier": null,
            "CarrierTracking": null,
            "ShippingAddress": {
            "AddressLine1": null,
            "AddressLine2": null,
            "City": null,
            "State": null,
            "Zip": null
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
        },
        "Payment": {
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
        "AddressLine1": null,
        "AddressLine2": null,
        "City": null,
        "State": null,
        "Zip": null
        },
        "AuthorizationCode": null,
        "AuthorizationDate": "0001-01-01T00:00:00",
        "AuthorizationExpirationDate": "0001-01-01T00:00:00"
        }
        },
        "NonCarrierFeatureList": {
            "Lines": []
        }
    },
    {
        "OrderDetails": {
        "InternalOrderId": "1234567-DFDFDF-1212212",
        "CreatedDatetime": "2019-07-03T09:10:33+00:00",
        "SubmittedDatetime": "2019-07-03T09:10:33+00:00",
        "SubmittedSystem": "WA-MAGENTO-COSTCO",
        "Carrier": "VERIZON",
        "OrderType": "NEW",
        "NumberOfLines": 2,
        "FulfillmentType": "ONLINE",
        "MinimumOneBYODLine": false,
        "StoreId": "9999",
        "CarrierData": {
        "ATT": {
        "Rc1SalesCode": null,
        "DealerCode": null,
        "AffiliateOrderNumber": null,
        "CommonOrderId": null,
        "TransactionId": null
        },
        "VZW": {
        "OrderNum": "2030116",
        "ClusterInfo": "DEVEL",
        "Location": "P554201",
        "BillingSystem": "VE",
        "SalesForceId": "ENC",
        "OutletId": "000106449"
        },
        "TMO": {
        "ServiceTransactionId": null,
        "PartnerId": null,
        "SalesOrderId": null
        }
        },
        "OrderContactInfo": {
        "FirstName": "John",
        "MiddleName": "F",
        "LastName": "Doe",
        "EmailAddress": "sda@test.com",
        "PhoneNumber": "6092041480"
        },
        "DXP": {
        "SessionID": "eeac3859-f74e-437b-b321-647a0652104c-9943",
        "Token": null,
        "SubSessionID": "1",
        "RequestID": "eeac3859-f74e-437b-b321-647a0652104c-9943",
        "PFID": "eeac3859-f74e-437b-b321-647a0652104c-9977",
        "QualReturnURL": "http://www.wa.com/devicelisting",
        "ActivationReturnURL": "http://www.wa.com/actcomplete",
        "PlansFeaturesReturnURL": "http://www.wa.com/devicelisting",
        "QualReturnErrorURL": "http://www.wa.com/devicelisting",
        "PlansFeaturesReturnErrorURL": "http://www.wa.com/devicelisting",
        "ActivationReturnErrorURL": "http://www.wa.com/actcomplete",
        "PlanDetailsURL": "http://www.wirelessadvocates.com",
        "FeatureDetailsURL": "http://www.wirelessadvocates.com",
        "TCReturnURL": "http://www.wa.com/actcomplete",
        "TCReturnErrorURL": "http://www.wa.com/actcomplete",
        "WAFeaturesDetailsURL": null
        },
        "OrderStatus": {
        "Status": "AP",
        "Message": null
        },
        "MultiTypeProcessFirst": null
        },
        "AccountDetails": {
        "BillingAccountNumber": null,
        "PaymentArrangement": "Postpaid",
        "CustomerType": "CONSUMER",
        "AccountContactInfo": {
        "FirstName": "John",
        "MiddleName": "F",
        "LastName": "Doe",
        "EmailAddress": "sda@test.com",
        "PhoneNumber": "6092041480"
        },
        "ServiceAddress": {
        "AddressLine1": "3148 SAND HOLLER SE SE",
        "AddressLine2": null,
        "City": "DALE",
        "State": "TX",
        "Zip": "78616"
        },
        "BillingAddress": {
        "AddressLine1": null,
        "AddressLine2": null,
        "City": null,
        "State": null,
        "Zip": null
        },
        "Authentication": {
        "DOB": null,
        "Last4SSN": null,
        "SSN": null,
        "DrivingLicense": null,
        "DrivingLicenseState": null,
        "DrivingLicenseExpDate": null,
        "Passcode": null,
        "DocIdType": null,
        "DocIdNumber": null,
        "DocIdState": null,
        "DocIdExpDate": null
        },
        "CreditCheck": {
        "ApplicationNumber": "489924409",
        "CreditStatus": "AP",
        "ApplicationApprovalDate": null
        },
        "Language": "E",
        "SpokenLanguagePreference": null,
        "CarrierData": {
        "ATT": null,
        "VZW": {
        "BillingSubAccountNumber": null,
        "UniqueTransactionToken": null,
        "CreditCheck": {
        "CreditApprovalStatus": "AP",
        "SecurityDepositAmountForEdge": 0.0,
        "SecurityDepositAmountForZeroContract": 0.0,
        "SecurityDepositAmountForContract": 0.0,
        "EdgeIndicator": "Y",
        "PercentageOfVZWRequiredDownPaymentAmount": "0",
        "RequiredPaymentForEDGEUp": "N",
        "SpendingLimit": 4000.0,
        "LineLevelSpendingLimitAmount": 1500.0
        },
        "ExistingUsers": []
        },
        "TMO": {
        "MarketCode": null,
        "AccountType": "INDIVIDUAL",
        "AccountSubtype": "INDIVIDUAL_REGULAR",
        "NumberOfActiveLines": 0,
        "AddressClassification": [],
        "ExistingUsers": [],
        "FinanceQuoteId": null,
        "AutoPayEnabled": false
        }
        }
        },
        "AccountLines": [
            {
                "Line": {
                    "Id": "1",
                    "OrderSubType": "NEW",
                        "LineFulfillmentType": null,
                    "PrimaryLine": false,
                    "BYOD": false,
                    "PlanFeaturesChangeOnly": false,
                    "PFChangeOnlyPhoneNumber": null,
                    "FulfillmentDays": 0,
                    "ShippingTransitDays": 0,
                    "ActivationDate": null,
                    "Porting": {
                        "PortRequired": false,
                        "FirstName": null,
                        "LastName": null,
                        "Address": {
                            "AddressLine1": null,
                            "AddressLine2": null,
                            "City": null,
                            "State": null,
                            "Zip": null
                        },
                        "OSPaccountnumber": null,
                        "AuthorizedSignator": {
                            "FirstName": null,
                            "LastName": null
                        },
                        "PasswordPin": null,
                        "PortInNumber": null,
                        "PortingType": null
                    },
                    "NPANXX": "512470",
                    "ReservedPhoneNumber": "5124702271",
                        "UpgradeDetails": {
                            "UpgradePhoneNumber": null
                        },
                    "TradeIn": {
                        "Type": null,
                        "Details": {
                            "DeviceIMEI": null,
                            "Make": null,
                            "Model": null
                        }
                    },
                    "PreOrder": {
                        "Status": null,
                        "DeliveryDate": null
                    },
                    "Subscriber": {
                        "FirstName": null,
                        "MiddleName": null,
                        "LastName": null,
                        "EmailAddress": null
                    },
                    "LineStatus": {
                        "Status": null,
                        "Message": null
                    },
                    "CarrierData": {
                        "ATT": {
                            "UpgradeDetails": {
                                "UpgradeType": null,
                                "Amount": 0.0,
                                "UpgradeOffers": []
                            },
                            "TradeIn": {
                                "DeviceCondition": []
                            }
                        },
                        "VZW": {
                            "Porting": {
                                "RateCenter": null,
                                "State": null,
                                "formerCompanyCode": null
                            },
                            "UpgradeDetails": {
                            "UpgradeType": null,
                            "Amount": 0.0
                            },
                            "ExistingDeviceAndPlanInfo": {
                            "MobileNumber": null,
                            "ExistingPlanList": {
                            "PlanInfo": {
                            "PlanType": null,
                            "PricePlanId": null,
                            "PlanPrice": null,
                            "PlanSetId": null,
                            "PlanChangeRequired": null,
                            "PricePlanDescription": null,
                            "DataOnlyPlan": null,
                            "NafInfo": {
                            "NafCode": null,
                            "NafDescription": null,
                            "NafPrice": null
                            }
                            }
                            },
                            "EqptInfo": {
                            "DeviceInfo": {
                            "DeviceId": null,
                            "DeviceSKU": null,
                            "DeviceType": null,
                            "ModelName": null,
                            "DeviceFamily": null,
                            "DeviceCategoryDesc": null,
                            "LostStolen": null
                            },
                            "LteEqpt": {
                            "ICCID": null,
                            "SimSKU": null
                            }
                            }
                            }
                        }
                    },
                    "Device": {
                    "Id": "1",
                    "Type": "4GE",
                    "Make": "Apple",
                    "Model": "Apple iPhone 11",
                    "ProductSku": "MWKM2LL/A",
                    "DisplayName": "Apple iPhone 11 256GB Product RED (Verizon)",
                    "SystemName": "Apple iPhone 11 256GB Product RED (Verizon)",
                    "Action": "ADD",
                    "Quantity": 1,
                    "PlanFeatureSetup": "COMPLETE",
                    "Price": {
                    "Amount": 80.0,
                    "MSRP": 80.0,
                    "CurrencyType": "USD",
                    "EstimatedTax": 0.0,
                    "Total": 80.0
                    },
                    "DeviceSerialNumber": "353246100445321",
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
                    "IMEIType": null,
                    "DevicePaymentPlan": {
                    "Code": null,
                    "Name": null,
                    "Term": 0,
                    "MinFinanceAmt": 0.0,
                    "Price": 0.0,
                    "MandatoryDownPayment": 0.0,
                    "VoluntaryDownPayment": 0.0,
                    "monthlyNextUpChargeAmt": null
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
                    "TotalAmountFinanced": 50.0,
                    "FirstInstallmentAmount": 2.16,
                    "InstallmentContractTerm": 30,
                    "MonthlyInstallmentPayment": 2.08,
                    "RequiredDownPaymentAmount": 0.0,
                    "AgentDownPaymentAmount": 0.0,
                    "TotalDownPaymentAmount": 0.0
                    },
                    "NewDeviceType": "4GE",
                    "Contract": {
                    "Id": "CNT=0:CNTID=0048",
                    "Description": "0 Month"
                    },
                    "Fees": {
                    "ActivationFee": "35",
                    "UpgradeFee": null,
                    "LineAccessFee": "0.00"
                    }
                    }
                    }
                    },
                    "Sim": {
                    "Id": "2",
                    "ProductSku": "BULKSIM-TRI-A",
                    "DisplayName": "Nano SIM for iPhone",
                    "SystemName": "Nano SIM for iPhone",
                    "Action": "ADD",
                    "Quantity": 1,
                    "Price": {
                    "Amount": 0.0,
                    "CurrencyType": "USD",
                    "EstimatedTax": 0.0,
                    "Total": 0.0,
                    "PaymentType": "OneTime"
                    },
                    "DeviceSerialNumber": "89148000006476273550",
                    "CarrierData": {
                    "ATT": {
                    "Fees": {
                    "ActivationFee": 0.0,
                    "DeviceAccessCharge": 0.0
                    }
                    }
                    }
                    },
                    "RatePlan": {
                    "Id": "1",
                    "PlanType": "INDIVIDUAL",
                    "ProductSku": "25582",
                    "DisplayName": "JUST KIDS",
                    "SystemName": "JUST KIDS",
                    "Action": "ADD",
                    "Quantity": 1,
                    "Price": {
                    "Amount": 60.0,
                    "EstimatedTax": 0.0,
                    "Total": 60.0,
                    "TaxInclusive": false
                    },
                    "CarrierData": {
                    "ATT": {}
                    }
                    },
                    "DataPlan": {
                        "Id": null,
                        "ProductSku": null,
                        "DisplayName": null,
                        "SystemName": null,
                        "Action": null,
                        "Quantity": 0,
                        "Price": {
                            "Amount": 0.0,
                            "EstimatedTax": 0.0,
                            "Total": 0.0
                        }
                    },
                    "OptionalFeatures": [
                    {
                    "Id": "1",
                    "ProductSku": "88689",
                    "Type": "LINE",
                    "DisplayName": "VERIZON MOBILE PROTECT $17",
                    "SystemName": "VERIZON MOBILE PROTECT $17",
                    "Action": "ADD",
                    "Quantity": 1,
                    "Price": {
                    "Amount": 17.0,
                    "EstimatedTax": 0.0,
                    "Total": 17.0
                    }
                    }
                    ],
                    "NonCarrierFeatures": []
                }
            },
            {
                "Line": {
                    "Id": "2",
                    "OrderSubType": "NEW",
                        "LineFulfillmentType": null,
                    "PrimaryLine": false,
                    "BYOD": false,
                    "PlanFeaturesChangeOnly": false,
                    "PFChangeOnlyPhoneNumber": null,
                    "FulfillmentDays": 0,
                    "ShippingTransitDays": 0,
                    "ActivationDate": null,
                    "Porting": {
                        "PortRequired": false,
                        "FirstName": null,
                        "LastName": null,
                        "Address": {
                            "AddressLine1": null,
                            "AddressLine2": null,
                            "City": null,
                            "State": null,
                            "Zip": null
                        },
                        "OSPaccountnumber": null,
                        "AuthorizedSignator": {
                            "FirstName": null,
                            "LastName": null
                        },
                        "PasswordPin": null,
                        "PortInNumber": null,
                        "PortingType": null
                    },
                    "NPANXX": "512470",
                    "ReservedPhoneNumber": "5124702421",
                        "UpgradeDetails": {
                            "UpgradePhoneNumber": null
                        },
                    "TradeIn": {
                        "Type": null,
                        "Details": {
                            "DeviceIMEI": null,
                            "Make": null,
                            "Model": null
                        }
                    },
                    "PreOrder": {
                        "Status": null,
                        "DeliveryDate": null
                    },
                    "Subscriber": {
                        "FirstName": null,
                        "MiddleName": null,
                        "LastName": null,
                        "EmailAddress": null
                    },
                    "LineStatus": {
                        "Status": null,
                        "Message": null
                    },
                    "CarrierData": {
                        "ATT": {
                            "UpgradeDetails": {
                                "UpgradeType": null,
                                "Amount": 0.0,
                                "UpgradeOffers": []
                            },
                            "TradeIn": {
                                "DeviceCondition": []
                            }
                        },
                        "VZW": {
                            "Porting": {
                                "RateCenter": null,
                                "State": null,
                                "formerCompanyCode": null
                            },
                            "UpgradeDetails": {
                            "UpgradeType": null,
                            "Amount": 0.0
                            },
                            "ExistingDeviceAndPlanInfo": {
                            "MobileNumber": null,
                            "ExistingPlanList": {
                            "PlanInfo": {
                            "PlanType": null,
                            "PricePlanId": null,
                            "PlanPrice": null,
                            "PlanSetId": null,
                            "PlanChangeRequired": null,
                            "PricePlanDescription": null,
                            "DataOnlyPlan": null,
                            "NafInfo": {
                            "NafCode": null,
                            "NafDescription": null,
                            "NafPrice": null
                            }
                            }
                            },
                            "EqptInfo": {
                            "DeviceInfo": {
                            "DeviceId": null,
                            "DeviceSKU": null,
                            "DeviceType": null,
                            "ModelName": null,
                            "DeviceFamily": null,
                            "DeviceCategoryDesc": null,
                            "LostStolen": null
                            },
                            "LteEqpt": {
                            "ICCID": null,
                            "SimSKU": null
                            }
                            }
                            }
                        }
                    },
                    "Device": {
                    "Id": "1",
                    "Type": "4GE",
                    "Make": "Apple",
                    "Model": "Apple iPhone 11",
                    "ProductSku": "MWKM2LL/A",
                    "DisplayName": "Apple iPhone 11 256GB Product RED (Verizon)",
                    "SystemName": "Apple iPhone 11 256GB Product RED (Verizon)",
                    "Action": "ADD",
                    "Quantity": 1,
                    "PlanFeatureSetup": "COMPLETE",
                    "Price": {
                    "Amount": 80.0,
                    "MSRP": 80.0,
                    "CurrencyType": "USD",
                    "EstimatedTax": 0.0,
                    "Total": 80.0
                    },
                    "DeviceSerialNumber": "353975101677017",
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
                    "IMEIType": null,
                    "DevicePaymentPlan": {
                    "Code": null,
                    "Name": null,
                    "Term": 0,
                    "MinFinanceAmt": 0.0,
                    "Price": 0.0,
                    "MandatoryDownPayment": 0.0,
                    "VoluntaryDownPayment": 0.0,
                    "monthlyNextUpChargeAmt": null
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
                    "TotalAmountFinanced": 50.0,
                    "FirstInstallmentAmount": 2.16,
                    "InstallmentContractTerm": 24,
                    "MonthlyInstallmentPayment": 2.08,
                    "RequiredDownPaymentAmount": 0.0,
                    "AgentDownPaymentAmount": 0.0,
                    "TotalDownPaymentAmount": 0.0
                    },
                    "NewDeviceType": "4GE",
                    "Contract": {
                    "Id": "CNT=0:CNTID=0048",
                    "Description": "0 Month"
                    },
                    "Fees": {
                    "ActivationFee": "35",
                    "UpgradeFee": null,
                    "LineAccessFee": "0.00"
                    }
                    }
                    }
                    },
                    "Sim": {
                    "Id": "2",
                    "ProductSku": "BULKSIM-TRI-A",
                    "DisplayName": "Nano SIM for iPhone",
                    "SystemName": "Nano SIM for iPhone",
                    "Action": "ADD",
                    "Quantity": 1,
                    "Price": {
                    "Amount": 0.0,
                    "CurrencyType": "USD",
                    "EstimatedTax": 0.0,
                    "Total": 0.0,
                    "PaymentType": "OneTime"
                    },
                    "DeviceSerialNumber": "89148000005836885194",
                    "CarrierData": {
                    "ATT": {
                    "Fees": {
                    "ActivationFee": 0.0,
                    "DeviceAccessCharge": 0.0
                    }
                    }
                    }
                    },
                    "RatePlan": {
                    "Id": "1",
                    "PlanType": "INDIVIDUAL",
                    "ProductSku": "26872",
                    "DisplayName": "START UNLIMITED (SMARTPHONE)",
                    "SystemName": "START UNLIMITED (SMARTPHONE)",
                    "Action": "ADD",
                    "Quantity": 1,
                    "Price": {
                    "Amount": 70.0,
                    "EstimatedTax": 0.0,
                    "Total": 70.0,
                    "TaxInclusive": false
                    },
                    "CarrierData": {
                    "ATT": {}
                    }
                    },
                    "DataPlan": {
                        "Id": null,
                        "ProductSku": null,
                        "DisplayName": null,
                        "SystemName": null,
                        "Action": null,
                        "Quantity": 0,
                        "Price": {
                            "Amount": 0.0,
                            "EstimatedTax": 0.0,
                            "Total": 0.0
                        }
                    },
                    "OptionalFeatures": [
                    {
                    "Id": "1",
                    "ProductSku": "79184",
                    "Type": "LINE",
                    "DisplayName": "EXTENDED WARRANTY - $5.00",
                    "SystemName": "EXTENDED WARRANTY - $5.00",
                    "Action": "ADD",
                    "Quantity": 1,
                    "Price": {
                    "Amount": 5.0,
                    "EstimatedTax": 0.0,
                    "Total": 5.0
                    }
                    }
                    ],
                    "NonCarrierFeatures": []
                }
            }
        ],
        "Fulfillment": {
            "Store": {
            "Address": {
            "AddressLine1": null,
            "AddressLine2": null,
            "City": null,
            "State": null,
            "Zip": null
            },
                "PhoneNumber": null
            },
            "Shipping": {
            "Name": null,
            "ShippingPrice": 0.0,
            "Carrier": null,
            "CarrierTracking": null,
            "ShippingAddress": {
            "AddressLine1": null,
            "AddressLine2": null,
            "City": null,
            "State": null,
            "Zip": null
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
        },
        "Payment": {
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
        "AddressLine1": null,
        "AddressLine2": null,
        "City": null,
        "State": null,
        "Zip": null
        },
        "AuthorizationCode": null,
        "AuthorizationDate": "0001-01-01T00:00:00",
        "AuthorizationExpirationDate": "0001-01-01T00:00:00"
        }
        },
        "NonCarrierFeatureList": {
            "Lines": []
        }
    }],
        "RequestIdentifier": null,
        "ReferenceIdentifier": null
    }
//===========================================
function prepareActJSON(data, sessionId) {
    let resData = {
        "SessionId": sessionId,
        "OrderActivationInfo": setActivationData(data.PlanFeaturesEndData),
        "RequestIdentifier": null,
        "ReferenceIdentifier": null
    }
    return datamain;
}

module.exports = prepareActJSON;