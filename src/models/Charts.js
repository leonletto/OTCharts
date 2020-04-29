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
                    "id": "Quentin Bourne",
                    "labelKey": "Quentin Bourne",
                    "value": "2",
                    "filter": null
                },
                {
                    "id": "Jeanne Lee",
                    "labelKey": "Jeanne Lee",
                    "value": "2",
                    "filter": null
                },
                {
                    "id": "David Franc",
                    "labelKey": "David Franc",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "Catherine Williams",
                    "labelKey": "Catherine Williams",
                    "value": "3",
                    "filter": null
                }
            ]
        },
        {
            "id": "Not Started",
            "labelKey": "Not Started",
            "data": [
                {
                    "id": "Quentin Bourne",
                    "labelKey": "Quentin Bourne",
                    "value": "0",
                    "filter": null
                },
                {
                    "id": "Jeanne Lee",
                    "labelKey": "Jeanne Lee",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "David Franc",
                    "labelKey": "David Franc",
                    "value": "0",
                    "filter": null
                },
                {
                    "id": "Catherine Williams",
                    "labelKey": "Catherine Williams",
                    "value": "2",
                    "filter": null
                }
            ]
        },
        {
            "id": "Completed",
            "labelKey": "Completed",
            "data": [
                {
                    "id": "Quentin Bourne",
                    "labelKey": "Quentin Bourne",
                    "value": "3",
                    "filter": null
                },
                {
                    "id": "Jeanne Lee",
                    "labelKey": "Jeanne Lee",
                    "value": "2",
                    "filter": null
                },
                {
                    "id": "David Franc",
                    "labelKey": "David Franc",
                    "value": "1",
                    "filter": null
                },
                {
                    "id": "Catherine Williams",
                    "labelKey": "Catherine Williams",
                    "value": "3",
                    "filter": null
                }
            ]
        },
        {
            "id": "In Progress",
            "labelKey": "In Progress",
            "data": [
                {
                    "id": "Quentin Bourne",
                    "labelKey": "Quentin Bourne",
                    "value": "2",
                    "filter": null
                },
                {
                    "id": "Jeanne Lee",
                    "labelKey": "Jeanne Lee",
                    "value": "3",
                    "filter": null
                },
                {
                    "id": "David Franc",
                    "labelKey": "David Franc",
                    "value": "3",
                    "filter": null
                },
                {
                    "id": "Catherine Williams",
                    "labelKey": "Catherine Williams",
                    "value": "4",
                    "filter": null
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
    "type": 60,
    "version": 0,
    "lastModifiedDate": "2020-04-29T07:39:20.682+0000",
    "lastModifiedBy": "286c8443-5d9a-4da5-99cc-c67e5b034ec6",
    "new": false,
    "id": "5ea92e0cafd5c8000d398382",
    "primaryReportableType": {
        "entityType": "INVENTORY",
        "reportSubType": "50"
    },
    "idBasedFilter": false,
    "groupBy": {
        "reportableType": {
            "entityType": "INVENTORY",
            "reportSubType": "50"
        },
        "attributeKey": "owner",
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
    "showOtherGroup": true,
    "aggregate": {
        "function": "COUNT",
        "field": {
            "value": null,
            "valueKey": null
        }
    },
    "timeline": null,
    "frequency": null,
    "createDT": "2020-04-29T07:34:36.085+0000",
    "name": "Assessment Status Across Business"
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