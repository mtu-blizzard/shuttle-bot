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
var FS = require("fs");
var Path = require("path");
var keybase_bot_builder_1 = require("@elijahjcobb/keybase-bot-builder");
//  Husky Campus Shuttle Daily
var yellow = ["Forestry Building (Lot 21/26 Sidewalk)", "Forestry Building 9Rear Parking Lot)",
    "SDC Main Doors", "Gates Tennis Center Front Door", "Lot 32 (St. AL's)", "Woodland (Behind Wads)",
    "Library Bus Stop"];
// Husky Campus Nightly
var black = ["MUB", "SDC", "Upper Heights", "Lower Heights <Stop Sign)", "Woodland (behind Wads)",
    "Library"];
// Daniell Heights Shuttle
var red = ["MUB", "SDC", "Upper Heights", "Lower Heights", "Library"];
// City Commuter
var green = ["MUB", "City Center", "Econo Foods", "Walmart", "Razorback Stop", "Houghton Ave & 4th Street",
    "Houghton Ave & Bridge Street", "Houghton County Courthouse", "Houghton Ave & Portage Street", "Houghton Ave & Franklin Street",
    "Houghton Ave & Agate Street", "Houghton Ave & Emerald Street", "MUB"];
// Shopping Shuttle
var blue = ["Upper Heights", "Lower Heights", "Behind Wads", "Library", "MUB", "Econo", "Walmart"];
/*
    get stopName print route names that goes through the stop
 */
function getRouteName(stop) {
    var output = "no output";
    return output;
}
/*
get route number return full route
 */
function getRoute(route) {
    switch (route) {
        case 0: { //  Campus daily
            return getEachStop(yellow);
            break;
        }
        case 1: { // Campus nightly
            return getEachStop(black);
            break;
        }
        case 2: { // Daniell Heights
            return getEachStop(red);
            break;
        }
        case 3: { //  City Commuter
            return getEachStop(green);
            break;
        }
        case 4: { // Shopping shuttle
            return getEachStop(blue);
            break;
        }
        default: {
            return "Error for getRoute\n";
            break;
        }
    }
}
/*
    get all station names for the route
 */
function getEachStop(route) {
    var output = "";
    for (var i = 0; i < route.length; i++) {
        output.concat(route[i]);
        output.concat(" ");
    }
    return output;
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var paperKeyPath, paperKeyData, paperKey, bot;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                paperKeyPath = Path.resolve("./blizzard_paper_key.txt");
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
                    usage: "!shuttle schedule City Commuter",
                    handler: function (msg, res) { return __awaiter(void 0, void 0, void 0, function () {
                        var input, size, output, word;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    input = msg.getParameters();
                                    size = input.length;
                                    output = "";
                                    for (word in input) {
                                        output.concat(word);
                                        output.concat(" ");
                                    }
                                    return [4 /*yield*/, res.send(output)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }
                });
                bot.start();
                return [2 /*return*/];
        }
    });
}); })().then(function () { })["catch"](function (err) { return console.error(err); });
