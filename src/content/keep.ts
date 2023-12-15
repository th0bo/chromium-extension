console.log("Starting content script");

const uncheckListItem = (label: string) => {
  const listItem = findListItem(label) as HTMLDivElement;
  const checkbox = findCousinCheckbox(listItem) as HTMLElement;
  checkbox.click();
};

type FindListItem = (label: string) => HTMLDivElement | null;
const findListItem: FindListItem = (label: string) => {
  const regExp = new RegExp(` ${label}$`);
  return [...document.querySelectorAll("div")].filter(
    ({ innerText }) => regExp.test(innerText)
  )[0] ?? null;
}
  

type FindCousinCheckbox = (element: HTMLElement) => HTMLElement | null;
const findCousinCheckbox: FindCousinCheckbox = (element: HTMLElement) => {
  console.log(element);
  const { parentElement } = element;
  return (
    element.querySelector(`[role="checkbox"][aria-checked="true"]`) ??
    (parentElement !== null ? findCousinCheckbox(parentElement) : null)
  );
};

chrome.runtime.onMessage.addListener((request: MyMessage, sender, sendResponse) => {
  if (request.id === "item") {
    for (const label of (request as MyItemMessage).content) {
      uncheckListItem(label);
    }
  }
});
