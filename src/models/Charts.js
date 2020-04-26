module.exports.data = 
[
    {
    "data": [
        {
            "id": "In Progress",
            "labelKey": "In Progress",
            "value": "64",
            "filter": null
        },
        {
            "id": "Not Started",
            "labelKey": "Not Started",
            "value": "13",
            "filter": null
        },
        {
            "id": "Under Review",
            "labelKey": "Under Review",
            "value": "46",
            "filter": null
        }
    ],
    "datasets": null,
    "nameKey": null,
    "filters": [
        {
            "entityType": "ASSESSMENT",
            "criteria": {
                "AND": [
                    {
                        "columnId": "state",
                        "attributeKey": "state",
                        "entityType": "attribute",
                        "dataType": 30,
                        "operator": "EQ",
                        "values": [
                            "In Progress",
                            "Under Review",
                            "Not Started"
                        ]
                    }
                ]
            },
            "empty": false
        }
    ],
    "filter": null,
    "type": 10,
    "version": 0,
    "name": "Open Vendor Assessments by Stage",
    "id": "5e178d8d22ccee0013c0b1e5",
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
        "entityType": "ASSESSMENT",
        "reportSubType": "00000000-0000-0000-0000-000000000000"
    },
    "groupBy": {
        "reportableType": {
            "entityType": "ASSESSMENT",
            "reportSubType": "00000000-0000-0000-0000-000000000000"
        },
        "attributeKey": "state",
        "attributeEntityType": "attribute"
    },
    "secondaryGroupBy": null,
    "timeline": null,
    "lastModifiedDate": "2020-01-09T20:37:41.724+0000",
    "lastModifiedBy": "3e11339d-2e5c-4b64-96b0-982dc03780f5",
    "createDT": "2020-01-09T20:31:09.942+0000",
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
    "id": "5e17938422ccee0013c0b1eb",
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
    "lastModifiedDate": "2020-02-24T17:33:28.320+0000",
    "lastModifiedBy": "3e11339d-2e5c-4b64-96b0-982dc03780f5",
    "createDT": "2020-01-09T20:56:36.135+0000",
    "frequency": null
},
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
    "filters": [
        {
            "empty": true
        }
    ],
    "nameKey": null,
    "filter": null,
    "version": 0,
    "type": 10,
    "name": "Vendors By Region",
    "id": "5e1792d322ccee0013c0b1ea",
    "idBasedFilter": false,
    "groupBy": {
        "reportableType": {
            "entityType": "INVENTORY",
            "reportSubType": "50"
        },
        "attributeKey": "location",
        "attributeEntityType": "dynamicAttributes"
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
        "entityType": "INVENTORY",
        "reportSubType": "50"
    },
    "new": false,
    "timeline": null,
    "lastModifiedDate": "2020-01-09T20:53:47.682+0000",
    "lastModifiedBy": "3e11339d-2e5c-4b64-96b0-982dc03780f5",
    "frequency": null,
    "createDT": "2020-01-09T20:53:39.085+0000"
}
]