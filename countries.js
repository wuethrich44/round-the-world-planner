var countries = [
    {name: "Andorra", lat: 42.546245, lng: 1.601554},
    {name: "United Arab Emirates", lat: 23.424076, lng: 53.847818},
    {name: "Afghanistan", lat: 33.93911, lng: 67.709953},
    {name: "Antigua and Barbuda", lat: 17.060816, lng: -61.796428},
    {name: "Anguilla", lat: 18.220554, lng: -63.068615},
    {name: "Albania", lat: 41.153332, lng: 20.168331},
    {name: "Armenia", lat: 40.069099, lng: 45.038189},
    {name: "Netherlands Antilles", lat: 12.226079, lng: -69.060087},
    {name: "Angola", lat: -11.202692, lng: 17.873887},
    {name: "Antarctica", lat: -75.250973, lng: -0.071389},
    {name: "Argentina", lat: -38.416097, lng: -63.616672},
    {name: "American Samoa", lat: -14.270972, lng: -170.132217},
    {name: "Austria", lat: 47.516231, lng: 14.550072},
    {name: "Australia", lat: -25.274398, lng: 133.775136},
    {name: "Aruba", lat: 12.52111, lng: -69.968338},
    {name: "Azerbaijan", lat: 40.143105, lng: 47.576927},
    {name: "Bosnia and Herzegovina", lat: 43.915886, lng: 17.679076},
    {name: "Barbados", lat: 13.193887, lng: -59.543198},
    {name: "Bangladesh", lat: 23.684994, lng: 90.356331},
    {name: "Belgium", lat: 50.503887, lng: 4.469936},
    {name: "Burkina Faso", lat: 12.238333, lng: -1.561593},
    {name: "Bulgaria", lat: 42.733883, lng: 25.48583},
    {name: "Bahrain", lat: 25.930414, lng: 50.637772},
    {name: "Burundi", lat: -3.373056, lng: 29.918886},
    {name: "Benin", lat: 9.30769, lng: 2.315834},
    {name: "Bermuda", lat: 32.321384, lng: -64.75737},
    {name: "Brunei", lat: 4.535277, lng: 114.727669},
    {name: "Bolivia", lat: -16.290154, lng: -63.588653},
    {name: "Brazil", lat: -14.235004, lng: -51.92528},
    {name: "Bahamas", lat: 25.03428, lng: -77.39628},
    {name: "Bhutan", lat: 27.514162, lng: 90.433601},
    {name: "Bouvet Island", lat: -54.423199, lng: 3.413194},
    {name: "Botswana", lat: -22.328474, lng: 24.684866},
    {name: "Belarus", lat: 53.709807, lng: 27.953389},
    {name: "Belize", lat: 17.189877, lng: -88.49765},
    {name: "Canada", lat: 56.130366, lng: -106.346771},
    {name: "Cocos [Keeling] Islands", lat: -12.164165, lng: 96.870956},
    {name: "Congo [DRC]", lat: -4.038333, lng: 21.758664},
    {name: "Central African Republic", lat: 6.611111, lng: 20.939444},
    {name: "Congo [Republic]", lat: -0.228021, lng: 15.827659},
    {name: "Switzerland", lat: 46.818188, lng: 8.227512},
    {name: "Côte d'Ivoire", lat: 7.539989, lng: -5.54708},
    {name: "Cook Islands", lat: -21.236736, lng: -159.777671},
    {name: "Chile", lat: -35.675147, lng: -71.542969},
    {name: "Cameroon", lat: 7.369722, lng: 12.354722},
    {name: "China", lat: 35.86166, lng: 104.195397},
    {name: "Colombia", lat: 4.570868, lng: -74.297333},
    {name: "Costa Rica", lat: 9.748917, lng: -83.753428},
    {name: "Cuba", lat: 21.521757, lng: -77.781167},
    {name: "Cape Verde", lat: 16.002082, lng: -24.013197},
    {name: "Christmas Island", lat: -10.447525, lng: 105.690449},
    {name: "Cyprus", lat: 35.126413, lng: 33.429859},
    {name: "Czech Republic", lat: 49.817492, lng: 15.472962},
    {name: "Germany", lat: 51.165691, lng: 10.451526},
    {name: "Djibouti", lat: 11.825138, lng: 42.590275},
    {name: "Denmark", lat: 56.26392, lng: 9.501785},
    {name: "Dominica", lat: 15.414999, lng: -61.370976},
    {name: "Dominican Republic", lat: 18.735693, lng: -70.162651},
    {name: "Algeria", lat: 28.033886, lng: 1.659626},
    {name: "Ecuador", lat: -1.831239, lng: -78.183406},
    {name: "Estonia", lat: 58.595272, lng: 25.013607},
    {name: "Egypt", lat: 26.820553, lng: 30.802498},
    {name: "Western Sahara", lat: 24.215527, lng: -12.885834},
    {name: "Eritrea", lat: 15.179384, lng: 39.782334},
    {name: "Spain", lat: 40.463667, lng: -3.74922},
    {name: "Ethiopia", lat: 9.145, lng: 40.489673},
    {name: "Finland", lat: 61.92411, lng: 25.748151},
    {name: "Fiji", lat: -16.578193, lng: 179.414413},
    {name: "Falkland Islands [Islas Malvinas]", lat: -51.796253, lng: -59.523613},
    {name: "Micronesia", lat: 7.425554, lng: 150.550812},
    {name: "Faroe Islands", lat: 61.892635, lng: -6.911806},
    {name: "France", lat: 46.227638, lng: 2.213749},
    {name: "Gabon", lat: -0.803689, lng: 11.609444},
    {name: "United Kingdom", lat: 55.378051, lng: -3.435973},
    {name: "Grenada", lat: 12.262776, lng: -61.604171},
    {name: "Georgia", lat: 42.315407, lng: 43.356892},
    {name: "French Guiana", lat: 3.933889, lng: -53.125782},
    {name: "Guernsey", lat: 49.465691, lng: -2.585278},
    {name: "Ghana", lat: 7.946527, lng: -1.023194},
    {name: "Gibraltar", lat: 36.137741, lng: -5.345374},
    {name: "Greenland", lat: 71.706936, lng: -42.604303},
    {name: "Gambia", lat: 13.443182, lng: -15.310139},
    {name: "Guinea", lat: 9.945587, lng: -9.696645},
    {name: "Guadeloupe", lat: 16.995971, lng: -62.067641},
    {name: "Equatorial Guinea", lat: 1.650801, lng: 10.267895},
    {name: "Greece", lat: 39.074208, lng: 21.824312},
    {name: "South Georgia and the South Sandwic…", lat: -54.429579, lng: -36.587909},
    {name: "Guatemala", lat: 15.783471, lng: -90.230759},
    {name: "Guam", lat: 13.444304, lng: 144.793731},
    {name: "Guinea-Bissau", lat: 11.803749, lng: -15.180413},
    {name: "Guyana", lat: 4.860416, lng: -58.93018},
    {name: "Gaza Strip", lat: 31.354676, lng: 34.308825},
    {name: "Hong Kong", lat: 22.396428, lng: 114.109497},
    {name: "Heard Island and McDonald Islands", lat: -53.08181, lng: 73.504158},
    {name: "Honduras", lat: 15.199999, lng: -86.241905},
    {name: "Croatia", lat: 45.1, lng: 15.2},
    {name: "Haiti", lat: 18.971187, lng: -72.285215},
    {name: "Hungary", lat: 47.162494, lng: 19.503304},
    {name: "Indonesia", lat: -0.789275, lng: 113.921327},
    {name: "Ireland", lat: 53.41291, lng: -8.24389},
    {name: "Israel", lat: 31.046051, lng: 34.851612},
    {name: "Isle of Man", lat: 54.236107, lng: -4.548056},
    {name: "India", lat: 20.593684, lng: 78.96288},
    {name: "British Indian Ocean Territory", lat: -6.343194, lng: 71.876519},
    {name: "Iraq", lat: 33.223191, lng: 43.679291},
    {name: "Iran", lat: 32.427908, lng: 53.688046},
    {name: "Iceland", lat: 64.963051, lng: -19.020835},
    {name: "Italy", lat: 41.87194, lng: 12.56738},
    {name: "Jersey", lat: 49.214439, lng: -2.13125},
    {name: "Jamaica", lat: 18.109581, lng: -77.297508},
    {name: "Jordan", lat: 30.585164, lng: 36.238414},
    {name: "Japan", lat: 36.204824, lng: 138.252924},
    {name: "Kenya", lat: -0.023559, lng: 37.906193},
    {name: "Kyrgyzstan", lat: 41.20438, lng: 74.766098},
    {name: "Cambodia", lat: 12.565679, lng: 104.990963},
    {name: "Kiribati", lat: -3.370417, lng: -168.734039},
    {name: "Comoros", lat: -11.875001, lng: 43.872219},
    {name: "Saint Kitts and Nevis", lat: 17.357822, lng: -62.782998},
    {name: "North Korea", lat: 40.339852, lng: 127.510093},
    {name: "South Korea", lat: 35.907757, lng: 127.766922},
    {name: "Kuwait", lat: 29.31166, lng: 47.481766},
    {name: "Cayman Islands", lat: 19.513469, lng: -80.566956},
    {name: "Kazakhstan", lat: 48.019573, lng: 66.923684},
    {name: "Laos", lat: 19.85627, lng: 102.495496},
    {name: "Lebanon", lat: 33.854721, lng: 35.862285},
    {name: "Saint Lucia", lat: 13.909444, lng: -60.978893},
    {name: "Liechtenstein", lat: 47.166, lng: 9.555373},
    {name: "Sri Lanka", lat: 7.873054, lng: 80.771797},
    {name: "Liberia", lat: 6.428055, lng: -9.429499},
    {name: "Lesotho", lat: -29.609988, lng: 28.233608},
    {name: "Lithuania", lat: 55.169438, lng: 23.881275},
    {name: "Luxembourg", lat: 49.815273, lng: 6.129583},
    {name: "Latvia", lat: 56.879635, lng: 24.603189},
    {name: "Libya", lat: 26.3351, lng: 17.228331},
    {name: "Morocco", lat: 31.791702, lng: -7.09262},
    {name: "Monaco", lat: 43.750298, lng: 7.412841},
    {name: "Moldova", lat: 47.411631, lng: 28.369885},
    {name: "Montenegro", lat: 42.708678, lng: 19.37439},
    {name: "Madagascar", lat: -18.766947, lng: 46.869107},
    {name: "Marshall Islands", lat: 7.131474, lng: 171.184478},
    {name: "Macedonia [FYROM]", lat: 41.608635, lng: 21.745275},
    {name: "Mali", lat: 17.570692, lng: -3.996166},
    {name: "Myanmar [Burma]", lat: 21.913965, lng: 95.956223},
    {name: "Mongolia", lat: 46.862496, lng: 103.846656},
    {name: "Macau", lat: 22.198745, lng: 113.543873},
    {name: "Northern Mariana Islands", lat: 17.33083, lng: 145.38469},
    {name: "Martinique", lat: 14.641528, lng: -61.024174},
    {name: "Mauritania", lat: 21.00789, lng: -10.940835},
    {name: "Montserrat", lat: 16.742498, lng: -62.187366},
    {name: "Malta", lat: 35.937496, lng: 14.375416},
    {name: "Mauritius", lat: -20.348404, lng: 57.552152},
    {name: "Maldives", lat: 3.202778, lng: 73.22068},
    {name: "Malawi", lat: -13.254308, lng: 34.301525},
    {name: "Mexico", lat: 23.634501, lng: -102.552784},
    {name: "Malaysia", lat: 4.210484, lng: 101.975766},
    {name: "Mozambique", lat: -18.665695, lng: 35.529562},
    {name: "Namibia", lat: -22.95764, lng: 18.49041},
    {name: "New Caledonia", lat: -20.904305, lng: 165.618042},
    {name: "Niger", lat: 17.607789, lng: 8.081666},
    {name: "Norfolk Island", lat: -29.040835, lng: 167.954712},
    {name: "Nigeria", lat: 9.081999, lng: 8.675277},
    {name: "Nicaragua", lat: 12.865416, lng: -85.207229},
    {name: "Netherlands", lat: 52.132633, lng: 5.291266},
    {name: "Norway", lat: 60.472024, lng: 8.468946},
    {name: "Nepal", lat: 28.394857, lng: 84.124008},
    {name: "Nauru", lat: -0.522778, lng: 166.931503},
    {name: "Niue", lat: -19.054445, lng: -169.867233},
    {name: "New Zealand", lat: -40.900557, lng: 174.885971},
    {name: "Oman", lat: 21.512583, lng: 55.923255},
    {name: "Panama", lat: 8.537981, lng: -80.782127},
    {name: "Peru", lat: -9.189967, lng: -75.015152},
    {name: "French Polynesia", lat: -17.679742, lng: -149.406843},
    {name: "Papua New Guinea", lat: -6.314993, lng: 143.95555},
    {name: "Philippines", lat: 12.879721, lng: 121.774017},
    {name: "Pakistan", lat: 30.375321, lng: 69.345116},
    {name: "Poland", lat: 51.919438, lng: 19.145136},
    {name: "Saint Pierre and Miquelon", lat: 46.941936, lng: -56.27111},
    {name: "Pitcairn Islands", lat: -24.703615, lng: -127.439308},
    {name: "Puerto Rico", lat: 18.220833, lng: -66.590149},
    {name: "Palestinian Territories", lat: 31.952162, lng: 35.233154},
    {name: "Portugal", lat: 39.399872, lng: -8.224454},
    {name: "Palau", lat: 7.51498, lng: 134.58252},
    {name: "Paraguay", lat: -23.442503, lng: -58.443832},
    {name: "Qatar", lat: 25.354826, lng: 51.183884},
    {name: "Réunion", lat: -21.115141, lng: 55.536384},
    {name: "Romania", lat: 45.943161, lng: 24.96676},
    {name: "Serbia", lat: 44.016521, lng: 21.005859},
    {name: "Russia", lat: 61.52401, lng: 105.318756},
    {name: "Rwanda", lat: -1.940278, lng: 29.873888},
    {name: "Saudi Arabia", lat: 23.885942, lng: 45.079162},
    {name: "Solomon Islands", lat: -9.64571, lng: 160.156194},
    {name: "Seychelles", lat: -4.679574, lng: 55.491977},
    {name: "Sudan", lat: 12.862807, lng: 30.217636},
    {name: "Sweden", lat: 60.128161, lng: 18.643501},
    {name: "Singapore", lat: 1.352083, lng: 103.819836},
    {name: "Saint Helena", lat: -24.143474, lng: -10.030696},
    {name: "Slovenia", lat: 46.151241, lng: 14.995463},
    {name: "Svalbard and Jan Mayen", lat: 77.553604, lng: 23.670272},
    {name: "Slovakia", lat: 48.669026, lng: 19.699024},
    {name: "Sierra Leone", lat: 8.460555, lng: -11.779889},
    {name: "San Marino", lat: 43.94236, lng: 12.457777},
    {name: "Senegal", lat: 14.497401, lng: -14.452362},
    {name: "Somalia", lat: 5.152149, lng: 46.199616},
    {name: "Suriname", lat: 3.919305, lng: -56.027783},
    {name: "São Tomé and Príncipe", lat: 0.18636, lng: 6.613081},
    {name: "El Salvador", lat: 13.794185, lng: -88.89653},
    {name: "Syria", lat: 34.802075, lng: 38.996815},
    {name: "Swaziland", lat: -26.522503, lng: 31.465866},
    {name: "Turks and Caicos Islands", lat: 21.694025, lng: -71.797928},
    {name: "Chad", lat: 15.454166, lng: 18.732207},
    {name: "French Southern Territories", lat: -49.280366, lng: 69.348557},
    {name: "Togo", lat: 8.619543, lng: 0.824782},
    {name: "Thailand", lat: 15.870032, lng: 100.992541},
    {name: "Tajikistan", lat: 38.861034, lng: 71.276093},
    {name: "Tokelau", lat: -8.967363, lng: -171.855881},
    {name: "Timor-Leste", lat: -8.874217, lng: 125.727539},
    {name: "Turkmenistan", lat: 38.969719, lng: 59.556278},
    {name: "Tunisia", lat: 33.886917, lng: 9.537499},
    {name: "Tonga", lat: -21.178986, lng: -175.198242},
    {name: "Turkey", lat: 38.963745, lng: 35.243322},
    {name: "Trinidad and Tobago", lat: 10.691803, lng: -61.222503},
    {name: "Tuvalu", lat: -7.109535, lng: 177.64933},
    {name: "Taiwan", lat: 23.69781, lng: 120.960515},
    {name: "Tanzania", lat: -6.369028, lng: 34.888822},
    {name: "Ukraine", lat: 48.379433, lng: 31.16558},
    {name: "Uganda", lat: 1.373333, lng: 32.290275},
    {name: "United States", lat: 37.09024, lng: -95.712891},
    {name: "Uruguay", lat: -32.522779, lng: -55.765835},
    {name: "Uzbekistan", lat: 41.377491, lng: 64.585262},
    {name: "Vatican City", lat: 41.902916, lng: 12.453389},
    {name: "Saint Vincent and the Grenadines", lat: 12.984305, lng: -61.287228},
    {name: "Venezuela", lat: 6.42375, lng: -66.58973},
    {name: "British Virgin Islands", lat: 18.420695, lng: -64.639968},
    {name: "U.S. Virgin Islands", lat: 18.335765, lng: -64.896335},
    {name: "Vietnam", lat: 14.058324, lng: 108.277199},
    {name: "Vanuatu", lat: -15.376706, lng: 166.959158},
    {name: "Wallis and Futuna", lat: -13.768752, lng: -177.156097},
    {name: "Samoa", lat: -13.759029, lng: -172.104629},
    {name: "Kosovo", lat: 42.602636, lng: 20.902977},
    {name: "Yemen", lat: 15.552727, lng: 48.516388},
    {name: "Mayotte", lat: -12.8275, lng: 45.166244},
    {name: "South Africa", lat: -30.559482, lng: 22.937506},
    {name: "Zambia", lat: -13.133897, lng: 27.849332},
    {name: "Zimbabwe", lat: -19.015438, lng: 29.154857},
];