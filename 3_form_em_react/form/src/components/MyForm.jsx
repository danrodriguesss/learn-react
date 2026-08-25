import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // 6 - Controlled inputs
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  // console.log(name);
  // console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email);
  };

  return (
    <div>
      {/* 5 - Envio de forms */}
      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            autoComplete="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        <label>
          <span>E-mail:</span>
          {/* 4 - Simplificação de manipulação de state */}
          <input
            type="email"
            id="email"
            autoComplete="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
