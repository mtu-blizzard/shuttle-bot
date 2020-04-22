export interface BusRoute {
	days: number[];
	hours: number[];
	routes: {
		[key: string]: number[]
	};
}

export interface BusRoutes {
	[key: string]: BusRoute;
}

export const busRoutes: BusRoutes = {
	"Husky Campus Daily": {
		days: [1, 2, 3, 4, 5],
		hours: [730, 1745],
		routes: {
			"MUB": [10, 30, 50],
			"Forestry Building (Lot 21/26 Sidewalk)": [12, 32, 52],
			"Forestry Building (Read Parking Lot)": [13, 33, 53],
			"SDC": [15, 35, 55],
			"Gates Tennis Center Front Door": [16, 36, 56],
			"Lot 32 (St. Ai's)": [18, 38, 58],
			"Woodland (Behind Wads)": [21, 41, 1],
			"Library": [24, 44, 4],
		}
	},
	"Husky Campus Nightly": {
		days: [1, 2, 3, 4, 5],
		hours: [1830, 2125],
		routes: {
			"MUB": [10, 30, 50],
			"SDC": [15, 35, 55],
			"Upper Heights": [18, 38, 58],
			"Lower Heights (Stop Sign)": [20, 40, 0],
			"Woodland (behind Wads)": [21, 41, 1],
			"Library": [24, 44, 4],
		}
	},
	"City Coummuter": {
		days: [1, 2, 3, 4, 5],
		hours: [705, 1730],
		routes: {
			// you cannot have duplicate keys in an object so I removed the second "MUB"
			// and put its values right here in the first one.
			"MUB": [5, 35, 30, 0],
			"City Center": [8, 38],
			"Econo Foods": [11, 41],
			"Walmart": [17, 47],
			"Razorback Stop": [18, 48],
			"Houghton Ave & 4th Street": [21, 51],
			"Houghton Ave & Bridge Street": [22, 52],
			"Houghton County Courthouse": [23, 52],
			"Houghton Ave & Portage Street": [24, 54],
			"Houghton Ave & Franklin Street": [25, 55],
			"Houghton Ave &  Agate Street": [26, 56],
			"Houghton Ave & Emerald Street": [27, 57]
		}
	},
	"Daninell Heights": {
		days: [1, 2, 3, 4, 5],
		hours: [720, 1800],
		routes: {
			"MUB": [0, 20, 40],
			"SDC": [5, 25, 45],
			"Upper Heights": [10, 30, 50],
			"Lower Heights": [14, 34, 54],
			"Library": [17, 37, 57]
		}
	},
	"Shopping Weekdays": {
		days: [3, 4, 5],
		hours: [1815, 2130],
		routes: {
			"Upper Heights": [15, 100, 145, 230, 315],
			"Lower Heights": [20, 105, 150, 235, 320],
			"Behind Wads": [23, 108, 153, 238, 323],
			"Library": [28, 113, 158, 243, 328],
			"MUB": [30, 115, 200, 245, 330],
			"Econo": [40, 125, 210, 255],
			"WalMart": [50, 135, 220, 305]
		}
	},

	"Shopping Saturday": {
		days: [6],
		hours: [1200, 1645],
		routes: {
			"Upper Heights": [0, 45, 130, 215, 300, 345, 430],
			"Lower Heights": [5, 50, 135, 220, 305, 350, 435],
			"Behind Wads": [8, 53, 138, 223, 308, 353, 438],
			"Library": [13, 58, 143, 228, 313, 358, 343],
			"MUB": [15, 100, 145, 230, 315, 400, 445],
			"Econo": [25, 110, 155, 240, 325, 410],
			"WalMart": [35, 120, 205, 250, 335, 420]
		}
	}
};