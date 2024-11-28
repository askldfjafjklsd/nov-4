import { filterActiveUsers } from '../functions/index.js';

describe('filterActiveUsers', () => {
  const users = [
    { id: 1, name: 'Alice', isActive: true },
    { id: 2, name: 'Bob', isActive: false },
    { id: 3, name: 'Charlie', isActive: true },
    { id: 4, name: 'Diana', isActive: false },
  ];

  test('should return only active users', () => {
    const result = filterActiveUsers(users);

    expect(result).toEqual([
      { id: 1, name: 'Alice', isActive: true },
      { id: 3, name: 'Charlie', isActive: true },
    ]);
  });

  test('should return an empty array if no users are active', () => {
    const inactiveUsers = [
      { id: 1, name: 'Alice', isActive: false },
      { id: 2, name: 'Bob', isActive: false },
    ];

    const result = filterActiveUsers(inactiveUsers);
    expect(result).toEqual([]);
  });

  test('should return an empty array if the input array is empty', () => {
    const result = filterActiveUsers([]);
    expect(result).toEqual([]);
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => filterActiveUsers('not-an-array')).toThrow(
      'The input must be an array'
    );
  });
});
