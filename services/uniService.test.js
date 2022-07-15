const {uniService, uniServiceByName}= require ("./uniService");

jest.mock('./uniService');

describe("uni Servie Tests", () => {
    test('As user i should return 10 universities', async ()=> {
            const result = await uniService();
            expect(result.data[8].name).toEqual('Chabot-Las Positas Community College District');
            
    });

    test('As user i should return university by Name', async ()=> {
                const result = await uniServiceByName(3);
                
                expect(result.data.name).toEqual('Lindenwood University');
                
        });
});