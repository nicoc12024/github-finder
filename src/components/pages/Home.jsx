import Alert from "../layout/Alert";
import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

function Home() {
  return (
    <div className="px-3">
      <Alert />
      <UserSearch />
      <UserResults />
    </div>
  );
}
export default Home;
