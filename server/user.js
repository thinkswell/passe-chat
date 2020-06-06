const users = [];

const addUser = ({ id, room, name }) => {
  room = room.trim().toLowerCase();
  name = name.trim().toLowerCase();

  const exsitingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (exsitingUser) {
    return { error: "Username already exists" };
  }

  const user = { id, room, name };

  users.push(user);

  return user;
};

const getUser = (id) => users.find((user) => user.id === id);

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) users.splice(index, 1)[0];
  console.log(users);
};

const getNumber = () => users.length;

module.exports = { addUser, getUser, removeUser, getNumber };
