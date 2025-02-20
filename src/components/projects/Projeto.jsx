import { useEffect, useState } from "react";
import axios from "axios";
import ItemsProjetos from "./ItemsProjetos";

const Projeto = () => {
  const [projects, setProjects] = useState([])

  const getProjects = async () => {
    try {
      const response = await axios.get("https://apifake-portfolio.vercel.app/projetos");

      const data = response.data
      setProjects(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <div className="work__container container grid">
      {projects.map((item) => {
        return <ItemsProjetos item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Projeto;
