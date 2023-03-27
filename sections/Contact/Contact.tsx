import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import footerData from "../../data/footerData";

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
    <form
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact"
      onSubmit={onSubmit}
      className="grid grid-cols-1 lg:grid-cols-8 content-center max-w-7xl mt-28 gap-8 mb-10"
    >
      <input type="hidden" name="form-name" value="contact" required />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="col-span-1 lg:col-span-2">
        <div className="block text-[1.7rem] md:text-4xl h-52 md:h-32 lg:h-60 lg:flex items-center">
          <h2>
            <span dangerouslySetInnerHTML={{ __html: t("h2-0-txt-0") }} />
          </h2>
        </div>
        <label className="block" htmlFor="budget">
          {t("label-budget")}
          <select
            required
            className="transition text-lg mt-2 mb-4 py-2 px-3 placeholder:text-dark/50 dark:placeholder:text-light/50 bg-lighter dark:bg-darker text-dark dark:text-light ring-dark/10 dark:ring-light/5 ring-2 block w-full rounded-lg focus:border-primary/25 dark:focus:border-primary_dark/75 focus:ring-primary focus:ring-4 dark:focus:ring-primary_dark focus:ring-opacity-25 dark:focus:ring-opacity-10"
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
            className="transition text-lg mt-2 mb-4 py-2 px-3 placeholder:text-dark/50 dark:placeholder:text-light/50 bg-lighter dark:bg-darker text-dark dark:text-light ring-dark/10 dark:ring-light/5 ring-2 block w-full rounded-lg focus:border-primary/25 dark:focus:border-primary_dark/75 focus:ring-primary focus:ring-4 dark:focus:ring-primary_dark focus:ring-opacity-25 dark:focus:ring-opacity-10"
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
            className="transition text-lg mt-2 mb-4 py-2 px-3 placeholder:text-dark/50 dark:placeholder:text-light/50 bg-lighter dark:bg-darker text-dark dark:text-light ring-dark/10 dark:ring-light/5 ring-2 block w-full rounded-lg focus:border-primary/25 dark:focus:border-primary_dark/75 focus:ring-primary focus:ring-4 dark:focus:ring-primary_dark focus:ring-opacity-25 dark:focus:ring-opacity-10"
          />
        </label>
      </div>
      <div className="col-span-1 -mt-8 lg:mt-0 lg:col-span-6">
        <label className="block" htmlFor="message">
          {t("label-message")}
          <textarea
            required
            name="Message"
            id="message"
            className={classNames(
              "transition text-lg mt-2 mb-4 py-2 px-3 placeholder:text-dark/50 dark:placeholder:text-light/50 bg-lighter dark:bg-darker text-dark dark:text-light ring-dark/10 dark:ring-light/5 ring-2 block w-full rounded-lg focus:border-primary/25 dark:focus:border-primary_dark/75 focus:ring-primary focus:ring-4 dark:focus:ring-primary_dark focus:ring-opacity-25 dark:focus:ring-opacity-10 h-28 md:h-40 lg:h-[24rem]"
            )}
          />
        </label>
        <div className="grid grid-cols-6 lg:grid-cols-4 gap-4 lg:gap-2 mb-6 md:mb-0">
          <button
            type="submit"
            className="order-first lg:order-4 text-lg mb-4 mt-2 lg:mt-0 lg:mb-0 font-semibold transition text-lighter bg-primary w-full py-2 rounded-md col-span-6 lg:col-span-1"
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
                className="flex justify-center items-center md:justify-start text-dark col-span-1 md:col-span-2 lg:col-span-1 dark:text-light no-underline font-semibold"
                href={smLink.href}
                key={`${smLink.text}`}
                style={{ order: orderNum }}
              >
                <smLink.Icon size={25} className="inline align-middle" />
                <span className="px-1 hidden md:inline" />
                <span className="sr-only md:not-sr-only">{smLink.text}</span>
              </a>
            );
          })}
        </div>
      </div>
    </form>
  );
}
