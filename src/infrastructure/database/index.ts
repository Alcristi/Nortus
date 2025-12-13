export interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  passport: string;
  password: string; 
}

const users: User[] = [
  {
    id: "1",
    name: "Ana Silva",
    email: "ana.silva@nortus.com",
    cpf: "123.456.789-00",
    passport: "BR123456",
    password: "senha_segura_123",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john.doe@email.com",
    cpf: "000.000.000-00", 
    passport: "USA987654321",
    password: "password!2024",
  },
  {
    id: "3",
    name: "Roberto Carlos",
    email: "roberto@music.com",
    cpf: "987.654.321-99",
    passport: "", 
    password: "detalhes_tao_pequenos",
  },
];


export function findUser(loginInput: string) {
  return users.find(user => 
    user.email === loginInput || 
    user.cpf === loginInput || 
    user.passport === loginInput
  );
}