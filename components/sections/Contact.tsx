import classNames from "classnames";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { ContactLinkType } from "../../lib/ContactLinks";
interface ContractProps {
  onFormSubmit: Function;
  className?: string;
  id?: string;
  links: ContactLinkType[];
  budgetOptions: string[];
  headline: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  budgetLabel: string;
  sendBtnText: string;
}

/**
 *
 * @return {React.ReactNode}
 */
const Contact: React.FC<ContractProps> = ({
  onFormSubmit,
  className,
  budgetOptions: budgets,
  headline,
  nameLabel,
  namePlaceholder,
  budgetLabel,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  sendBtnText,
  links,
  id = undefined,
}) => {
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
    <div id={id} className={className}>
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
          className="mt-28 grid max-w-7xl grid-cols-1 content-center gap-8 lg:grid-cols-8"
        >
          <input type="hidden" name="form-name" value="contact" required />
          <span hidden>
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </span>
          <div className="col-span-1 lg:col-span-2">
            <h2 className="mb-4 block h-auto items-center text-[1.69rem] font-semibold leading-8 md:mb-4 md:h-32 md:text-4xl md:leading-tight lg:flex lg:h-60">
              <span dangerouslySetInnerHTML={{ __html: headline }} />
            </h2>
            <label className="block" htmlFor="budget">
              {budgetLabel}
              <select
                required
                className="mb-4 mt-2 block w-full rounded-lg bg-white px-3 py-2 text-lg text-dark ring-2 ring-dark/10 transition placeholder:text-dark/50 focus:border-primary/25 focus:ring-4 focus:ring-primary focus:ring-opacity-25 dark:bg-darker dark:text-light dark:ring-light/5 dark:placeholder:text-light/50 dark:focus:border-primary_dark/75 dark:focus:ring-primary_dark dark:focus:ring-opacity-10"
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
              {nameLabel}
              <input
                required
                name="Name"
                id="name"
                type={"text"}
                placeholder={namePlaceholder}
                className="mb-4 mt-2 block w-full rounded-lg bg-white px-3 py-2 text-lg text-dark ring-2 ring-dark/10 transition placeholder:text-dark/50 focus:border-primary/25 focus:ring-4 focus:ring-primary focus:ring-opacity-25 dark:bg-darker dark:text-light dark:ring-light/5 dark:placeholder:text-light/50 dark:focus:border-primary_dark/75 dark:focus:ring-primary_dark dark:focus:ring-opacity-10"
              />
            </label>
            <label className="block" htmlFor="email">
              {emailLabel}
              <input
                required
                name="E-Mail"
                id="email"
                type={"email"}
                placeholder={emailPlaceholder}
                className="mb-4 mt-2 block w-full rounded-lg bg-white px-3 py-2 text-lg text-dark ring-2 ring-dark/10 transition placeholder:text-dark/50 focus:border-primary/25 focus:ring-4 focus:ring-primary focus:ring-opacity-25 dark:bg-darker dark:text-light dark:ring-light/5 dark:placeholder:text-light/50 dark:focus:border-primary_dark/75 dark:focus:ring-primary_dark dark:focus:ring-opacity-10"
              />
            </label>
          </div>
          <div className="col-span-1 -mt-8 lg:col-span-6 lg:mt-0">
            <label className="block" htmlFor="message">
              {messageLabel}
              <textarea
                placeholder={messagePlaceholder}
                required
                name="Message"
                id="message"
                className={classNames(
                  "mb-4 mt-2 block h-28 w-full rounded-lg bg-white px-3 py-2 text-lg text-dark ring-2 ring-dark/10 transition placeholder:text-dark/50 focus:border-primary/25 focus:ring-4 focus:ring-primary focus:ring-opacity-25 dark:bg-darker dark:text-light dark:ring-light/5 dark:placeholder:text-light/50 dark:focus:border-primary_dark/75 dark:focus:ring-primary_dark dark:focus:ring-opacity-10 md:h-40 lg:h-[24rem]"
                )}
              />
            </label>
            <div className="mb-6 grid grid-cols-6 gap-4 md:mb-0 lg:grid-cols-4 lg:gap-2">
              <button
                type="submit"
                className="order-first col-span-6 mb-4 mt-2 w-full rounded-md bg-primary py-2 text-lg font-semibold text-white transition lg:order-4 lg:col-span-1 lg:mb-0 lg:mt-0"
              >
                {sendBtnText}
              </button>
              {links.map((link, i) => {
                let orderNum = i + 1;
                if (links.length / 2 == i) {
                  orderNum += 1;
                }
                return (
                  <a
                    className="col-span-1 flex items-center justify-center font-semibold text-dark no-underline dark:text-light md:col-span-2 md:justify-start lg:col-span-1"
                    href={link.url}
                    key={link.id}
                    style={{ order: orderNum }}
                  >
                    <SVG
                      src={link.svg}
                      className="inline align-middle"
                      height={25}
                      width={25}
                    />
                    <span className="hidden px-1 md:inline" />
                    <span className="sr-only md:not-sr-only">
                      {link.username}
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
};

export default Contact;
