import { formatDate } from "helpers/date";

describe("formatDate", () => {
    it("formats a date correctly", () => {
        const date = new Date("2022-01-01");
        const formattedDate = formatDate(date);
        expect(formattedDate).toBe("Saturday, January 1, 2022");
    });
});