const {todoService, todoServiceByName}= require ("./todoService");

jest.mock('./todoService');

describe("Todo Servie Tests", () => {
    test('As user i should return 10 universities', async ()=> {
            const result = await todoService();
            expect(result.data[8].name).toEqual('Chabot-Las Positas Community College District');
            
    });

    test('As user i should return todo object by Name', async ()=> {
                const result = await todoServiceByName(3);
                
                expect(result.data.name).toEqual('Lindenwood University');
                
        });
});