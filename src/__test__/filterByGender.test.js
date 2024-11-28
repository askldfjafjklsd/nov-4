import { filterByGender } from '../functions/index.js';

describe('filterByGender', () => {
  const people = [
    { name: 'Alice', gender: 'female' },
    { name: 'Bob', gender: 'male' },
    { name: 'Charlie', gender: 'male' },
    { name: 'Diana', gender: 'female' },
  ];

  test("should return only males when gender is 'male'", () => {
    const result = filterByGender(people, 'male');
    expect(result).toEqual([
      { name: 'Bob', gender: 'male' },
      { name: 'Charlie', gender: 'male' },
    ]);
  });

  test("should return only females when gender is 'female'", () => {
    const result = filterByGender(people, 'female');
    expect(result).toEqual([
      { name: 'Alice', gender: 'female' },
      { name: 'Diana', gender: 'female' },
    ]);
  });

  test('should return an empty array if no people match the gender', () => {
    const emptyPeople = [];
    const result = filterByGender(emptyPeople, 'male');
    expect(result).toEqual([]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => filterByGender('not-an-array', 'male')).toThrow(
      'The first argument must be an array'
    );
  });

  test('should throw an error if the gender is invalid', () => {
    expect(() => filterByGender(people, 'unknown')).toThrow('Invalid gender');
  });
});
