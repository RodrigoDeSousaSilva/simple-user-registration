//responsavel por receber os dados direto do usuiario

import {
  createUser,
  deleteUser,
  updateUser,
  users,
} from "../repository";
import {
  validateUserData,
  validateUserDelete,
  validateUserUpdate,
  ValidateShowUser
} from "../validate";
import * as yup from "yup";

//Criar o usuários
export const createUserData = async (req, res) => {
  try {
    const user = req.body;
    const validateData = await validateUserData.validate(user, {abortEarly: false});

    if (validateData) {
      const data = createUser(user);
      res.status(200).send(`Usuário criado com sucesso `);
    }
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      res.status(400).send(error.errors);
    } else {
      res.status(500).send("Ocorre um erro interno");
    }
  }
};

//exibir o usuario
export const showUserData = async (req, res) => {
  try {
    const show = users
    const showData = await ValidateShowUser.validate()

    if (showData) {
      res.status(200).send(`${show}`)
    }
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      res.status(400).send(error.errors);
    } else {
      res.status(500).send("Ocorre um erro interno");
    }

  }
}

//atualizar usuario

export const updateUserData = async (req, res) => {
  try {
    const updates = req.body;
    if (validateUserExist(users)) {
      if (validateUserUpdate(users, updates)) {
        const dataUpdate = updateUser(updates);
        res.status(200).send("Usuário alterado com sucesso");
      } else {
        res.status(400).send("nenhuma alteração foi encontrada");
      }
    } else {
      res.status(400).send("Usuario não existe");
    }
  } catch (error) {
    res.status(500).send("Ocorre um erro interno");
  }
};

//deletar usuario

export const deleteUserData = async (req, res) => {
  try {
    const userId = req.body;
    if (validateUserDelete(userId, users)) {
      const userDeleted = deleteUser();
      res.status(200).send("Usuário deletado com sucesso");
    } else {
      res.status(400).send("Usuario não exite");
    }
  } catch (error) {
    res.status(500).send("Ocorre um erro interno");
  }
};
