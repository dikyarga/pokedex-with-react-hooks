import { generateVersusLink, countTotalPoint } from "./index";

describe("Utils", () => {
  describe("genertateVersusLink", () => {
    it("should return path of versus link", () => {
      const path = generateVersusLink("a", "b");
      expect(path).toBe("/a/vs/b");
    });
  });

  describe("countTotalPoint", () => {
    it("should return 0 when empty array", () => {
      const total = countTotalPoint();

      expect(total).toBe(0);
    });
    it("should return sum of base_stat properti of array", () => {
      const points = [{ base_stat: 123 }, { base_stat: 456 }];
      const total = countTotalPoint(points);

      expect(total).toBe(579);
    });
  });
});
