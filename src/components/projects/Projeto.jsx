import { projectsData } from "./Data";
import ItemsProjetos from "./ItemsProjetos";

const Projeto = () => {
  return (
    <div className="work__container container grid">
      {projectsData.map((item) => {
        return <ItemsProjetos item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Projeto;
