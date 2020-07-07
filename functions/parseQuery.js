module.exports = function parseQuery(query) {
  const result = {};
  const pairs = (query[0] === "?" ? query.substr(1) : query).split("&");
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    const key = decodeURIComponent(pair[0]);
    result[key] = decodeURIComponent(pair[1] || "");
  }
  return result;
};
