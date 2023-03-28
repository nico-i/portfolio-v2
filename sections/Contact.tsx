import classNames from "classnames";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import footerData from "../data/footerData";

interface Props {
  onFormSubmit: Function;
}

/**
 *
 * @return {React.ReactNode}
 */
export default function Contact({ onFormSubmit }: Props) {
  const { t } = useTranslation("contact");
  const budgets = [
    t("option-budget-0"),
    t("option-budget-1"),
    t("option-budget-2"),
    t("option-budget-3"),
  ];
  const [budget, setBudget] = useState(budgets[0]);
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formElements = [...event.currentTarget.elements];
    const isNoBotSubmit =
      formElements.filter((item) => item.name === "bot-field")[0].value === "";
    const validFormElements = isNoBotSubmit ? formElements : [];
    if (validFormElements.length < 1) {
      onFormSubmit(-1);
    } else {
      const filledOutElements = validFormElements
        .filter((elem) => !!elem.value)
        .map((element) => {
          if (encodeURIComponent(element.name).includes("Budget")) {
            return (
              encodeURIComponent("Budget") + "=" + encodeURIComponent(budget)
            );
          }
          return (
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
          );
        })
        .join("&");

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          onFormSubmit(1);
          event.target.reset();
        })
        .catch((_) => {
          onFormSubmit(-1);
        });
    }
  };
  return (
    <div
      id="contact"
      className="flex h-full w-full snap-center snap-always items-center justify-center px-8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      >
        <form
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="contact"
          onSubmit={onSubmit}
          className="mt-28 mb-20 grid max-w-7xl grid-cols-1 content-center gap-8 lg:grid-cols-8"
        >
          <input type="hidden" name="form-name" value="contact" required />
          <p hidden>
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-4 block h-auto items-center text-[1.7rem] md:h-32 md:text-4xl lg:flex lg:h-60">
              <h2 className="text-4xl font-semibold leading-[1.15] md:mb-4 md:leading-tight">
                <span dangerouslySetInnerHTML={{ __html: t("h2-0-txt-0") }} />
              </h2>
            </div>
            <label className="block" htmlFor="budget">
              {t("label-budget")}
              <select
                required
                className="mt-2 mb-4 block w-full rounded-lg bg-white py-2 px-3 text-lg text-dark ring-2 ring-dark/10 transition placeholder:text-dark/50 focus:border-primary/25 focus:ring-4 focus:ring-primary focus:ring-opacity-25 dark:bg-darker dark:text-light dark:ring-light/5 dark:placeholder:text-light/50 dark:focus:border-primary_dark/75 dark:focus:ring-primary_dark dark:focus:ring-opacity-10"
                onChange={(e) => setBudget(e.target.value)}
                name="Budget"
                id="budget"
              >
                <option value={budgets[0]}>{budgets[0]}</option>
                <option value={budgets[1]}>{budgets[1]}</option>
                <option value={budgets[2]}>{budgets[2]}</option>
                <option value={budgets[3]}>{budgets[3]}</option>
              </select>
            </label>
            <label className="block" htmlFor="name">
              {t("label-name")}
              <input
                required
                name="Name"
                id="name"
                type={"text"}
                placeholder={t("input-name-placeholder")}
                className="mt-2 mb-4 block w-full rounded-lg bg-white py-2 px-3 text-lg text-dark ring-2 ring-dark/10 transition placeholder:text-dark/50 focus:border-primary/25 focus:ring-4 focus:ring-primary focus:ring-opacity-25 dark:bg-darker dark:text-light dark:ring-light/5 dark:placeholder:text-light/50 dark:focus:border-primary_dark/75 dark:focus:ring-primary_dark dark:focus:ring-opacity-10"
              />
            </label>
            <label className="block" htmlFor="email">
              {t("label-email")}
              <input
                required
                name="E-Mail"
                id="email"
                type={"email"}
                placeholder={t("input-email-placeholder")}
                className="mt-2 mb-4 block w-full rounded-lg bg-white py-2 px-3 text-lg text-dark ring-2 ring-dark/10 transition placeholder:text-dark/50 focus:border-primary/25 focus:ring-4 focus:ring-primary focus:ring-opacity-25 dark:bg-darker dark:text-light dark:ring-light/5 dark:placeholder:text-light/50 dark:focus:border-primary_dark/75 dark:focus:ring-primary_dark dark:focus:ring-opacity-10"
              />
            </label>
          </div>
          <div className="col-span-1 -mt-8 lg:col-span-6 lg:mt-0">
            <label className="block" htmlFor="message">
              {t("label-message")}
              <textarea
                required
                name="Message"
                id="message"
                className={classNames(
                  "mt-2 mb-4 block h-28 w-full rounded-lg bg-white py-2 px-3 text-lg text-dark ring-2 ring-dark/10 transition placeholder:text-dark/50 focus:border-primary/25 focus:ring-4 focus:ring-primary focus:ring-opacity-25 dark:bg-darker dark:text-light dark:ring-light/5 dark:placeholder:text-light/50 dark:focus:border-primary_dark/75 dark:focus:ring-primary_dark dark:focus:ring-opacity-10 md:h-40 lg:h-[24rem]"
                )}
              />
            </label>
            <div className="mb-6 grid grid-cols-6 gap-4 md:mb-0 lg:grid-cols-4 lg:gap-2">
              <button
                type="submit"
                className="order-first col-span-6 mb-4 mt-2 w-full rounded-md bg-primary py-2 text-lg font-semibold text-white transition lg:order-4 lg:col-span-1 lg:mt-0 lg:mb-0"
              >
                {t("button-send")}
              </button>
              {footerData.map((smLink, i) => {
                let orderNum = i + 1;
                if (footerData.length / 2 == i) {
                  orderNum += 1;
                }
                return (
                  <a
                    className="col-span-1 flex items-center justify-center font-semibold text-dark no-underline dark:text-light md:col-span-2 md:justify-start lg:col-span-1"
                    href={smLink.href}
                    key={`${smLink.text}-${i}`}
                    style={{ order: orderNum }}
                  >
                    <smLink.Icon size={25} className="inline align-middle" />
                    <span className="hidden px-1 md:inline" />
                    <span className="sr-only md:not-sr-only">
                      {smLink.text}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
