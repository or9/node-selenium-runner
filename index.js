#!/usr/bin/env node
"use strict";

const { Builder, By, Key, until } = require("selenium-webdriver");
const { red, green } = require("ansi-colors");

(async function () {
	var driver = await new Builder().forBrowser("chrome").build();

	try {
		console.log(green.open, "running...", green.close);

	} catch (err) {
		console.error(red.open, err, red.close);
	} finally {
		await driver.quit();
	}
})();