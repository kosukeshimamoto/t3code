import { describe, expect, it } from "vite-plus/test";
import { applyWindowTransparency } from "./windowTransparency";

describe("window transparency", () => {
  it.each([
    [true, true, "MacIntel", "true"],
    [false, true, "MacIntel", undefined],
    [true, false, "MacIntel", undefined],
    [true, true, "Win32", undefined],
    [true, true, "Linux x86_64", undefined],
  ] as const)(
    "applies enabled=%s desktop=%s platform=%s",
    (enabled, desktop, platform, expected) => {
      const root = { dataset: { windowTransparency: "true" } };
      applyWindowTransparency(root, enabled, desktop, platform);
      expect(root.dataset.windowTransparency).toBe(expected);
    },
  );
});
