import { object, string, number, instaceof} from "yup";
import { updateUser} from "../repository";

//validar dados para criar usuario
let validateUserData = object({
  name: string().required(),
  password: string().required(),
  email: string().email(),
  id: number(),
});

let ValidateShowUser = object({
  name: string().required(),
  password: string().required(),
  email: string().email(),
  id: number(),
})

//verificar dados para atualizar dados
function validateUserExist(change) {
  //verificar se existe um usuário

  if (change.name !== "" || change.email !== "" || change.password == "") {
    return true;
  }
}

function validateUserUpdate(change, update) {
  const userName = update.name === change.name;
  const userPassword = update.password === change.password;
  const userEmail = update.email === change.email;

  if (!userName || !userPassword || !userEmail) {
    return true;
  }
}

//verificar se o usuario existe pelo id
function validateUserDelete(userId, user) {
  if (userId.id === user.id) {
    return true;
  }
}

export {
  validateUserData,
  validateUserExist,
  validateUserDelete,
  validateUserUpdate,
  ValidateShowUser
};
