import React from "react";

const choice = (items) => {
  const length = items.length;
  return items[Math.floor(Math.random() * length)];
};

const remove = (items, item) => {
  const idx = items.indexOf(item);
  if (idx === -1) {
    return undefined;
  } else {
    items.splice(idx, 1);
    return items;
  }
};

export { choice, remove };