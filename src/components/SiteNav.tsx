/*!
 * Voice orb by UV · https://github.com/imuvrays1/voice-orb
 * Copyright (c) 2026 UV · MIT License (see LICENSE). Keep this notice in copies.
 */

import Link from "next/link";
import { ORB_AUTHOR, ORB_LAB, ORB_REPO } from "@/data/orb";
import GitHubStars from "./GitHubStars";
import styles from "./SiteNav.module.css";

const N = ORB_LAB.nav;
const F = ORB_LAB.footer;

/**
 * The bar across the top: the mark, jumps to the page's main sections, and
 * the repository with its live star count. Sits inside the page's ground, so
 * it follows the light and dark grounds.
 */
export default function SiteNav() {
  return (
    <nav className={styles.nav} aria-label={N.home}>
      <div className={styles.inner}>
        <Link href="/" className={styles.mark}>
          <span className={styles.dot} aria-hidden="true" />
          {N.home}
        </Link>
        <div className={styles.end}>
          <ul className={styles.links}>
            {N.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <GitHubStars owner={ORB_REPO.owner} repo={ORB_REPO.name} label={N.starLabel} star={N.star} />
        </div>
      </div>
    </nav>
  );
}

/** "Built by" with the author's link, for the hero and the footer. */
export function Byline({ className }: { className?: string }) {
  return (
    <p className={className}>
      {F.built}{" "}
      <a href={ORB_AUTHOR.url} target="_blank" rel="noreferrer">
        {ORB_AUTHOR.name}
      </a>
      {" · "}
      <a href={ORB_REPO.license} target="_blank" rel="noreferrer">
        {F.licence}
      </a>
    </p>
  );
}

/** The foot of the page: who made it, its licence, and the two links that matter. */
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Byline className={styles.footerBy} />
      <p className={styles.footerLinks}>
        <a href={ORB_REPO.url}>{F.source}</a>
        <a href={ORB_LAB.more.href}>{F.journal}</a>
      </p>
    </footer>
  );
}
