import React from "react";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct";
import IconBanner from "../Icon/IconBanner";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
      <img
        src="./src/assets/wedp/hero-lg-x1.webp"
        className="w-full relative"
        alt=""
      />
      <div className="w-1/2  absolute top-1/2 left-1/4 z-10  ">
        <h1 class="KQ4yuTW text-6xl text-white font-normal text-center mb-10">
          {t("Find the right")} <span class="RZTFGbD text-green-500">{t("freelance")}</span>{" "}
        {t("service, right away")}
        </h1>
        <FormSearchProduct classWrapper="bg-white rounded-lg " />
        <div class="QQQcFjb text-gray-300 flex  gap-8 justify-between mt-10 " >
          <span class="Lg6kqKH">{t("Trusted by:")}</span>
          <IconBanner/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
