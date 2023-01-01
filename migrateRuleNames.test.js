const migrateRuleNames = require("./utils/migrateRuleNames");

describe("migrateRuleNames", () => {
  it("should migrate deprecated *-blacklist to *-disallowed-list", () => {
    expect(
      migrateRuleNames({
        "property-blacklist": true,
        "selector-combinator-blacklist": false,
      })
    ).toEqual({
      "property-disallowed-list": true,
      "selector-combinator-disallowed-list": false,
    });
  });

  it("should migrate deprecated *-whitelist to *-allowed-list", () => {
    expect(
      migrateRuleNames({
        "property-whitelist": true,
        "selector-combinator-whitelist": false,
      })
    ).toEqual({
      "property-allowed-list": true,
      "selector-combinator-allowed-list": false,
    });
  });

  it("should migrate deprecated *-requirelist to *-required-list", () => {
    expect(
      migrateRuleNames({
        "at-rule-property-requirelist": true,
      })
    ).toEqual({
      "at-rule-property-required-list": true,
    });
  });

  it("should migrate a mix of deprecated rule names", () => {
    expect(
      migrateRuleNames({
        "selector-combinator-blacklist": false,
        "at-rule-property-requirelist": true,
        "property-whitelist": true,
      })
    ).toEqual({
      "selector-combinator-disallowed-list": false,
      "at-rule-property-required-list": true,
      "property-allowed-list": true,
    });
  });
});
