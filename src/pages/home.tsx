import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section>
      <h1>Home</h1>
      <Link to={"/other"}>Go to other page</Link>
    </section>
  );
};
