const compareVersions = require("compare-versions");
const stylelintVersion = require("stylelint/package.json").version;
const stylelintVersionWithDepreactions = "13.7.0";

function usesNewRuleNames() {
  return compareVersions.compare(
    stylelintVersion,
    stylelintVersionWithDepreactions,
    ">="
  );
}

module.exports = usesNewRuleNames;
