"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X, Search } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  navigationCallToAction,
  primaryNavigationItems,
} from "@/config/site-navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-[100] bg-background text-foreground border-b border-border/40 transition-colors duration-300 shadow-sm"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          


          {/* Solid Navigation Menu */}
          <div className="hidden xl:flex items-center space-x-2 2xl:space-x-4 flex-1 justify-start">
            {primaryNavigationItems.map((item) => {
              if (item.children?.length || item.groups?.length) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    ref={activeDropdown === item.label ? dropdownRef : null}
                  >
                    <button className="relative flex items-center gap-1.5 text-foreground/90 hover:text-primary font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-md transition-all duration-300 hover:bg-foreground/5 group">
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 opacity-70 group-hover:opacity-100 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full mt-2 bg-card text-card-foreground rounded-xl shadow-2xl border border-border p-6 z-[150] origin-top ${
                            item.menuVariant === "mega" || item.menuVariant === "more"
                              ? "left-1/2 -translate-x-1/2 w-[800px]"
                              : "left-0 min-w-[300px]"
                          }`}
                        >
                          <div
                            className={
                              item.menuVariant === "mega" || item.menuVariant === "more"
                                ? "grid grid-cols-3 gap-8"
                                : "flex flex-col gap-2"
                            }
                          >
                            {item.groups ? (
                              item.groups.map((group) => (
                                <div key={group.label} className="flex flex-col gap-3">
                                  <h3 className="text-[11px] font-black uppercase text-primary tracking-widest mb-1">{group.label}</h3>
                                  <div className="flex flex-col gap-1.5">
                                    {group.links.map((child) => (
                                      <Link
                                        href={child.href}
                                        key={child.label}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group/link flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                                      >
                                        <div className="p-2 rounded-md bg-muted text-muted-foreground group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                                          <child.icon className="w-4 h-4" />
                                        </div>
                                        <h4 className="font-semibold text-xs text-foreground group-hover/link:text-primary transition-colors">
                                          {child.label}
                                        </h4>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            ) : (
                              item.children?.map((child) => (
                                <Link
                                  href={child.href}
                                  key={child.label}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group/link flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors"
                                >
                                  <div className="p-3 rounded-lg bg-muted text-muted-foreground group-hover/link:bg-primary group-hover/link:text-white transition-colors shadow-sm">
                                    <child.icon className="w-5 h-5" />
                                  </div>
                                  <h4 className="font-bold text-sm text-foreground group-hover/link:text-primary transition-colors">
                                    {child.label}
                                  </h4>
                                </Link>
                              ))
                            )}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-foreground/90 hover:text-primary font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-md transition-all duration-300 hover:bg-foreground/5"
                >
                  {item.icon ? <item.icon className="w-4 h-4" /> : item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center gap-5">
            {mounted ? (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-all duration-200"
              >
                {theme === "dark" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </button>
            ) : null}
            <button className="p-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-all duration-200">
               <Search className="w-4 h-4" />
            </button>
          </div>

          <div className="xl:hidden flex items-center gap-3">
            {mounted ? (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-foreground/5 text-foreground hover:bg-foreground/10"
              >
                {theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            ) : null}

            <button
              className="p-2 text-foreground bg-foreground/5 rounded-md hover:bg-foreground/10"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-white/10 bg-primary"
          >
            <div className="max-h-[75vh] overflow-y-auto px-4 py-6 flex flex-col space-y-2">
              {primaryNavigationItems.map((item) => {
                if (item.children?.length || item.groups?.length) {
                  return (
                    <div key={item.label} className="flex flex-col">
                      <button
                        onClick={() =>
                          setActiveDropdown((current) =>
                            current === item.label ? null : item.label,
                          )
                        }
                        className="flex items-center justify-between w-full p-4 text-sm text-white font-bold uppercase tracking-wider rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-black/20 rounded-xl overflow-hidden mt-2"
                          >
                            <div className="flex flex-col p-3 gap-4">
                              {item.groups ? (
                                item.groups.map((group) => (
                                  <div key={group.label} className="flex flex-col gap-2">
                                    <h3 className="text-xs font-black uppercase text-white/50 border-b border-white/10 pb-2 mb-1 pl-2">{group.label}</h3>
                                    <div className="flex flex-col gap-1">
                                      {group.links.map((child) => (
                                        <Link
                                          key={child.label}
                                          href={child.href}
                                          onClick={() => setIsOpen(false)}
                                          className="flex items-center gap-3 p-3 hover:bg-white/10 transition-colors rounded-lg text-white"
                                        >
                                          <child.icon className="w-4 h-4 opacity-70" />
                                          <div className="text-sm font-semibold">
                                            {child.label}
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))
                              ) : (
                                item.children?.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 p-3 hover:bg-white/10 transition-colors rounded-lg text-white"
                                  >
                                    <child.icon className="w-4 h-4 opacity-70" />
                                    <div className="text-sm font-semibold">
                                      {child.label}
                                    </div>
                                  </Link>
                                ))
                              )}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 p-4 text-sm text-white font-bold uppercase tracking-wider rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && <item.icon className="w-4 h-4 opacity-70" />}
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-6">
                <Button
                  asChild
                  className="w-full rounded-lg h-12 bg-white text-primary hover:bg-white/90 font-black uppercase tracking-widest text-xs"
                >
                  <Link href={navigationCallToAction.mobile.href}>
                    {navigationCallToAction.mobile.label}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
