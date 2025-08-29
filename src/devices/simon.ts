import * as m from "../lib/modernExtend";
import {deviceEndpoints, light} from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";

const extend_1g_nn = [
    m.deviceEndpoints({endpoints: {Switch: 1}}),
    m.onOff({endpointNames: ["Switch"], configureReporting: false, powerOnBehavior: false}),
];
const extend_1g_n = [
    m.deviceEndpoints({endpoints: {Switch: 1}}),
    m.onOff({endpointNames: ["Switch"], configureReporting: true, powerOnBehavior: false}),
];
const extend_2g_nn = [
    m.deviceEndpoints({endpoints: {left: 1, right: 2}}),
    m.onOff({powerOnBehavior: false, configureReporting: false, endpointNames: ["left", "right"]}),
];
const extend_2g_n = [
    m.deviceEndpoints({endpoints: {left: 1, right: 2}}),
    m.onOff({powerOnBehavior: false, configureReporting: true, endpointNames: ["left", "right"]}),
];
const extend_3g_nn = [
    m.deviceEndpoints({endpoints: {left: 1, middle: 2, right: 3}}),
    m.onOff({powerOnBehavior: false, endpointNames: ["left", "middle", "right"], configureReporting: false}),
];
const extend_3g_n = [
    m.deviceEndpoints({endpoints: {left: 1, middle: 2, right: 3}}),
    m.onOff({powerOnBehavior: false, endpointNames: ["left", "middle", "right"], configureReporting: true}),
];
const extend_4g_n = [
    m.deviceEndpoints({endpoints: {bt_l: 1, tl: 2, tr: 3, bt_r: 4}}),
    m.onOff({powerOnBehavior: false, endpointNames: ["bt_l", "tl", "tr", "bt_r"]}),
];

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["SM0502"],
        model: "SM0502",
        vendor: "SIMON",
        description: "i7 2-gang smart dimming switch",
        extend: [deviceEndpoints({endpoints: {left: 1, right: 2}}), light({endpointNames: ["left", "right"]})],
    },
    {
        fingerprint: [
            {
                type: "EndDevice",
                manufacturerName: "_TZ2000_s93al43ewlu7wzwi",
                modelID: "S2100-1001",
                endpoints: [{ID: 1, profileID: 260, deviceID: 259, inputClusters: [0, 2, 3, 4, 5, 6], outputClusters: [25]}],
            },
        ],
        model: "70E850TY",
        vendor: "SIMON",
        description: "i7 1 Gang Smart Switch (Non-neutral)",
        extend: extend_1g_nn,
        meta: {disableDefaultResponse: true},
        whiteLabel: [{vendor: "SIMON", model: "S2100-1001"}],
    },
    {
        fingerprint: [
            {
                type: "EndDevice",
                manufacturerName: "_TZ2000_zzk5p7jx29mq7nym",
                modelID: "S2100-1002",
                endpoints: [
                    {ID: 1, profileID: 260, deviceID: 259, inputClusters: [0, 2, 3, 4, 5, 6], outputClusters: [25]},
                    {ID: 2, profileID: 260, deviceID: 259, inputClusters: [0, 2, 3, 4, 5, 6], outputClusters: [25]},
                ],
            },
        ],
        model: "70E851TY",
        vendor: "SIMON",
        description: "i7 2 Gang Smart Switch (Non-neutral)",
        extend: extend_2g_nn,
        meta: {disableDefaultResponse: true},
        whiteLabel: [{vendor: "SIMON", model: "S2100-1002"}],
    },
    {
        fingerprint: [
            {
                type: "EndDevice",
                manufacturerName: "_TZ2000_p4vghfngci5te7ol",
                modelID: "S2100-1003",
                endpoints: [
                    {ID: 1, profileID: 260, deviceID: 259, inputClusters: [0, 2, 3, 4, 5, 6], outputClusters: [25]},
                    {ID: 2, profileID: 260, deviceID: 259, inputClusters: [0, 2, 3, 4, 5, 6], outputClusters: [25]},
                    {ID: 3, profileID: 260, deviceID: 259, inputClusters: [0, 2, 3, 4, 5, 6], outputClusters: [25]},
                ],
            },
        ],
        model: "70E852TY",
        vendor: "SIMON",
        description: "i7 3 Gang Smart Switch (Non-neutral)",
        extend: extend_3g_nn,
        meta: {disableDefaultResponse: true},
        whiteLabel: [{vendor: "SIMON", model: "S2100-1003"}],
    },
    {
        fingerprint: [
            {
                type: "Router",
                manufacturerName: "_TZ2000_sayvzx8wgxqoxfuj",
                modelID: "S2100-1001",
                endpoints: [
                    {ID: 1, profileID: 260, deviceID: 259, inputClusters: [0, 3, 4, 5, 6, 64598], outputClusters: [25]},
                    {ID: 242, profileID: 41440, deviceID: 97, inputClusters: [], outputClusters: [33]},
                ],
            },
        ],
        model: "70E838TY",
        vendor: "SIMON",
        description: "i7 1 Gang Smart Switch (Neutral)",
        extend: extend_1g_n,
        meta: {disableDefaultResponse: true},
        whiteLabel: [{vendor: "SIMON", model: "S2100-1001"}],
    },
    {
        fingerprint: [
            {
                type: "Router",
                manufacturerName: "_TZ2000_vvxwtxzf96vvarzj",
                modelID: "S2100-1002",
                endpoints: [
                    {ID: 1, profileID: 260, deviceID: 259, inputClusters: [0, 3, 4, 5, 6, 64598], outputClusters: [25]},
                    {ID: 2, profileID: 260, deviceID: 259, inputClusters: [0, 3, 4, 5, 6, 64598], outputClusters: [25]},
                    {ID: 242, profileID: 41440, deviceID: 97, inputClusters: [], outputClusters: [33]},
                ],
            },
        ],
        model: "70E839TY",
        vendor: "SIMON",
        description: "i7 2 Gang Smart Switch (Neutral)",
        extend: extend_2g_n,
        meta: {disableDefaultResponse: true},
        whiteLabel: [{vendor: "SIMON", model: "S2100-1002"}],
    },
    {
        fingerprint: [
            {
                type: "Router",
                manufacturerName: "_TZ2000_bi57zocaqionffns",
                modelID: "S2100-1003",
                endpoints: [
                    {ID: 1, profileID: 260, deviceID: 259, inputClusters: [0, 3, 4, 5, 6, 64598], outputClusters: [25]},
                    {ID: 2, profileID: 260, deviceID: 259, inputClusters: [0, 3, 4, 5, 6, 64598], outputClusters: [25]},
                    {ID: 3, profileID: 260, deviceID: 259, inputClusters: [0, 3, 4, 5, 6, 64598], outputClusters: [25]},
                    {ID: 242, profileID: 41440, deviceID: 97, inputClusters: [], outputClusters: [33]},
                ],
            },
        ],
        model: "70E840TY",
        vendor: "SIMON",
        description: "i7 3 Gang Smart Switch (Neutral)",
        extend: extend_3g_n,
        meta: {disableDefaultResponse: true},
        whiteLabel: [{vendor: "SIMON", model: "S2100-1003"}],
    },
    {
        fingerprint: [
            {
                type: "Router",
                manufacturerName: "_TZ2000_o1yvtxphiwt5cwif",
                modelID: "S2100-1004",
                endpoints: [
                    {ID: 1, profileID: 260, deviceID: 259, inputClusters: [0, 3, 4, 5, 6, 64598], outputClusters: [25]},
                    {ID: 2, profileID: 260, deviceID: 259, inputClusters: [0, 3, 4, 5, 6, 64598], outputClusters: [25]},
                    {ID: 3, profileID: 260, deviceID: 259, inputClusters: [0, 3, 4, 5, 6, 64598], outputClusters: [25]},
                    {ID: 4, profileID: 260, deviceID: 259, inputClusters: [0, 3, 4, 5, 6, 64598], outputClusters: [25]},
                    {ID: 242, profileID: 41440, deviceID: 97, inputClusters: [], outputClusters: [33]},
                ],
            },
        ],
        model: "70E841TY",
        vendor: "SIMON",
        description: "i7 4 Gang Smart Switch (Neutral)",
        extend: extend_4g_n,
        meta: {disableDefaultResponse: true},
        whiteLabel: [{vendor: "SIMON", model: "S2100-1004"}],
    },
];
