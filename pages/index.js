import React from "react";
import Link from "next/link";
import { FaGraduationCap, FaTasks, FaArrowRight } from "react-icons/fa";
import { GiBookshelf, GiProgression } from "react-icons/gi";
import styles from "../styles/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles["landing-page"]}>
      {/* Call-to-Action Button at Top Right */}
      <div className={styles["top-right-cta"]}>
        <Link href="/initial-setup" className={styles["cta-button"]}>
          <FaArrowRight size={18} className={styles["cta-icon"]} />
          Let's Get Started!
        </Link>
      </div>

      {/* Header Section */}
      <header className={styles["header"]}>
        <div className={styles["logo"]}>
          <FaGraduationCap size={80} color="#FFD700" />
        </div>
        <h1 className={styles["title"]}>AssistMe</h1>
        <p className={styles["tagline"]}>Your personal academic assistant</p>
      </header>

      {/* About the App Section */}
      <section className={styles["about"]}>
        <h2>What is AssistMe?</h2>
        <p>
          AssistMe is an intelligent bot designed to optimize the student
          experience by helping you set, track, and achieve your academic goals.
        </p>
        <div className={styles["features"]}>
          <div className={styles["feature"]}>
            <FaTasks size={50} color="#4CAF50" />
            <h3>Set Goals</h3>
            <p>Define your academic objectives and challenges.</p>
          </div>
          <div className={styles["feature"]}>
            <GiBookshelf size={50} color="#FF5722" />
            <h3>Get Resources</h3>
            <p>Receive curated resources tailored to your goals.</p>
          </div>
          <div className={styles["feature"]}>
            <GiProgression size={50} color="#2196F3" />
            <h3>Track Progress</h3>
            <p>Monitor your achievements and get actionable insights.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles["footer"]}>
        <p>&copy; {new Date().getFullYear()} AssistMe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
