import { useEffect, useState } from "react";
import axios from "axios";
import ItemsProjetos from "./ItemsProjetos";

const Projeto = ({ category }) => {
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
  }, []);

  const filteredProjects = projects.filter((item) => item.category === category)

  return (
    <div className="work__container container grid">
      {filteredProjects.map((item) => {
        return <ItemsProjetos item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Projeto;
