const {getDeveloper} = require('../Services/DAO/developerDAO.js') 

test('Test 1', async () => {
    await expect(getDeveloper("62b433edbb065521b846ae4c")).resolves.toBe('hamza');
  });