import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import { usersContext } from "../contexts/usersContext";
import UserInfoSkeleton from "../components/skeletonLoaders/UserInfoSkeleton";
import DataTable from "../components/DataTable";
import Error from "../../public/Error.jpg";

const Home = () => {
  const { users, error, loading } = useContext(usersContext);

  if (error) return <div>
    <div>
      <h1>Some error occurred!</h1>
      <img src={Error} alt="404 Error" />
    </div>
  </div>;

  return !loading ? (
    <div className="app">
      <div className="w-3/4 m-auto">
        <DataTable />
      </div>
    </div>
  ) : (
    <UserInfoSkeleton />
  );
};

export default Home;
