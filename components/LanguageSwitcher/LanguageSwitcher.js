"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../i18n-config";
import styles from './LanguageSwitcher.module.scss'

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const redirectedPathname = (locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <ul className={styles.wrapper}>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale} className={styles.item}>
              <Link href={redirectedPathname(locale)} className={styles.link}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
