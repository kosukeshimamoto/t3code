import { isMacPlatform } from "./lib/utils";

export function applyWindowTransparency(
  root: Pick<HTMLElement, "dataset">,
  enabled: boolean,
  desktop: boolean,
  platform: string,
): void {
  if (enabled && desktop && isMacPlatform(platform)) {
    root.dataset.windowTransparency = "true";
  } else {
    delete root.dataset.windowTransparency;
  }
}
