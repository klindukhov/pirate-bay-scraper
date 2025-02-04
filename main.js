import { Builder, Browser, By, Key, until } from "selenium-webdriver";
import { argv } from "node:process";

let driver = await new Builder().forBrowser(Browser.CHROME).build();

const getElementTextByClassName = async (element, className) => {
  return await (await element.findElement(By.className(className))).getText();
};
let listJSON = [];
let searchKey = argv[2];

try {
  await driver.get("https://thepiratebay.org/index.html");

  let searchBox = await driver.findElement(By.css("input[name='q']"));
  await searchBox.sendKeys(searchKey, Key.RETURN);
  await driver.wait(until.urlContains(searchKey));

  let listEntries = await driver.findElements(By.className("list-entry"));

  for (let e of listEntries) {
    listJSON.push({
      categoty: await getElementTextByClassName(e, "item-type"),
      title: await getElementTextByClassName(e, "item-title"),
      uploaded: await getElementTextByClassName(e, "item-uploaded"),
      link: await (
        await (
          await e.findElement(By.className("item-icons"))
        ).findElement(By.css("a"))
      ).getAttribute("href"),
      size: await getElementTextByClassName(e, "item-size"),
      seed: await getElementTextByClassName(e, "item-seed"),
      leech: await getElementTextByClassName(e, "item-leech"),
      uploadedBy: await getElementTextByClassName(e, "item-user"),
    });
  }
} finally {
  console.log(listJSON);
  await driver.quit();
}
