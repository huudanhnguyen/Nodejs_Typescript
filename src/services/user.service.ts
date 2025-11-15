import getConnection from "config/database";
import {PrismaClient} from "@prisma/client";

const handleCreateUser = async (name: string, email: string, address: string) => {
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      name,
      email,
      address,
    },
  });
};
const getAllUsers = async () => {
  const connection = await getConnection();
  // A simple SELECT query
  try {
    const [results, fields] = await connection.query("SELECT * FROM `user`");
    return results;
  } catch (err) {
    console.log(err);
  }
};
const deleteUserById = async (id: number) => {
  const connection = await getConnection();
  // A simple DELETE query
  try {
    await connection.execute("DELETE FROM `users` WHERE id = ?", [id]);
  } catch (err) {
    console.log(err);
  }
};
const getUserById = async (id: number) => {
  const connection = await getConnection();
  try {
    const [rows] = await connection.query(
      "SELECT * FROM `users` WHERE id = ?",
      [id]
    );
    return Array.isArray(rows) && rows.length ? (rows as any)[0] : null;
  } catch (err) {
    console.log(err);
  }
};

const handleUpdateUser = async (
  id: number,
  name: string,
  email: string,
  address: string
) => {
  const connection = await getConnection();
  try {
    await connection.execute(
      "UPDATE `users` SET name = ?, email = ?, address = ? WHERE id = ?",
      [name, email, address, id]
    );
  } catch (err) {
    console.log(err);
  }
};
export { handleCreateUser, getAllUsers, deleteUserById, getUserById, handleUpdateUser };
