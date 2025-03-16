import React from "react";
import BackToShopBtn from "../components/BackToShopBtn";
import Container from "../components/Container";
const ErrorScreen = () => {
  return (
    <Container className="mt-[97px] lg:mt-[150px] px-4 lg:px-40">
      <div class="bg-gray-200 w-full md:px-16 px-2 h-screen flex items-center justify-center">
        <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
          <p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-secondary">
            404
          </p>
          <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-black mt-4">
            Page Not Found
          </p>
          <p class="text-secondary mt-4 pb-4 border-b-2 text-center mb-5">
            Sorry, the page you are looking for could not be found.
          </p>
          <BackToShopBtn></BackToShopBtn>
        </div>
      </div>
    </Container>
  );
};

export default ErrorScreen;
