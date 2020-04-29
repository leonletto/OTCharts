module.exports.data = 
[

{
    "data": [
        {
            "id": "HIGH",
            "labelKey": "High",
            "value": "5",
            "filter": null
        },
        {
            "id": "LOW",
            "labelKey": "Low",
            "value": "4",
            "filter": null
        },
        {
            "id": "MEDIUM",
            "labelKey": "Medium",
            "value": "9",
            "filter": null
        },
        {
            "id": "ZERO",
            "labelKey": "Zero",
            "value": "2",
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
    "name": "Vendor By Risk Level",
    "id": "5ea77f83572a55000ca10f17",
    "showOtherGroup": false,
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
            "entityType": "RISK",
            "reportSubType": "00000000-0000-0000-0000-000000000000"
        },
        "attributeKey": "residualLevel",
        "attributeEntityType": "attribute"
    },
    "secondaryGroupBy": null,
    "timeline": null,
    "lastModifiedDate": "2020-04-29T03:13:06.373+0000",
    "lastModifiedBy": "286c8443-5d9a-4da5-99cc-c67e5b034ec6",
    "createDT": "2020-04-28T00:57:39.607+0000",
    "frequency": null
},

{
    "data": null,
    "datasets": [
        {
            "id": "Under Review",
            "labelKey": "Under Review",
            "data": [
                {
                    "id": "OneTrust",
                    "labelKey": "OneTrust",
                    "value": "3",
                    "filter": null
                },
                {
                    "id": "HR",
                    "labelKey": "HR",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "Marketing",
                    "labelKey": "Marketing",
                    "value": "0",
                    "filter": null
                },
                {
                    "id": "Vyond",
                    "labelKey": "Vyond",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "Corporate",
                    "labelKey": "Corporate",
                    "value": "2",
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
            "id": "Not Started",
            "labelKey": "Not Started",
            "data": [
                {
                    "id": "OneTrust",
                    "labelKey": "OneTrust",
                    "value": "0",
                    "filter": null
                },
                {
                    "id": "HR",
                    "labelKey": "HR",
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
                    "id": "Vyond",
                    "labelKey": "Vyond",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "Corporate",
                    "labelKey": "Corporate",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "IT",
                    "labelKey": "IT",
                    "value": "0",
                    "filter": null
                }
            ]
        },
        {
            "id": "Completed",
            "labelKey": "Completed",
            "data": [
                {
                    "id": "OneTrust",
                    "labelKey": "OneTrust",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "HR",
                    "labelKey": "HR",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "Marketing",
                    "labelKey": "Marketing",
                    "value": "2",
                    "filter": null
                },
                {
                    "id": "Vyond",
                    "labelKey": "Vyond",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "Corporate",
                    "labelKey": "Corporate",
                    "value": "2",
                    "filter": null
                },
                {
                    "id": "IT",
                    "labelKey": "IT",
                    "value": "2",
                    "filter": null
                }
            ]
        },
        {
            "id": "In Progress",
            "labelKey": "In Progress",
            "data": [
                {
                    "id": "OneTrust",
                    "labelKey": "OneTrust",
                    "value": "4",
                    "filter": null
                },
                {
                    "id": "HR",
                    "labelKey": "HR",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "Marketing",
                    "labelKey": "Marketing",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "Vyond",
                    "labelKey": "Vyond",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "Corporate",
                    "labelKey": "Corporate",
                    "value": "4",
                    "filter": null
                },
                {
                    "id": "IT",
                    "labelKey": "IT",
                    "value": "1",
                    "filter": null
                }
            ]
        }
    ],
    "nameKey": null,
    "filters": [
        {
            "empty": true
        }
    ],
    "filter": null,
    "type": 60,
    "version": 0,
    "name": "Assessment Status Across Business",
    "id": "5ea8f013572a5500192d6283",
    "showOtherGroup": false,
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
        "attributeKey": "organization",
        "attributeEntityType": "dynamicAttributes"
    },
    "secondaryGroupBy": {
        "reportableType": {
            "entityType": "ASSESSMENT",
            "reportSubType": "00000000-0000-0000-0000-000000000000"
        },
        "attributeKey": "state",
        "attributeEntityType": "attribute"
    },
    "timeline": null,
    "lastModifiedDate": "2020-04-29T03:22:00.786+0000",
    "lastModifiedBy": "286c8443-5d9a-4da5-99cc-c67e5b034ec6",
    "createDT": "2020-04-29T03:10:11.939+0000",
    "frequency": null
},

{
    "data": [
        {
            "id": "Critical",
            "labelKey": "VendorsVendorCriticalityCritical",
            "value": "2",
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
            "value": "2",
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
}

]