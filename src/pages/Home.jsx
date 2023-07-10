import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Category from "../components/Category";

function Home() {
  return (
    <div>
      <Category />
      <Veggie />
      <Popular />
    </div>
  );
}

export default Home;