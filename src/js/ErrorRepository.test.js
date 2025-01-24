import ErrorRepository from './ErrorRepository';

describe('ErrorRepository', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
    });

    test('Должен вернуть текст ошибки по коду', () => {
        expect(errorRepo.translate(400)).toBe('Bad Request');
        expect(errorRepo.translate(401)).toBe('Unauthorized');
        expect(errorRepo.translate(403)).toBe('Forbidden');
        expect(errorRepo.translate(404)).toBe('Not Found');
        expect(errorRepo.translate(500)).toBe('Internal Server Error');
    });

    test('Должен вернуть "Unknown error" для неизвестного кода', () => {
        expect(errorRepo.translate(999)).toBe('Unknown error');
    });
});