#!/usr/bin/env node
"use strict";

const { Builder, By, Capabilities, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { red, green } = require("ansi-colors");
const path = require("chromedriver").path;

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

// (async function () {
// 	var driver = await new Builder()
// 		.withCapabilities(Capabilities.chrome())
// 		.build();

// 	try {
// 		console.log(green.open, "running...", green.close);
// 		await driver.get("http://www.google.com/ncr");
// 		await driver.findElement(By.name("q")).sendKeys("webdriverrrr", Key.RETURN);
// 		await driver.wait(until.titleIs("webdriverrrr - Google Search"), 1000);
// 	} catch (err) {
// 		console.error(red.open, err, red.close);
// 	} finally {
// 		await driver.quit();
// 	}
// })();

var driver = new Builder()
	.withCapabilities(Capabilities.chrome())
	.build();

driver.get("http://www.google.com/ncr")
	.then(() => driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN))
	.then(() =>  driver.wait(until.titleIs("webdriver - Google Search"), 1000))
	.then(() => driver.quit())
	.catch(err => {
		console.error(red.open, err, red.close);
		driver.quit();
	})
