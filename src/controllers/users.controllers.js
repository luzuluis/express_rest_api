import { pool } from "../db.js";
export const getUser = async (req, res) => {
  //res.send("obteniendo usuarios");
  try {
    const id_user = req.params.id;
    const [rows] = await pool.query("SELECT * FROM user WHERE id=?", [id_user]);
    console.log(rows);
    if (rows.length <= 0) {
      return res.status(404).json({
        message: "User not found",
        error: 404,
      });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
export const getUsers = async (req, res) => {
  //res.send("obteniendo usuarios");
  try {
    const [rows] = await pool.query("SELECT * FROM user");
    if (rows.length <= 0) {
      return res.status(404).json({
        message: "Users not found",
        error: 404,
      });
    }
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
export const createUser = async (req, res) => {
  //res.send("creando usuarios");
  console.log(req.body);
  //res.send("POST succsess");
  try {
    const { user, nombre, apellido } = req.body;
    const estado = 1; //activo
    const tipo = 3; //usuario registrado
    const [rows] = await pool.query(
      "INSERT INTO user(user,nombre,apellido,tipo,estado) VALUES(?,?,?,?,?)",
      [user, nombre, apellido, tipo, estado]
    );

    /*
    console.log({
      id: rows.insertId,
      user,
      nombre,
      apellido,
      succes: ok,
    });*/

    res.send({
      id: rows.insertId,
      user,
      nombre,
      apellido,
      succes: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
      error,
    });
  }
};
export const updateUser = async (req, res) => {
  //res.send("actualizando usuarios");
  try {
    const id_user = req.params.id;
    const { user, nombre, apellido } = req.body;
    const [result] = await pool.query(
      "UPDATE user SET user=IFNULL(?,user),nombre=IFNULL(?,nombre),apellido=IFNULL(?,apellido) WHERE id=?",
      [user, nombre, apellido, id_user]
    );
    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: "User not found",
        error: 404,
      });
    }
    const [rows] = await pool.query("SELECT * FROM user WHERE id=?", [id_user]);
    res.json({
      id: rows.insertId,
      user,
      nombre,
      apellido,
      success: "ok",
      affectedRows: result.affectedRows,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
export const deleteUser = async (req, res) => {
  //res.send("eliminando usuarios");
  try {
    const id_user = req.params.id;
    const result = await pool.query("DELETE * FROM user WHERE id=?", [id_user]);
    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: "User not found",
        error: 404,
      });
    }
    //res.sendStatus(204);
    res.json({
      success: "ok",
      affectedRows: result.affectedRows,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
