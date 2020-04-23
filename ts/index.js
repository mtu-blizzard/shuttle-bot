"use strict";
/**
 * Zong Deng
 * zongd@mtu.edu
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var BusSchedules_1 = require("./BusSchedules");
var keybase_bot_builder_1 = require("@elijahjcobb/keybase-bot-builder");
var Path = require("path");
var FS = require("fs");
// //  Husky Campus Shuttle Daily
// const yellow: string[] = [
// 	"Forestry Building (Lot 21/26 Sidewalk)",
// 	"Forestry Building 9Rear Parking Lot)",
// 	"SDC Main Doors",
// 	"Gates Tennis Center Front Door",
// 	"Lot 32 (St. AL's)",
// 	"Woodland (Behind Wads)",
// 	"Library Bus Stop"
// ];
//
// // Husky Campus Nightly
// const black: string[] = [
// 	"MUB",
// 	"SDC",
// 	"Upper Heights",
// 	"Lower Heights <Stop Sign)",
// 	"Woodland (behind Wads)",
// 	"Library"
// ];
//
// // Daniell Heights Shuttle
// const red: string[] = [
// 	"MUB",
// 	"SDC",
// 	"Upper Heights",
// 	"Lower Heights",
// 	"Library"
// ];
//
// // City Commuter
// const green: string[] = [
// 	"MUB",
// 	"City Center",
// 	"Econo Foods",
// 	"Walmart",
// 	"Razorback Stop",
// 	"Houghton Ave & 4th Street",
// 	"Houghton Ave & Bridge Street",
// 	"Houghton County Courthouse",
// 	"Houghton Ave & Portage Street",
// 	"Houghton Ave & Franklin Street",
// 	"Houghton Ave & Agate Street",
// 	"Houghton Ave & Emerald Street",
// 	"MUB"
// ];
//
// // Shopping Shuttle
// const blue: string[] = [
// 	"Upper Heights",
// 	"Lower Heights",
// 	"Behind Wads",
// 	"Library",
// 	"MUB",
// 	"Econo",
// 	"Walmart"
// ];
//
// /**
//  * get stopName print route names that goes through the stop
//  * @param stop
//  */
// function getRouteName(stop: string): string {
// 	return "no output";
// }
//
// /**
//  * get route number return full route
//  * @param route
//  */
// function getRoute(route: number): string {
// 	switch (route) {
// 		case 0: {   //  Campus daily
// 			return getEachStop(yellow);
// 		}
// 		case 1: {   // Campus nightly
// 			return getEachStop(black);
// 		}
// 		case 2: {   // Daniell Heights
// 			return getEachStop(red);
// 		}
// 		case 3: {   //  City Commuter
// 			return getEachStop(green);
// 		}
// 		case 4: {   // Shopping shuttle
// 			return getEachStop(blue);
// 		}
// 		default: {
// 			return "Error for getRoute\n";
// 		}
// 	}
// }
// /**
//  * get all station names for the route
//  * @param route
//  */
// function getEachStop(route: string[]): string {
// 	const output: string = "";
// 	for (let i: number = 0; i < route.length; i++) {
// 		output.concat(route[i]);
// 		output.concat(" ");
// 	}
// 	return output;
// }
/**
 * return route of the line
 * @param line
 */
function getStops(line) {
    var route = BusSchedules_1.getBusRouteForInput(line); // get BusRoute associated with line
    if (!route) {
        return ("Whoops! I don't track that route. I track the following routes: " +
            BusSchedules_1.getBusRouteNames().join("--> ") + ".\n" + printHelp(false));
    }
    else {
        // const items:object[] = Object.values(route);	// get the values of array of key value pair array
        return ("The route " + Object.keys(route) + " goes through the following stops: \n" + BusSchedules_1.getStopsFromBusRoute(route).join("-->") + ".");
    }
}
/**
 * list all commands or tell how to do so
 * @param switcher
 */
function printHelp(switcher) {
    var words;
    if (switcher) {
        words = "Here are a list of available commands for shuttle schedule:\n" +
            "\"!shuttle route *_name of route_*\" : list all stops of this shuttle line\n" +
            "\"!shuttle stop *_name of stop_*\" : list Route(s) going through said stop\n" +
            "\"!shuttle hour *_name of route_*\" : hour of operation for said Route\n" +
            "\"!shuttle time *_name of stop_*\" : time of day each shuttle line goes through said stop";
    }
    else
        words = "For a list of available commands for shuttle schedule related function:\n" +
            "Please use the following command: *!shuttle help*";
    return words;
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var paperKeyPath, paperKeyData, paperKey, bot;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                paperKeyPath = Path.resolve("blizzard_paper_key.txt");
                paperKeyData = FS.readFileSync(paperKeyPath);
                paperKey = paperKeyData.toString("utf8");
                return [4 /*yield*/, keybase_bot_builder_1.KBBot.init("blizzard_t_husky", paperKey, {
                        logging: true,
                        debugging: true,
                        hostname: "bot-blizzard-ZD"
                    })];
            case 1:
                bot = _a.sent();
                bot.command({
                    name: "shuttle",
                    description: "check shuttle",
                    usage: "!shuttle route City Commuter",
                    handler: function (msg, res) { return __awaiter(void 0, void 0, void 0, function () {
                        var params, location, route;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    params = msg.getParameters();
                                    location = params.join(" ");
                                    console.log(params);
                                    route = BusSchedules_1.getBusRouteForInput(location);
                                    if (!!route) return [3 /*break*/, 3];
                                    return [4 /*yield*/, res.send("Whoops! I don't track that route. I track the following routes: " +
                                            BusSchedules_1.getBusRouteNames().join(", ") + ".")];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, res.send(printHelp(false))];
                                case 2: return [2 /*return*/, _a.sent()];
                                case 3: 
                                // const items:object[] = Object.values(route);	// get the values of array of key value pair array
                                return [4 /*yield*/, res.send("The route goes through the following stops: \n" + BusSchedules_1.getStopsFromBusRoute(route).join("-->") + ".")];
                                case 4:
                                    // const items:object[] = Object.values(route);	// get the values of array of key value pair array
                                    _a.sent();
                                    _a.label = 5;
                                case 5:
                                    if (!(typeof params[0] === "string")) return [3 /*break*/, 6];
                                    return [3 /*break*/, 8];
                                case 6: return [4 /*yield*/, res.send("Please don't use number as command. The available form of commands are as follow:\n")];
                                case 7:
                                    _a.sent();
                                    _a.label = 8;
                                case 8: return [2 /*return*/];
                            }
                        });
                    }); }
                });
                bot.start();
                return [2 /*return*/];
        }
    });
}); })()
    .then(function () { })["catch"](function (err) { return console.error(err); });
