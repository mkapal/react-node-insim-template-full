import { describe, expect, it } from "vitest";

import { log } from "@/log";

describe("log", () => {
  it("should be a function", () => {
    expect(typeof log).toEqual("function");
  });
});
