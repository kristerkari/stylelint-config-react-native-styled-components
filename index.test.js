const stylelint = require("stylelint");

describe("valid cases", () => {
  it("does not warn for valid properties (css-in-js)", () => {
    expect.assertions(2);

    const code = `
    import styled from "styled-components";

    const Test = styled.View\`
      padding: 15px 2px 15px 3px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom-color: rgb(204, 204, 204);
      border-top-color: rgb(204, 204, 204);
      border-bottom-width: 1px;
      border-top-width: 1px;
      opacity: 0.9px;
    \`;
    `;

    return stylelint
      .lint({
        code,
        syntax: "css-in-js",
        formatter: "string",
        config: {
          extends: "./index.js"
        }
      })
      .then(output => {
        const { warnings } = output.results[0];
        expect(warnings.length).toBe(0);
        expect(output.errored).toBe(false);
      });
  });

  it("does not warn for valid properties (css)", () => {
    expect.assertions(2);

    const code = `
    .selector1 {
      padding: 15px 2px 15px 3px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom-color: rgb(204, 204, 204);
      border-top-color: rgb(204, 204, 204);
      border-bottom-width: 1px;
      border-top-width: 1px;
      opacity: 0.9px;
    }
    `;

    return stylelint
      .lint({
        code,
        formatter: "string",
        config: {
          extends: "./index.js"
        }
      })
      .then(output => {
        const { warnings } = output.results[0];
        expect(warnings.length).toBe(0);
        expect(output.errored).toBe(false);
      });
  });

  it("does not warn for valid properties and a property that is commented out", () => {
    expect.assertions(2);

    const code = `
    import styled from "styled-components";

    const Test = styled.View\`
      flex: 1;
      /* word-wrap: break-word; */
    \`;
    `;

    return stylelint
      .lint({
        code,
        syntax: "css-in-js",
        formatter: "string",
        config: {
          extends: "./index.js"
        }
      })
      .then(output => {
        const { warnings } = output.results[0];
        expect(warnings.length).toBe(0);
        expect(output.errored).toBe(false);
      });
  });

  it("does not warn for valid properties and props interpolation", () => {
    expect.assertions(2);

    const code = `
    import styled from "styled-components";

    const Test = styled.Image\`
      width: 20;
      height: 20;
      ${props =>
        props.tintColor ? `tintColor: ${props.tintColor}` : undefined};
    \`;
    `;

    return stylelint
      .lint({
        code,
        syntax: "css-in-js",
        formatter: "string",
        config: {
          extends: "./index.js"
        }
      })
      .then(output => {
        const { warnings } = output.results[0];
        expect(warnings.length).toBe(0);
        expect(output.errored).toBe(false);
      });
  });

  describe("color functions", () => {
    it("does not warn for rgb function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        background-color: rgb(255, 0, 153);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for rgba function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        background-color: rgba(51, 170, 51, .1);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for hsl function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        background-color: hsl(270,60%,70%);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for hsla function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        background-color: hsla(240, 100%, 50%, .05);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });
  });

  describe("transform functions", () => {
    it("does not warn for rotate function and deg unit", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: rotate(90deg);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for rotateX function and deg unit", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: rotateX(90deg);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for rotateY function and deg unit", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: rotateY(90deg);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for rotateZ function and deg unit", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: rotateZ(90deg);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for translate function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: translate(0, 0);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for translateY function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: translateY(0);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for translateX function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: translateX(0);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for scale function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: scale(1,1);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for scaleX function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: scaleX(1);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for scaleY function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: scaleY(1);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for skew function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: skew(10deg, 10deg);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for skewX function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: skewX(10deg);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for skewY function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: skewY(10deg);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for perspective function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: perspective(10px);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });

    it("does not warn for matrix function", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });
  });
});

describe("invalid cases", () => {
  it("example from styled component docs (works only in a browser)", () => {
    expect.assertions(3);

    const code = `
    import styled from "styled-components";

    const Thing = styled.div.attrs({ tabIndex: 0 })\`
      color: blue;

      &:hover {
        color: red;
      }

      & ~ & {
        background: tomato;
      }

      & + & {
        background: lime;
      }

      &.something {
        background: orange;
      }

      .something-else & {
        border: 1px solid;
      }
    \`;
    `;

    return stylelint
      .lint({
        code,
        syntax: "css-in-js",
        formatter: "string",
        config: {
          extends: "./index.js"
        }
      })
      .then(output => {
        const { warnings } = output.results[0];
        expect(warnings.length).toBe(1);
        expect(output.errored).toBe(true);
        expect(warnings[0].text).toBe(
          "pseudo class selectors are not supported when using styled-components with React Native."
        );
      });
  });

  describe("properties", () => {
    it("does not allow vendor prefixes in values", () => {
      expect.assertions(3);

      const code = `
      .selector1 {
        display: -webkit-flex;
      }
      `;

      return stylelint
        .lint({
          code,
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            'Unexpected vendor-prefix "-webkit-flex" (value-no-vendor-prefix)'
          );
        });
    });

    it("does not allow vendor prefixes in properties", () => {
      expect.assertions(4);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        -webkit-transform: scale(1);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(2);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            'Unexpected unknown property "-webkit-transform" (react-native/css-property-no-unknown)'
          );
          expect(warnings[1].text).toBe(
            'Unexpected vendor-prefix "-webkit-transform" (property-no-vendor-prefix)'
          );
        });
    });

    it("does not allow unknown properties", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        word-wrap: break-word;
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            'Unexpected unknown property "word-wrap" (react-native/css-property-no-unknown)'
          );
        });
    });

    it("ignores styled-components mixins", () => {
      expect.assertions(2);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        $\{borderRadius};
        $\{space};
        $\{width};
        $\{height};
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          processors: ["stylelint-processor-styled-components"],
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(0);
          expect(output.errored).toBe(false);
        });
    });
  });

  describe("selectors", () => {
    it("warns for id selectors", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        #test {
          flex: 1;
        }
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "id selectors are not supported when using styled-components with React Native."
          );
        });
    });

    it("warns for type selectors", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        input {
          flex: 1;
        }
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "type selectors are not supported when using styled-components with React Native."
          );
        });
    });

    it("warns for qualifying type selectors", () => {
      expect.assertions(4);

      const code = `
      .selector1 {
        a.link {
          flex: 1;
        }
      }
      `;

      return stylelint
        .lint({
          code,
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(2);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "class selectors are not supported when using styled-components with React Native."
          );
          expect(warnings[1].text).toBe(
            "type selectors are not supported when using styled-components with React Native."
          );
        });
    });

    it("warns for univesal selectors", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        * {
          flex: 1;
        }
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "universal selectors are not supported when using styled-components with React Native."
          );
        });
    });

    it("warns for attribute selectors", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        [type='text'] {
          flex: 1;
        }
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "attribute selectors are not supported when using styled-components with React Native."
          );
        });
    });

    it("warns for pseudo class selectors", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        :before {
          flex: 1;
        }
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "pseudo class selectors are not supported when using styled-components with React Native."
          );
        });
    });

    it("warns for :root pseudo-selector", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        :root {
          --my-color: red;
        }
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "pseudo class selectors are not supported when using styled-components with React Native."
          );
        });
    });
  });

  describe("functions", () => {
    it("warns for var function", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        color: var(--my-color);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "this function is not supported when using styled-components with React Native."
          );
        });
    });

    it("warns for calc function", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        width: calc(100% - 10px);
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "this function is not supported when using styled-components with React Native."
          );
        });
    });

    describe("gradient functions", () => {
      it("warns for linear-gradient function", () => {
        expect.assertions(3);

        const code = `
        import styled from "styled-components";

        const Test = styled.View\`
          background: linear-gradient(to right, purple, yellow);
        \`;
        `;

        return stylelint
          .lint({
            code,
            syntax: "css-in-js",
            formatter: "string",
            config: {
              extends: "./index.js"
            }
          })
          .then(output => {
            const { warnings } = output.results[0];
            expect(warnings.length).toBe(1);
            expect(output.errored).toBe(true);
            expect(warnings[0].text).toBe(
              "this function is not supported when using styled-components with React Native."
            );
          });
      });

      it("warns for radial-gradient function", () => {
        expect.assertions(3);

        const code = `
        import styled from "styled-components";

        const Test = styled.View\`
          background: radial-gradient(yellow, red);
        \`;
        `;

        return stylelint
          .lint({
            code,
            syntax: "css-in-js",
            formatter: "string",
            config: {
              extends: "./index.js"
            }
          })
          .then(output => {
            const { warnings } = output.results[0];
            expect(warnings.length).toBe(1);
            expect(output.errored).toBe(true);
            expect(warnings[0].text).toBe(
              "this function is not supported when using styled-components with React Native."
            );
          });
      });

      it("warns for repeating-linear-gradient function", () => {
        expect.assertions(3);

        const code = `
        import styled from "styled-components";

        const Test = styled.View\`
          background: repeating-linear-gradient(gold 15%, orange 30%);
        \`;
        `;

        return stylelint
          .lint({
            code,
            syntax: "css-in-js",
            formatter: "string",
            config: {
              extends: "./index.js"
            }
          })
          .then(output => {
            const { warnings } = output.results[0];
            expect(warnings.length).toBe(1);
            expect(output.errored).toBe(true);
            expect(warnings[0].text).toBe(
              "this function is not supported when using styled-components with React Native."
            );
          });
      });

      it("warns for repeating-radial-gradient function", () => {
        expect.assertions(3);

        const code = `
        import styled from "styled-components";

        const Test = styled.View\`
          background: repeating-radial-gradient(yellow 20%, red 40%);
        \`;
        `;

        return stylelint
          .lint({
            code,
            syntax: "css-in-js",
            formatter: "string",
            config: {
              extends: "./index.js"
            }
          })
          .then(output => {
            const { warnings } = output.results[0];
            expect(warnings.length).toBe(1);
            expect(output.errored).toBe(true);
            expect(warnings[0].text).toBe(
              "this function is not supported when using styled-components with React Native."
            );
          });
      });
    });

    describe("transform functions", () => {
      it("warns for translateZ function", () => {
        expect.assertions(3);

        const code = `
        import styled from "styled-components";

        const Test = styled.View\`
          transform: translateZ(0)
        \`;
        `;

        return stylelint
          .lint({
            code,
            syntax: "css-in-js",
            formatter: "string",
            config: {
              extends: "./index.js"
            }
          })
          .then(output => {
            const { warnings } = output.results[0];
            expect(warnings.length).toBe(1);
            expect(output.errored).toBe(true);
            expect(warnings[0].text).toBe(
              "this function is not supported when using styled-components with React Native."
            );
          });
      });

      it("warns for translate3d function", () => {
        expect.assertions(3);

        const code = `
        import styled from "styled-components";

        const Test = styled.View\`
          transform: translate3d(0, 0, 0);
        \`;
        `;

        return stylelint
          .lint({
            code,
            syntax: "css-in-js",
            formatter: "string",
            config: {
              extends: "./index.js"
            }
          })
          .then(output => {
            const { warnings } = output.results[0];
            expect(warnings.length).toBe(1);
            expect(output.errored).toBe(true);
            expect(warnings[0].text).toBe(
              "this function is not supported when using styled-components with React Native."
            );
          });
      });

      it("warns for scale3d function", () => {
        expect.assertions(3);

        const code = `
        import styled from "styled-components";

        const Test = styled.View\`
          transform: scale3d(1,1,1);
        \`;
        `;

        return stylelint
          .lint({
            code,
            syntax: "css-in-js",
            formatter: "string",
            config: {
              extends: "./index.js"
            }
          })
          .then(output => {
            const { warnings } = output.results[0];
            expect(warnings.length).toBe(1);
            expect(output.errored).toBe(true);
            expect(warnings[0].text).toBe(
              "this function is not supported when using styled-components with React Native."
            );
          });
      });

      it("warns for rotate3d function", () => {
        expect.assertions(3);

        const code = `
        import styled from "styled-components";

        const Test = styled.View\`
          transform: rotate3d(1, 2.0, 3.0, 10deg);
        \`;
        `;

        return stylelint
          .lint({
            code,
            syntax: "css-in-js",
            formatter: "string",
            config: {
              extends: "./index.js"
            }
          })
          .then(output => {
            const { warnings } = output.results[0];
            expect(warnings.length).toBe(1);
            expect(output.errored).toBe(true);
            expect(warnings[0].text).toBe(
              "this function is not supported when using styled-components with React Native."
            );
          });
      });

      it("warns for scaleZ function", () => {
        expect.assertions(3);

        const code = `
        import styled from "styled-components";

        const Test = styled.View\`
          transform: scaleZ(1);
        \`;
        `;

        return stylelint
          .lint({
            code,
            syntax: "css-in-js",
            formatter: "string",
            config: {
              extends: "./index.js"
            }
          })
          .then(output => {
            const { warnings } = output.results[0];
            expect(warnings.length).toBe(1);
            expect(output.errored).toBe(true);
            expect(warnings[0].text).toBe(
              "this function is not supported when using styled-components with React Native."
            );
          });
      });

      it("warns for matrix3d function", () => {
        expect.assertions(3);

        const code = `
        import styled from "styled-components";

        const Test = styled.View\`
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        \`;
        `;

        return stylelint
          .lint({
            code,
            syntax: "css-in-js",
            formatter: "string",
            config: {
              extends: "./index.js"
            }
          })
          .then(output => {
            const { warnings } = output.results[0];
            expect(warnings.length).toBe(1);
            expect(output.errored).toBe(true);
            expect(warnings[0].text).toBe(
              "this function is not supported when using styled-components with React Native."
            );
          });
      });
    });
  });

  describe("at-rules", () => {
    it("warns for @keyframes", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        @keyframes() {
          0% {
            color: blue;
          }
          100% {
            color: red;
          }
        }
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "this at-rule is not supported when using styled-components with React Native."
          );
        });
    });

    it("warns for @media", () => {
      expect.assertions(4);

      const code = `
      .selector1 {
        @media (max-width: 900px) {
          .foo {
            color: blue;
          }
        }
      }
      `;

      return stylelint
        .lint({
          code,
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(2);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "this at-rule is not supported when using styled-components with React Native."
          );
          expect(warnings[1].text).toBe(
            "class selectors are not supported when using styled-components with React Native."
          );
        });
    });

    it("warns for @supports", () => {
      expect.assertions(4);

      const code = `
      .selector {
        @supports (display: grid) {
          .foo {
            color: blue;
          }
        }
      }
      `;

      return stylelint
        .lint({
          code,
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(2);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "this at-rule is not supported when using styled-components with React Native."
          );
          expect(warnings[1].text).toBe(
            "class selectors are not supported when using styled-components with React Native."
          );
        });
    });

    it("warns for @charset", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        @charset "utf-8";
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "this at-rule is not supported when using styled-components with React Native."
          );
        });
    });

    it("warns for @import", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        @import 'custom.css';
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "this at-rule is not supported when using styled-components with React Native."
          );
        });
    });

    it("warns for @font-face", () => {
      expect.assertions(3);

      const code = `
      import styled from "styled-components";

      const Test = styled.View\`
        @font-face {
          font-family: MyHelvetica;
        }
      \`;
      `;

      return stylelint
        .lint({
          code,
          syntax: "css-in-js",
          formatter: "string",
          config: {
            extends: "./index.js"
          }
        })
        .then(output => {
          const { warnings } = output.results[0];
          expect(warnings.length).toBe(1);
          expect(output.errored).toBe(true);
          expect(warnings[0].text).toBe(
            "this at-rule is not supported when using styled-components with React Native."
          );
        });
    });
  });
});
