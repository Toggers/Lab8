describe('formatVolumeIconPath Tests', () => {
    const formatVolumeIconPath = require('../assets/scripts/main');
    test('takes volume value greater than 66 to set icon level to 3 in the path', () => {
        expect(formatVolumeIconPath(67)).toBe("./assets/media/icons/volume-level-3.svg");
    });

    test('takes volume value greater than 33 and less than 67 to set icon level to 2 in the path', () => {
        expect(formatVolumeIconPath(40)).toBe("./assets/media/icons/volume-level-2.svg");
    });

    test('takes volume value greater than 0 and less than 34 to set icon level to 1 in the path', () => {
        expect(formatVolumeIconPath(30)).toBe("./assets/media/icons/volume-level-1.svg");
    });

    test('takes volume value less than 1 to set icon level to 0 in the path', () => {
        expect(formatVolumeIconPath(-5)).toBe("./assets/media/icons/volume-level-0.svg");
    });
});