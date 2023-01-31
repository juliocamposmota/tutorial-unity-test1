const englishCode = 'en-UK';
const frenchCode = 'es-FS';

class Utils {
    getAboutUsLink(language: string): string {
        switch (language.toLowerCase()) {
            case englishCode.toLowerCase():
                return '/about-us';
            case frenchCode.toLowerCase():
                return '/-à propos de nous';
            default:
                return '';
        }
    }
}

export default new Utils();
