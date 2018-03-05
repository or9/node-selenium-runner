#!/usr/bin/env node
"use strict";

const { Builder, By, Capabilities, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { red, green } = require("ansi-colors");
const path = require("chromedriver").path;

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
// const casper = require("casper").create();

// casper.start("http://casperjs.org")
// 	.then(() => {
// 		console.log("done it");
// 	})

// casper.run();

// process.env.PATH = `${process.env.PWD}/node_modules/.bin:${process.env.PATH}`;
// console.log("path???", process.env.PATH);

(async function () {
	var driver = await new Builder()
		.withCapabilities(Capabilities.chrome())
		.build();

	try {
		console.log(green.open, "running...", green.close);

	} catch (err) {
		console.error(red.open, err, red.close);
	} finally {
		await driver.quit();
	}
})();