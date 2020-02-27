import React from 'react';

const makeGraphic = (props, svg) => {
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 15 25" >
                {svg}
            </svg>
        </React.Fragment>
    )
}

export default function Rank(props) {
    let c = `#000`;
    let r = `R_A`;
    const {
        color,
        rank
    } = props;
    if (color) c = color
    if (rank) r = rank

    switch (rank) {

        case `R_A`:
            return makeGraphic(props, <g fill={c}>
                <path d="M12.562,21.793 L8.495,0.026 L6.306,1.77635684e-15 L6.31,0.015 L5.765,0.012 L1.708,21.793 L0.003,21.794 L8.8817842e-16,24.096 L5.45,24.096 L5.453,21.793 L3.881,21.793 L4.505,18.459 L9.767,18.451 L10.391,21.793 L8.724,21.791 L8.72,24.094 L14.17,24.096 L14.173,21.793 L12.562,21.793 Z M4.974,15.959 L7.141,4.398 L9.3,15.953 L4.974,15.959 L4.974,15.959 Z"></path>
            </g>)

        case `R_2`:
            return makeGraphic(props, <g fill={c}>
                <path d="M14.153,20.3230573 L11.877,20.3130573 L11.87,21.7620573 L2.309,21.7610573 C2.358,21.4290573 2.502,21.0070573 2.772,20.5230573 C3.26,19.6320573 4.121,18.5870573 5.158,17.5500573 C6.194,16.5120573 7.399,15.4740573 8.574,14.5280573 L8.578,14.5240573 L8.588,14.5170573 C10.008,13.3350573 11.219,12.4600573 12.205,11.4190573 C12.694,10.8970573 13.125,10.3250573 13.448,9.65905729 C13.77,8.99505729 13.977,8.24905729 14.053,7.42505729 C14.071,7.25105729 14.078,7.06505729 14.078,6.86305729 C14.078,6.30205729 14.012,5.62405729 13.824,4.89205729 C13.545,3.80005729 12.979,2.56905729 11.897,1.60105729 C10.817,0.628057292 9.245,-0.00694270766 7.221,0 C5.596,-0.00294270766 4.26,0.419057292 3.242,1.10705729 C2.479,1.62005729 1.901,2.26805729 1.473,2.93605729 C0.834,3.94205729 0.522,4.99105729 0.358,5.83105729 C0.196,6.67305729 0.182,7.31505729 0.182,7.52605729 C0.182,7.56405729 0.182,7.58905729 0.182,7.59905729 L2.157,7.54605729 L2.459,7.54205729 C2.459,7.54005729 2.459,7.53405729 2.459,7.52605729 C2.453,7.34905729 2.5,5.90505729 3.125,4.66705729 C3.434,4.04605729 3.865,3.47905729 4.492,3.05705729 C5.12,2.64005729 5.965,2.33705729 7.221,2.33305729 C8.28,2.33505729 9.053,2.54005729 9.639,2.83905729 C10.512,3.28805729 11.026,3.96005729 11.36,4.72005729 C11.692,5.47205729 11.803,6.30805729 11.801,6.86305729 C11.801,6.99505729 11.795,7.11005729 11.787,7.20005729 C11.731,7.77605729 11.602,8.21605729 11.408,8.62005729 C11.117,9.22205729 10.643,9.77505729 9.922,10.4230573 C9.207,11.0650573 8.268,11.7820573 7.16,12.6980573 C5.541,14.0030573 3.84,15.4910573 2.494,17.0240573 C1.819,17.7930573 1.233,18.5730573 0.789,19.3760573 C0.373,20.1340573 0.082,20.9220573 0.024,21.7610573 L0.016,21.7610573 L0.008,21.9050573 L0.008,21.9070573 L0.006,21.9130573 L1.42108547e-14,24.0950573 L14.157,24.0950573 L14.157,23.0950573 L14.153,20.3230573"></path>
            </g>)

        case `R_3`:
            return makeGraphic(props, <g fill={c}>
                <path d="M8.144,7.788 L14.021,2.54 L14.041,2.54 L14.041,2.522 L14.046,2.517 L14.041,2.511 L14.041,-1.77635684e-15 L0.511,0.001 L0.518,1.813 L0.518,4.069 L2.596,4.069 L2.596,2.528 L10.509,2.536 L2.741,9.731 L3.861,11.39 C4.708,10.61 5.771,10.145 6.939,10.145 C8.309,10.145 9.682,10.786 10.582,11.825 C11.478,12.866 12.03,14.292 12.031,15.878 C12.03,17.466 11.478,18.89 10.582,19.932 C9.682,20.972 8.309,21.61 6.939,21.61 C5.569,21.61 4.338,20.972 3.439,19.932 C2.791,19.179 2.322,18.224 2.113,17.153 L-8.8817842e-16,17.589 C0.68,21.306 3.529,24.093 6.939,24.095 C10.856,24.093 14.173,20.417 14.174,15.878 C14.173,11.815 11.512,8.45 8.144,7.788"></path>
            </g>)

        case `R_4`:
            return makeGraphic(props, <g fill={c}>
                <path d="M14.173,17.958 L14.173,15.566 L11.195,15.566 L11.188,0 L8.954,0 L8.954,0.001 L8.877,0 L8.8817842e-16,15.566 L8.8817842e-16,17.958 L8.961,17.958 L8.963,21.697 L7.466,21.703 L7.473,24.094 L12.71,24.075 L12.702,21.683 L11.198,21.689 L11.196,17.958 L14.173,17.958 Z M2.619,15.566 L8.956,4.432 L8.96,15.566 L2.619,15.566 L2.619,15.566 Z"></path>
            </g>)

        case `R_5`:
            return makeGraphic(props, <g fill={c}>
                <path d="M12.065,8.96 C10.752,7.339 8.872,6.284 6.778,6.286 C5.468,6.284 4.242,6.702 3.186,7.407 L3.182,2.376 L12.548,2.376 L12.548,0 L0.943,0 L0.943,0.831 L0.931,0.831 L0.938,10.563 L3.188,10.563 C3.945,9.474 5.59,8.663 6.778,8.661 C8.145,8.663 9.399,9.335 10.356,10.507 C11.307,11.677 11.923,13.335 11.922,15.19 C11.923,17.046 11.307,18.703 10.356,19.873 C9.399,21.044 8.145,21.718 6.778,21.718 C5.765,21.718 4.827,21.353 4.011,20.69 C3.198,20.03 2.521,19.067 2.102,17.911 L8.8817842e-16,18.762 C0.559,20.298 1.469,21.622 2.636,22.573 C3.801,23.522 5.237,24.096 6.778,24.0950013 C6.779,24.0950013 6.781,24.0950013 6.782,24.0950013 C8.875,24.0950013 10.754,23.04 12.065,21.42 C13.382,19.796 14.172,17.597 14.173,15.19 C14.172,12.784 13.382,10.584 12.065,8.96"></path>
            </g>)

        case `R_6`:
            return makeGraphic(props, <g fill={c}>
                <path d="M12.351,9.31801664 C11.746,8.52601664 10.991,7.87301664 10.115,7.42601664 C9.239,6.97801664 8.244,6.73601664 7.174,6.73701664 C7.146,6.73701664 7.12,6.73801664 7.099,6.73801664 C6.025,6.74901664 5.024,7.02101664 4.15,7.50601664 C3.568,7.82701664 3.049,8.24201664 2.588,8.72501664 C2.629,8.47601664 2.672,8.23601664 2.715,8.01601664 C2.847,7.33901664 2.978,6.80201664 3.074,6.43901664 C3.123,6.25901664 3.162,6.12101664 3.189,6.03001664 C3.202,5.98601664 3.212,5.95301664 3.218,5.93401664 C3.222,5.92301664 3.225,5.91601664 3.226,5.91201664 C3.226,5.91101664 3.227,5.91001664 3.227,5.91001664 L3.227,5.90801664 L3.237,5.87901664 L3.243,5.85301664 L3.245,5.84801664 L3.245,5.84701664 C3.268,5.76401664 3.541,4.91101664 4.157,4.11101664 C4.478,3.69501664 4.884,3.29201664 5.395,2.98301664 C5.906,2.67501664 6.524,2.45201664 7.319,2.40701664 C7.431,2.40101664 7.537,2.39901664 7.642,2.39901664 C9.054,2.40301664 9.981,2.90101664 10.594,3.38601664 C10.898,3.62901664 11.117,3.87001664 11.254,4.04101664 C11.321,4.12701664 11.369,4.19501664 11.397,4.23601664 C11.411,4.25701664 11.419,4.27001664 11.422,4.27501664 C11.425,4.27801664 11.425,4.27801664 11.425,4.27801664 L11.968,3.89101664 L13.271,2.99601664 C13.219,2.90601664 12.795,2.17801664 11.881,1.44601664 C10.972,0.714016636 9.549,-0.00398336442 7.642,7.10542736e-15 C7.502,7.10542736e-15 7.357,0.00301663558 7.21,0.0120166356 C6.055,0.0720166356 5.063,0.427016636 4.265,0.928016636 C3.062,1.68101664 2.294,2.73001664 1.824,3.57701664 C1.396,4.35101664 1.206,4.97001664 1.16,5.12701664 C1.047,5.48701664 0.002,8.87401664 -1.0658141e-14,13.5030166 C-1.0658141e-14,14.3530166 0.044,15.2510166 0.128,16.1750166 C0.224,18.2830166 0.886,20.1870166 2.027,21.6100166 C3.254,23.1490166 5.053,24.0940196 7.087,24.0940196 C7.094,24.0940196 7.102,24.0940196 7.108,24.0940196 C8.18,24.0950166 9.181,23.8390166 10.061,23.3720166 C11.384,22.6720166 12.423,21.5080166 13.116,20.1050166 C13.812,18.7000166 14.173,17.0530166 14.174,15.3190166 C14.173,13.0330166 13.559,10.9090166 12.351,9.31801664 Z M10.624,19.8930166 C10.198,20.4570166 9.692,20.9020166 9.11,21.2110166 C8.528,21.5190166 7.867,21.6940166 7.108,21.6950166 C5.666,21.6880166 4.519,21.0730166 3.668,20.0240166 C2.922,19.0950166 2.423,17.7990166 2.317,16.2620166 L2.328,16.2600166 C2.318,16.1670166 2.315,16.0780166 2.307,15.9860166 C2.303,15.8710166 2.29399408,15.7590166 2.29399408,15.6420166 C2.292,13.8130166 2.797,12.1560166 3.637,11.0030166 C4.058,10.4240166 4.558,9.96701664 5.133,9.64801664 C5.709,9.33101664 6.363,9.14601664 7.119,9.13801664 C7.141,9.13801664 7.159,9.13701664 7.174,9.13701664 C7.95,9.13801664 8.615,9.30801664 9.192,9.60101664 C10.056,10.0440166 10.737,10.7740166 11.225,11.7530166 C11.711,12.7300166 11.9870058,13.9570166 11.9870058,15.3190166 C11.989,17.1420166 11.475,18.7660166 10.624,19.8930166 L10.624,19.8930166 Z"></path>
            </g>)

        case `R_7`:
            return makeGraphic(props, <g fill={c}>
                <path d="M0.002,-2.66453526e-14 L0.002,1.441 L8.8817842e-16,1.441 L8.8817842e-16,3.894 L2.227,3.893 L2.225,2.406 L11.57,2.406 C10.121,5.062 6.217,13.033 4.805,24.094 L7.043,24.093 C7.873,17.57 9.296,12.467 10.922,8.682 C11.735,6.791 12.494,5.31 13.047,4.309 C13.323,3.807 13.548,3.425 13.702,3.172 C13.864,2.906 14.134,2.467 14.173,2.406 L14.173,-2.66453526e-14 L0.002,-2.66453526e-14"></path>
            </g>)

        case `R_8`:
            return makeGraphic(props, <g fill={c}>
                <path d="M12.0530009,11.937 C11.6840009,11.573 11.2730009,11.257 10.8340009,10.983 C11.0210009,10.838 11.2020009,10.685 11.3720009,10.518 C12.4870009,9.428 13.2080009,7.867 13.2070009,6.136 C13.2080009,4.404 12.4870009,2.844 11.3720009,1.753 C10.2570009,0.658 8.7420009,-2.66453526e-14 7.0870009,-2.66453526e-14 C5.4320009,-2.66453526e-14 3.9170009,0.658 2.8020009,1.753 C1.6880009,2.844 0.967000899,4.404 0.968000899,6.136 C0.967000899,7.867 1.6880009,9.428 2.8020009,10.518 C2.9720009,10.685 3.1540009,10.838 3.3400009,10.983 C2.9020009,11.257 2.4910009,11.573 2.1210009,11.937 C0.832000899,13.199 -0.000999100638,15.002 -5.32907052e-14,17 C-0.000999100638,18.998 0.832000899,20.8 2.1210009,22.063 C3.4110009,23.331 5.1670009,24.093 7.0870009,24.094 C9.0060009,24.093 10.7630009,23.331 12.0530009,22.063 C13.3430009,20.8 14.1760009,18.998 14.173009,17 C14.1760009,15.002 13.3430009,13.199 12.0530009,11.937 Z M4.2610009,3.53 C4.9660009,2.837 5.9640009,2.38899833 7.0850009,2.38899833 L7.0870009,2.38899833 C8.2100009,2.388 9.2070009,2.837 9.9140009,3.53 C10.6190009,4.228 11.0220009,5.138 11.0230009,6.136 C11.0220009,7.134 10.6190009,8.044 9.9140009,8.741 C9.2070009,9.434 8.2100009,9.884 7.0870009,9.88300166 C5.9650009,9.884 4.9660009,9.434 4.2610009,8.741 C3.5570009,8.044 3.1530009,7.134 3.1520009,6.136 C3.1530009,5.138 3.5570009,4.228 4.2610009,3.53 Z M10.5040009,20.177 C9.6500009,21.018 8.4410009,21.559 7.0870009,21.5580014 C5.7340009,21.559 4.5250009,21.018 3.6690009,20.177 C2.8140009,19.33 2.3200009,18.22 2.3180009,17 C2.3200009,15.779 2.8140009,14.668 3.6690009,13.822 C4.5250009,12.981 5.7310009,12.4399986 7.0850009,12.4399986 L7.0870009,12.4399986 C8.4410009,12.439 9.6500009,12.981 10.5040009,13.822 C11.3610009,14.668 11.8560009,15.779 11.8570009,17 C11.8560009,18.22 11.3610009,19.33 10.5040009,20.177 L10.5040009,20.177 Z"></path>
            </g>)

        case `R_9`:
            return makeGraphic(props, <g fill={c}>
                <path d="M13.978,7.375 C13.85,5.439 13.204,3.694 12.12,2.378 C10.915,0.905 9.149,-1.77635684e-15 7.151,-1.77635684e-15 C7.145,-1.77635684e-15 7.138,-1.77635684e-15 7.131,-1.77635684e-15 C6.079,-1.77635684e-15 5.095,0.244 4.23,0.691 C2.931,1.362 1.912,2.477 1.23,3.82 C0.548,5.165 0.193,6.741 0.191,8.4 C0.193,10.589 0.796,12.622 1.982,14.144 C2.576,14.903 3.316,15.528 4.178,15.957 C5.038,16.386 6.015,16.616 7.066,16.616 C7.094,16.616 7.12,16.616 7.141,16.615 C8.196,16.605 9.178,16.345 10.036,15.88 C10.766,15.487 11.4,14.948 11.936,14.311 C11.868,15.916 11.612,17.836 10.878,19.243 C10.496,19.982 10.006,20.581 9.341,21.015 C8.673,21.445 7.805,21.73 6.588,21.733 C5.702,21.731 5.007,21.524 4.431,21.221 C3.571,20.767 2.967,20.068 2.582,19.47 C2.389,19.172 2.253,18.903 2.169,18.717 C2.126,18.625 2.097,18.552 2.079,18.506 C2.069,18.484 2.064,18.469 2.061,18.461 L2.036,18.472 L8.8817842e-16,19.265 C0.033,19.354 0.416,20.497 1.428,21.688 C1.933,22.281 2.604,22.885 3.465,23.341 C4.324,23.797 5.374,24.096 6.588,24.0950025 C6.592,24.0950025 6.597,24.0950025 6.601,24.0950025 C8.136,24.0950025 9.433,23.713 10.47,23.039 C11.252,22.533 11.875,21.871 12.357,21.141 C13.08,20.043 13.497,18.801 13.753,17.592 C14.008,16.381 14.1,15.195 14.138,14.183 C14.164,13.477 14.173,12.789 14.173,12.141 C14.173,9.758 14.007,7.71 13.978,7.375 Z M10.54,12.533 C10.126,13.087 9.636,13.524 9.07,13.829 C8.505,14.133 7.862,14.31 7.12,14.318 C7.098,14.318 7.081,14.319 7.066,14.319 C6.305,14.318 5.649,14.156 5.085,13.875 C4.236,13.451 3.567,12.752 3.088,11.814 C2.611,10.879 2.338,9.705 2.33998909,8.4 C2.338,6.656 2.842,5.102 3.678,4.023 C4.095,3.482 4.592,3.056 5.165,2.761 C5.737,2.466 6.384,2.299 7.131,2.298 C8.548,2.304 9.674,2.893 10.509,3.897 C11.34,4.903 11.857,6.36 11.858006,8.092 C11.86,9.842 11.364,11.429 10.54,12.533 L10.54,12.533 Z"></path>
            </g>)

        case `R_10`:
            return makeGraphic(props, <g fill={c}>
                <polygon points="2.22044605e-16 24.058 2.182 24.058 2.182 1.77635684e-15 2.22044605e-16 1.77635684e-15"></polygon>
                <path d="M6.74,22.777 C5.946,21.961 5.437,20.797 5.43799853,19.516 L5.43799853,4.579 C5.437,3.297 5.946,2.134 6.74,1.317 C7.534,0.497 8.621,2.84217094e-14 9.806,2.84217094e-14 C10.991,2.84217094e-14 12.078,0.497 12.872,1.317 C13.665,2.134 14.174,3.297 14.1730015,4.579 L14.1730015,19.516 C14.174,20.797 13.665,21.961 12.872,22.777 C12.078,23.598 10.991,24.095 9.806,24.095 C8.621,24.095 7.534,23.598 6.74,22.777 Z M8.237,3.054 C7.844,3.462 7.62,3.991 7.619,4.579 L7.619,19.516 C7.62,20.104 7.844,20.632 8.237,21.041 C8.629,21.446 9.18,21.707 9.806,21.707 C10.43,21.707 10.982,21.446 11.375,21.041 C11.767,20.632 11.991,20.104 11.993,19.516 L11.993,4.579 C11.991,3.991 11.767,3.462 11.375,3.054 C10.982,2.649 10.43,2.388 9.806,2.388 C9.18,2.388 8.629,2.649 8.237,3.054 L8.237,3.054 Z"></path>
            </g>)

        case `R_J`:
            return makeGraphic(props, <g fill={c}>
                <path d="M14.172,1.42108547e-14 L5.911,1.42108547e-14 L5.911,2.341 L9.048,2.341 L9.058,17.749 L9.062,17.804 C9.063,17.821 9.068,17.896 9.068,18.013 C9.068,18.234 9.051,18.608 8.975,19.024 C8.863,19.653 8.618,20.343 8.166,20.84 C7.935,21.092 7.654,21.309 7.264,21.475 C6.875,21.64 6.373,21.753 5.712,21.753 C5.701,21.753 5.69,21.753 5.679,21.753 C4.728,21.746 4.095,21.515 3.633,21.21 C3.289,20.979 3.03,20.695 2.823,20.376 C2.515,19.9 2.333,19.332 2.234,18.839 C2.137,18.347 2.126,17.936 2.128,17.802 C2.128,17.782 2.128,17.769 2.128,17.762 C2.128,17.759 2.128,17.757 2.128,17.757 L2.128,17.752 L2.179,15.14 L0.051,15.088 L1.24344979e-14,17.679 C1.24344979e-14,17.703 1.24344979e-14,17.745 1.24344979e-14,17.802 C0.004,18.254 0.038,19.693 0.774,21.179 C1.142,21.918 1.709,22.665 2.531,23.212 C3.35,23.761 4.403,24.09 5.671,24.095 L5.675,24.095 C5.687,24.095 5.7,24.095 5.712,24.095 C5.714,24.095 5.717,24.095 5.721,24.095 C6.892,24.095 7.875,23.818 8.656,23.337 C9.245,22.977 9.711,22.505 10.062,22.001 C10.59,21.243 10.866,20.424 11.017,19.715 C11.167,19.004 11.194,18.394 11.195,18.013 C11.195,17.855 11.19,17.735 11.186,17.666 L11.176,2.341 L14.171,2.341 L14.172,1.42108547e-14"></path>
            </g>)

        case `R_Q`:
            return makeGraphic(props, <g fill={c}>
                <path d="M8.158,20.865 C8.008,20.618 7.871,20.371 7.737,20.124 L6.263,20.124 C5.526,20.124 4.871,19.817 4.393,19.321 C3.917,18.823 3.629,18.154 3.628,17.405 L3.628,16.245 C3.523,16.221 3.422,16.193 3.316,16.173 C2.672,16.049 2.014,15.993 1.466,15.972 L1.466,17.405 C1.466,18.789 2.009,20.051 2.878,20.949 C3.743,21.851 4.946,22.408 6.26,22.41 L6.26,22.343 C6.261,22.343 6.261,22.343 6.263,22.343 L6.263,22.41 L7.904,22.41 C8.372,22.409 8.824,22.335 9.254,22.204 C9.219,22.173 9.187,22.148 9.152,22.117 C8.733,21.736 8.424,21.3 8.158,20.865"></path>
                <path d="M2.89,13.863 C3.131,13.893 3.378,13.934 3.628,13.981 L3.628,5.004 C3.629,4.255 3.916,3.586 4.393,3.088 C4.871,2.593 5.526,2.285 6.263,2.285 L7.904,2.285 C8.64,2.285 9.295,2.593 9.773,3.088 C10.251,3.586 10.538,4.255 10.539,5.004 L10.539,17.405 C10.538,18.154 10.251,18.823 9.773,19.321 C9.764,19.331 9.753,19.34 9.743,19.35 C9.805,19.459 9.866,19.567 9.925,19.664 C10.131,20.001 10.323,20.254 10.525,20.436 C10.781,20.669 11.009,20.859 11.217,21.018 C11.24,20.995 11.266,20.974 11.29,20.949 C12.158,20.051 12.702,18.789 12.702,17.405 L12.702,5.004 C12.702,3.619 12.158,2.359 11.29,1.46 C10.424,0.559 9.222,0.001 7.906,1.42108547e-14 L6.263,1.42108547e-14 C4.946,0.001 3.743,0.559 2.878,1.46 C2.009,2.359 1.466,3.619 1.466,5.004 L1.466,13.752 C1.889,13.767 2.372,13.797 2.89,13.863"></path>
                <path d="M12.304,21.653 C12.065,21.565 11.823,21.443 11.535,21.25 C11.435,21.184 11.328,21.104 11.217,21.018 C11.009,20.859 10.781,20.669 10.525,20.436 C10.323,20.254 10.131,20.001 9.925,19.664 C9.866,19.567 9.805,19.459 9.743,19.35 C9.484,18.889 9.201,18.328 8.828,17.713 C8.364,16.953 7.754,16.122 6.863,15.355 C6.398,14.955 5.874,14.672 5.334,14.456 C4.773,14.233 4.192,14.086 3.628,13.981 C3.378,13.934 3.131,13.893 2.89,13.863 C2.372,13.797 1.889,13.767 1.466,13.752 C1.25,13.745 1.044,13.74 0.867,13.74 C0.349,13.74 0.018,13.764 8.8817842e-16,13.766 L0.143,15.979 C0.143,15.979 0.143,15.979 0.151,15.979 C0.198,15.975 0.468,15.959 0.867,15.959 C1.043,15.959 1.246,15.963 1.466,15.972 C2.014,15.993 2.672,16.049 3.316,16.173 C3.422,16.193 3.523,16.221 3.628,16.245 C3.967,16.323 4.298,16.414 4.592,16.531 C4.976,16.685 5.301,16.871 5.532,17.072 C6.44,17.859 6.954,18.691 7.429,19.557 C7.533,19.744 7.635,19.935 7.737,20.124 C7.871,20.371 8.008,20.618 8.158,20.865 C8.424,21.3 8.733,21.736 9.152,22.117 C9.187,22.148 9.219,22.173 9.254,22.204 C9.658,22.565 10.036,22.873 10.407,23.122 C11.008,23.528 11.615,23.794 12.238,23.932 C12.862,24.07 13.478,24.093 14.173,24.094 L14.173,21.875 C13.303,21.876 12.777,21.826 12.304,21.653"></path>
            </g>)

        case `R_K`:
            return makeGraphic(props, <g fill={c}>
                <polyline points="8.299 10.464 12.419 2.318 14.172 2.318 14.174 1.42108547e-14 8.182 0.004 8.18 2.318 10.179 2.318 4.193 14.152 4.177 2.318 5.993 2.318 5.994 1.42108547e-14 0.002 0.004 -8.8817842e-16 2.318 2.338 2.318 2.364 21.778 0.002 21.779 -8.8817842e-16 24.095 5.993 24.095 5.994 21.776 4.204 21.777 4.199 18.569 7.125 12.783 10.351 21.778 8.182 21.779 8.18 24.095 14.172 24.095 14.174 21.776 12.356 21.777 8.299 10.464"></polyline>
            </g>)

        default: {
            return null
        }


    }
}

