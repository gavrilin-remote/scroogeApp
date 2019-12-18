export const uuid = (prefix) => prefix + '_' + Math.random().toString(36).substr(2, 12);
