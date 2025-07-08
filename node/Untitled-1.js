const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(req, res, next) {
    try {
      const { name, email, password } = req.body;

      const database = await sqliteConnection();

      const checkUserExists = await database.get(
        "SELECT * FROM users WHERE email = (?)",
        [email]
      );

      if (checkUserExists) {
        throw new AppError("Este e-mail já está em uso.");
      }

      await database.run(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password]
      );

      return res.status(201).json();
    } catch (error) {
      next(error); // ⬅️ repassa o erro para o middleware de tratamento
    }
  }
}

module.exports = UsersController;