const replacementPairs = [
  [/-blacklist$/, "-disallowed-list"],
  [/-whitelist$/, "-allowed-list"],
  [/-requirelist$/, "-required-list"],
];

function migrate(key) {
  return replacementPairs.reduce((key, pair) => {
    return key.replace(pair[0], pair[1]);
  }, key);
}

function migrateRuleNames(obj) {
  return Object.keys(obj).reduce((replacement, key) => {
    replacement[migrate(key)] = obj[key];
    return replacement;
  }, {});
}

module.exports = migrateRuleNames;
