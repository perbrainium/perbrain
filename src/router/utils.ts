export function currentUrl() {
  const path = window.location.hash.slice(1) || "/";
  const url = new URL(path, "https://perbrain.com");

  return url;
}

export function pushPath(path: string) {
  window.location.hash = path;
}

export function toPath(path: string) {
  return "/#" + path;
}

export async function getView(path: string) {
  return import(`../views/${path}.ts`).then((modules) => modules.default);
}

// Function to watch for path changes
export function onPathChange(callback: EventListener) {
  window.addEventListener("hashchange", callback);
}

// Function to unwatch the path changes
export function unPathChange(callback: EventListener) {
  window.removeEventListener("hashchange", callback);
}
