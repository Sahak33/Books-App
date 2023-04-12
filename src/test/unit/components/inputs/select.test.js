import { render, screen } from "@testing-library/react";
import Select from "components/inputs/select";
import { helpRouter } from "test/App.test";

describe("select", () => {
  beforeEach(() => {
    render(helpRouter(<Select />));
  });
  it("test select option content", () => {
    expect(screen.getByText("Choose Categories").textContent).toBe("Choose Categories")
  });
  it("async option", async () => {
    try {
      const java = await screen.findByText("Java");
      const Software = await screen.findByText("Software enginiering");
      const Develop = await screen.findByText("Develop");
      const Hesoyam = await screen.findByText("Hesoyam");
      const Aezakmi = await screen.findByText("Aezakmi");

      expect(java.textContent).toBe("Java");
      expect(Software.textContent).toBe("Software enginiering");
      expect(Develop.textContent).toBe("Develop");
      expect(Hesoyam.textContent).toBe("Hesoyam");
      expect(Aezakmi.textContent).toBe("Aezakmi");
    } catch (error) {
      console.log("Error:", error.message);
    }
  })
});
