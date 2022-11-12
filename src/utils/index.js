export function select(el, selectAll = false) {
  el = el.trim();
  return selectAll
    ? [...document.querySelectorAll(el)]
    : document.querySelector(el);
}

export function on(type, el, listener, all = false) {
  if (all) select(el, all).forEach((e) => e.addEventListener(type, listener));
  else select(el, all).addEventListener(type, listener);
}
