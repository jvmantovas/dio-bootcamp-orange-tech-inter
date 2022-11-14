import { useState, useEffect, useMemo, useCallback } from "react";

const Teste = () => {
  //useState serve para alterar o estado de um componente
  const [name, setName] = useState("João");
  const [age, setAge] = useState(26);

  const handleChangeName = () => {
    setName((prev) => (prev === "João" ? "José" : "João"));
  };

  //useEffect serve para gerenciar quando um componente esta renderizando, sofrendo alguma ação ou realizando alguma ação
  useEffect(() => {
    console.log("Renderizou o nome");
  }, [name]);
  useEffect(() => {
    console.log("Renderizou a idade");
  }, [age]);

  //useMemo memoriza algum valor que não precisa ser re-renderizado
  const calculo = useMemo(() => {
    console.log("calculou");
    return 10 * 26589;
  }, []);

  //useCallback memoriza uma FUNÇÃO que não precisa ser re-renderizada
  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;
    console.log("age atual", age, newAge);
    setAge((prev) => (prev === 26 ? 32 : 26));
  }, [age]);

  return (
    <div>
      <p>Nome:{name}</p>
      <p>Idade:{age}</p>
      <button onClick={handleChangeName}>Alterar Nome</button>
      <button onClick={handleChangeAge}>Alterar Idade</button>
      <p>Calculo Armazenado com useMemo:{calculo}</p>
    </div>
  );
};

export { Teste };
