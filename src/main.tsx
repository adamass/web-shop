import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="787437815662-kn88hdbbqkqk443p0o0mo1hohvp240qb.apps.googleusercontent.com">
    <React.StrictMode>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
            <ReactQueryDevtools />
          </BrowserRouter>
        </QueryClientProvider>
      </ChakraProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
