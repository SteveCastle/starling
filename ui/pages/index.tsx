import { NextPage } from "next";
import { withApollo } from "../lib/apollo";
import Movements from "../components/Movements";

const Home: NextPage = () => {
  return <Movements />;
};

export default withApollo(Home);
