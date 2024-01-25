'use client'
import React, { useState } from "react";

export default function Form() {

  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          password,
        }),
      });

      const data = await response.json();

      console.log("Respuesta:", data);

      if (response.ok) {
        console.log("Token:", data.token);
        console.log("Tipo de usuario:", data.typeUser);
        console.log("Nombre de usuario:", data.userName);
      
        alert("Autenticación exitosa");
        alert("Token: " + data.token);
        alert("Tipo de usuario: " + data.typeUser);
      } else {
        setError(data.error || "Error de autenticación");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setError("Error en la solicitud");
    }
  };

  return (
    <form className="grid rounded-sm p-12 shadow-lg h-auto gap-8 items-center justify-center bg-white bg-opacity-20 backdrop-blur-lg">
      <h1 className="text-2xl font-semibold text-center">Iniciar sesión</h1>

      <div className="flex gap-2 flex-col min-w-96">
        <label className="font-semibold text-sm">Nombre de usuario</label>
        <input
          className="w-full outline-none rounded-sm p-2 pl-3"
          type="text"
          placeholder="example: myname"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="flex gap-2 flex-col min-w-96">
        <label className="font-semibold text-sm">Contraseña</label>
        <div className="relative">
          <input
            className="w-full outline-none rounded-sm p-2 pl-3"
            type={showPassword ? "text" : "password"}
            placeholder="example: pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-2 top-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <div className="flex w-full items-center justify-center">
        <button className="pl-4 pr-4 pb-2 pt-2 rounded-sm shadow-lg bg-white hover:bg-red-400 hover:text-white" onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </form>
  );
}
