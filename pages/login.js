import React from "react";
import Layout from "../components/Layout";
import Authentication from "../components/Authentication";

const Login = () => {
  return (
    <Layout page="login">
      <Authentication />
    </Layout>
  );
};

export default Login;
