import utils from "./utils";

describe('Utils', () => {
    test('should return about-us for englis language', () => {
        expect(utils.getAboutUsLink('en-UK')).toBe('/about-us');
    });
});
