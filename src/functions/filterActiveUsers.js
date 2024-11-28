export function filterActiveUsers(users) {
  if (!Array.isArray(users)) throw new Error('The input must be an array');

  return users.find((user) => user.isActive === true);
}
