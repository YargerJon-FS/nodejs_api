const {todoService, todoServiceById}= require ("./todoService");

jest.mock('./todoService');

describe("Todo Servie Tests", () => {
    test('As user i should return 10 todos', async ()=> {
            const result = await todoService();
            expect(result.data).toHaveLength(10)
            expect(result.data[8].userId).toEqual(1);
            expect(result.data[8].id).toEqual(9);
            expect(result.data[8].title).toEqual('molestiae perspiciatis ipsa');
            expect(result.data[8].completed).toEqual(false);
    });

    test('As user i should return todo object by ID', async ()=> {
                const result = await todoServiceById(3);
                expect(result.data.userId).toEqual(1);
                expect(result.data.title).toEqual('fugiat veniam minus');
                expect(result.data.completed).toEqual(false);
        });
});