module.exports.data = 
[

{
    "data": [
        {
            "id": "Australia",
            "labelKey": "Australia",
            "value": "1",
            "filter": null
        },
        {
            "id": "France",
            "labelKey": "France",
            "value": "1",
            "filter": null
        },
        {
            "id": "Germany",
            "labelKey": "Germany",
            "value": "1",
            "filter": null
        },
        {
            "id": "United Kingdom",
            "labelKey": "UnitedKingdom",
            "value": "2",
            "filter": null
        },
        {
            "id": "United States",
            "labelKey": "UnitedStates",
            "value": "9",
            "filter": null
        }
    ],
    "datasets": null,
    "nameKey": null,
    "filters": [
        {
            "empty": true
        }
    ],
    "filter": null,
    "type": 10,
    "version": 0,
    "name": "Vendors By Region",
    "id": "5ea77f83572a55000ca10f17",
    "showOtherGroup": true,
    "aggregate": {
        "function": "COUNT",
        "field": {
            "value": null,
            "valueKey": null
        }
    },
    "idBasedFilter": false,
    "new": false,
    "primaryReportableType": {
        "entityType": "INVENTORY",
        "reportSubType": "50"
    },
    "groupBy": {
        "reportableType": {
            "entityType": "INVENTORY",
            "reportSubType": "50"
        },
        "attributeKey": "location",
        "attributeEntityType": "dynamicAttributes"
    },
    "secondaryGroupBy": null,
    "timeline": null,
    "lastModifiedDate": "2020-04-28T00:57:39.607+0000",
    "lastModifiedBy": "286c8443-5d9a-4da5-99cc-c67e5b034ec6",
    "createDT": "2020-04-28T00:57:39.607+0000",
    "frequency": null
},

{
    "data": [
        {
            "id": "Critical",
            "labelKey": "VendorsVendorCriticalityCritical",
            "value": "3",
            "filter": null
        },
        {
            "id": "High",
            "labelKey": "VendorsVendorCriticalityHigh",
            "value": "5",
            "filter": null
        },
        {
            "id": "Low",
            "labelKey": "VendorsVendorCriticalityLow",
            "value": "1",
            "filter": null
        },
        {
            "id": "Medium",
            "labelKey": "VendorsVendorCriticalityMedium",
            "value": "6",
            "filter": null
        }
    ],
    "datasets": null,
    "nameKey": null,
    "filters": [
        {
            "empty": true
        }
    ],
    "filter": null,
    "type": 20,
    "version": 0,
    "name": "Vendors by Criticality",
    "id": "5ea77f83572a55000ca10f18",
    "showOtherGroup": true,
    "aggregate": {
        "function": "COUNT",
        "field": {
            "value": null,
            "valueKey": null
        }
    },
    "idBasedFilter": false,
    "new": false,
    "primaryReportableType": {
        "entityType": "INVENTORY",
        "reportSubType": "50"
    },
    "groupBy": {
        "reportableType": {
            "entityType": "INVENTORY",
            "reportSubType": "50"
        },
        "attributeKey": "vendorCriticality",
        "attributeEntityType": "dynamicAttributes"
    },
    "secondaryGroupBy": null,
    "timeline": null,
    "lastModifiedDate": "2020-04-28T00:57:39.613+0000",
    "lastModifiedBy": "286c8443-5d9a-4da5-99cc-c67e5b034ec6",
    "createDT": "2020-04-28T00:57:39.613+0000",
    "frequency": null
},

{
    "data": null,
    "datasets": [
        {
            "id": "VERY_HIGH",
            "labelKey": "VeryHigh",
            "data": [
                {
                    "id": "OneTrust",
                    "labelKey": "OneTrust",
                    "value": "0",
                    "filter": null
                },
                {
                    "id": "Marketing",
                    "labelKey": "Marketing",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "Corporate",
                    "labelKey": "Corporate",
                    "value": "0",
                    "filter": null
                },
                {
                    "id": "Legal",
                    "labelKey": "Legal",
                    "value": "0",
                    "filter": null
                },
                {
                    "id": "IT",
                    "labelKey": "IT",
                    "value": "1",
                    "filter": null
                }
            ]
        },
        {
            "id": "HIGH",
            "labelKey": "High",
            "data": [
                {
                    "id": "OneTrust",
                    "labelKey": "OneTrust",
                    "value": "36",
                    "filter": null
                },
                {
                    "id": "Marketing",
                    "labelKey": "Marketing",
                    "value": "5",
                    "filter": null
                },
                {
                    "id": "Corporate",
                    "labelKey": "Corporate",
                    "value": "14",
                    "filter": null
                },
                {
                    "id": "Legal",
                    "labelKey": "Legal",
                    "value": "17",
                    "filter": null
                },
                {
                    "id": "IT",
                    "labelKey": "IT",
                    "value": "13",
                    "filter": null
                }
            ]
        },
        {
            "id": "MEDIUM",
            "labelKey": "Medium",
            "data": [
                {
                    "id": "OneTrust",
                    "labelKey": "OneTrust",
                    "value": "201",
                    "filter": null
                },
                {
                    "id": "Marketing",
                    "labelKey": "Marketing",
                    "value": "25",
                    "filter": null
                },
                {
                    "id": "Corporate",
                    "labelKey": "Corporate",
                    "value": "27",
                    "filter": null
                },
                {
                    "id": "Legal",
                    "labelKey": "Legal",
                    "value": "115",
                    "filter": null
                },
                {
                    "id": "IT",
                    "labelKey": "IT",
                    "value": "31",
                    "filter": null
                }
            ]
        },
        {
            "id": "LOW",
            "labelKey": "Low",
            "data": [
                {
                    "id": "OneTrust",
                    "labelKey": "OneTrust",
                    "value": "48",
                    "filter": null
                },
                {
                    "id": "Marketing",
                    "labelKey": "Marketing",
                    "value": "11",
                    "filter": null
                },
                {
                    "id": "Corporate",
                    "labelKey": "Corporate",
                    "value": "13",
                    "filter": null
                },
                {
                    "id": "Legal",
                    "labelKey": "Legal",
                    "value": "12",
                    "filter": null
                },
                {
                    "id": "IT",
                    "labelKey": "IT",
                    "value": "9",
                    "filter": null
                }
            ]
        }
    ],
    "nameKey": null,
    "filters": [
        {
            "entityType": "RISK",
            "criteria": {
                "AND": [
                    {
                        "columnId": "organization",
                        "attributeKey": "organization",
                        "entityType": "attribute",
                        "dataType": 30,
                        "operator": "EQ",
                        "values": [
                            "Corporate",
                            "IT",
                            "Marketing",
                            "Legal",
                            "OneTrust"
                        ]
                    },
                    {
                        "columnId": "residualLevel",
                        "attributeKey": "residualLevel",
                        "entityType": "attribute",
                        "dataType": 30,
                        "operator": "EQ",
                        "values": [
                            "LOW",
                            "MEDIUM",
                            "HIGH",
                            "VERY_HIGH"
                        ]
                    }
                ]
            },
            "empty": false
        }
    ],
    "filter": null,
    "type": 60,
    "version": 0,
    "name": "Vendor Risks by Business Unit",
    "id": "5ea77f83572a55000ca10f1a",
    "showOtherGroup": true,
    "aggregate": {
        "function": "COUNT",
        "field": {
            "value": null,
            "valueKey": null
        }
    },
    "idBasedFilter": false,
    "new": false,
    "primaryReportableType": {
        "entityType": "RISK",
        "reportSubType": null
    },
    "groupBy": {
        "reportableType": {
            "entityType": "RISK",
            "reportSubType": "00000000-0000-0000-0000-000000000000"
        },
        "attributeKey": "organization",
        "attributeEntityType": "attribute"
    },
    "secondaryGroupBy": {
        "reportableType": {
            "entityType": "RISK",
            "reportSubType": "00000000-0000-0000-0000-000000000000"
        },
        "attributeKey": "residualLevel",
        "attributeEntityType": "attribute"
    },
    "timeline": null,
    "lastModifiedDate": "2020-04-28T00:57:39.623+0000",
    "lastModifiedBy": "286c8443-5d9a-4da5-99cc-c67e5b034ec6",
    "createDT": "2020-04-28T00:57:39.623+0000",
    "frequency": null
},

{
    "data": null,
    "datasets": [
        {
            "id": "createDT",
            "labelKey": "Risk",
            "data": [
                {
                    "id": "09/01/2018",
                    "labelKey": "09/01/2018",
                    "value": "59",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2018-09-01T00:00:00Z",
                            "2018-10-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "10/01/2018",
                    "labelKey": "10/01/2018",
                    "value": "20",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2018-10-01T00:00:00Z",
                            "2018-11-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "11/01/2018",
                    "labelKey": "11/01/2018",
                    "value": "37",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2018-11-01T00:00:00Z",
                            "2018-12-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "12/01/2018",
                    "labelKey": "12/01/2018",
                    "value": "43",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2018-12-01T00:00:00Z",
                            "2019-01-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "01/01/2019",
                    "labelKey": "01/01/2019",
                    "value": "212",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2019-01-01T00:00:00Z",
                            "2019-02-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "02/01/2019",
                    "labelKey": "02/01/2019",
                    "value": "3",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2019-02-01T00:00:00Z",
                            "2019-03-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "03/01/2019",
                    "labelKey": "03/01/2019",
                    "value": "0",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2019-03-01T00:00:00Z",
                            "2019-04-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "04/01/2019",
                    "labelKey": "04/01/2019",
                    "value": "1",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2019-04-01T00:00:00Z",
                            "2019-05-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "05/01/2019",
                    "labelKey": "05/01/2019",
                    "value": "6",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2019-05-01T00:00:00Z",
                            "2019-06-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "06/01/2019",
                    "labelKey": "06/01/2019",
                    "value": "6",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2019-06-01T00:00:00Z",
                            "2019-07-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "07/01/2019",
                    "labelKey": "07/01/2019",
                    "value": "0",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2019-07-01T00:00:00Z",
                            "2019-08-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "08/01/2019",
                    "labelKey": "08/01/2019",
                    "value": "73",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2019-08-01T00:00:00Z",
                            "2019-09-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "09/01/2019",
                    "labelKey": "09/01/2019",
                    "value": "2",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2019-09-01T00:00:00Z",
                            "2019-10-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "10/01/2019",
                    "labelKey": "10/01/2019",
                    "value": "6",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2019-10-01T00:00:00Z",
                            "2019-11-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "11/01/2019",
                    "labelKey": "11/01/2019",
                    "value": "22",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2019-11-01T00:00:00Z",
                            "2019-12-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "12/01/2019",
                    "labelKey": "12/01/2019",
                    "value": "28",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2019-12-01T00:00:00Z",
                            "2020-01-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "01/01/2020",
                    "labelKey": "01/01/2020",
                    "value": "0",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2020-01-01T00:00:00Z",
                            "2020-02-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "02/01/2020",
                    "labelKey": "02/01/2020",
                    "value": "14",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2020-02-01T00:00:00Z",
                            "2020-03-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "03/01/2020",
                    "labelKey": "03/01/2020",
                    "value": "0",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2020-03-01T00:00:00Z",
                            "2020-04-01T00:00:00Z"
                        ]
                    }
                },
                {
                    "id": "04/01/2020",
                    "labelKey": "04/01/2020",
                    "value": "4",
                    "filter": {
                        "operator": "BW",
                        "values": [
                            "2020-04-01T00:00:00Z",
                            "2020-05-01T00:00:00Z"
                        ]
                    }
                }
            ]
        }
    ],
    "filters": [
        {
            "empty": true
        }
    ],
    "nameKey": null,
    "filter": null,
    "version": 0,
    "type": 70,
    "name": "Vendor Risks Over Time",
    "id": "5ea77f83572a55000ca10f1b",
    "idBasedFilter": false,
    "groupBy": {
        "reportableType": {
            "entityType": "RISK",
            "reportSubType": "00000000-0000-0000-0000-000000000000"
        },
        "attributeKey": "createDT",
        "attributeEntityType": "default"
    },
    "secondaryGroupBy": null,
    "showOtherGroup": true,
    "aggregate": {
        "function": "COUNT",
        "field": {
            "value": null,
            "valueKey": null
        }
    },
    "primaryReportableType": {
        "entityType": "RISK",
        "reportSubType": null
    },
    "new": false,
    "timeline": {
        "frequency": "MONTHLY",
        "timeframe": "PAST"
    },
    "lastModifiedDate": "2020-04-28T00:57:39.629+0000",
    "lastModifiedBy": "286c8443-5d9a-4da5-99cc-c67e5b034ec6",
    "frequency": null,
    "createDT": "2020-04-28T00:57:39.629+0000"
}
]