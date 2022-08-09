require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('teste para verificar qual o nome da personagem', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });
  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  })
});