"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

type Tab = {
  title: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <>
      <div
        className={cn(
          "relative flex w-fit max-w-full flex-row items-center justify-start rounded-full bg-card p-2",
          containerClassName,
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn(
              "relative rounded-full px-2 py-1 md:px-4 md:py-2",
              tabClassName,
            )}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 rounded-full bg-primary text-primary-foreground",
                  activeTabClassName,
                )}
              />
            )}
            <h2 className="relative block text-sm md:text-lg">{tab.title}</h2>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        className={contentClassName}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative h-full w-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={idx}
          layoutId={tab.value}
          initial={{
            filter: "blur(5px)",
            opacity: 0,
          }}
          animate={{
            transition: {
              duration: 0.4,
            },
            filter: "blur(0px)",
            opacity: isActive(tab) ? 1 : 0,
          }}
          style={{
            zIndex: isActive(tab) ? 1 : -50,
            position: isActive(tab) ? "relative" : "absolute",
          }}
          className={cn(`left-0 top-0 h-full w-full`, className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
