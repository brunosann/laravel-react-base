import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../form/Input";
import { login, a } from "../../Api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return setError("Preencha todos os campos!");
    setError(null);
    const response = await login({ email, password, device: "web-site" });
  };

  return (
    <div className="showEntry container mt-5">
      <div className="row">
        <form onSubmit={handleSubmit} className="col-sm-4 offset-sm-4">
          <Input value={email} setValue={setEmail} type="text" label="email" />
          <Input
            value={password}
            setValue={setPassword}
            type="password"
            label="senha"
          />
          <button type="submit" className="btn btn-primary btn-block mb-3">
            Login
          </button>
          {error && <p className="text-danger text-center">{error}</p>}
          <Link
            to="usuario/redefinir"
            className="d-block text-center text-decoration-none"
          >
            Esqueceu a senha?
          </Link>
          <Link
            to="usuario/cadastrar"
            className="d-block text-center text-decoration-none"
          >
            Cadastre-se
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
