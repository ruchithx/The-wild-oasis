/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import styled from "styled-components";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProtectedRoute = ({ children }) => {
  // load the authenticated user
  const navigate = useNavigate();

  const { user, isLoading, isAuthenticated } = useUser();

  console.log(user);
  // if the user is not authenticated, redirect to the login page

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // while loading show spinner

  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  // if the user is authenticated, show the children
  if (isAuthenticated) {
    return <div>{children}</div>;
  }
};

export default ProtectedRoute;
