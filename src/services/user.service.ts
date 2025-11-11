import getConnection from "../config/database";

const handleCreateUser = async (name: string, email: string, address: string) => {
  const connection = await getConnection();
  // A simple INSERT query
  try {
    await connection.execute(
      "INSERT INTO `users` (name, email, address) VALUES (?, ?, ?)",
      [name, email, address]
    );
  } catch (err) {
    console.log(err);
  }
};
const getAllUsers = async () => {
  const connection = await getConnection();
  // A simple SELECT query
  try {
    const [results, fields] = await connection.query("SELECT * FROM `users`");
    return results;
  } catch (err) {
    console.log(err);
  }
};
export { handleCreateUser, getAllUsers };
