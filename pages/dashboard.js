import React from "react";
import { useRouter } from "next/router";
import {
  FaTasks,
  FaBook,
  FaChartLine,
  FaBell,
  FaArrowRight,
  FaArrowLeft,
  FaHome,
} from "react-icons/fa";
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
  const router = useRouter();

  // Example Data
  const userName = "John Doe"; // Replace with dynamic user data
  const activeGoals = [
    { description: "Prepare for Midterms", progress: 50 },
    { description: "Improve GPA", progress: 30 },
    { description: "Develop Study Plan", progress: 70 },
    { description: "Finish Research Project", progress: 90 },
  ];
  const notifications = [
    "You have 2 goals due this week.",
    "Review study tips for your upcoming exam.",
    "Your GPA target progress is at 30%.",
  ];

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.navButtons}>
          <button
            className={styles.navButton}
            onClick={() => router.push("/initial-setup")}
          >
            <FaArrowLeft className={styles.navIcon} /> Back
          </button>
          <button className={styles.navButton} onClick={() => router.push("/")}>
            <FaHome className={styles.navIcon} /> Home
          </button>
        </div>
        <h1 className={styles.greeting}>Welcome back, {userName}!</h1>
        <p className={styles.subtitle}>
          Stay on track with your academic goals and progress.
        </p>
      </header>

      <main className={styles.main}>
        {/* Active Goals Overview */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaTasks className={styles.icon} /> Active Goals
          </h2>
          <div className={styles.cards}>
            {activeGoals.map((goal, index) => (
              <div key={index} className={`${styles.card} ${styles.goalCard}`}>
                <p className={styles.goalDescription}>{goal.description}</p>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progress}
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                <p className={styles.progressText}>{goal.progress}% Complete</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notifications */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaBell className={styles.icon} /> Notifications
          </h2>
          <ul className={styles.notifications}>
            {notifications.map((note, index) => (
              <li key={index} className={styles.notification}>
                {note}
              </li>
            ))}
          </ul>
        </section>

        {/* Quick Links */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaArrowRight className={styles.icon} /> Quick Links
          </h2>
          <div className={styles.quickLinks}>
            <button
              className={`${styles.quickLink} ${styles.goalsLink}`}
              onClick={() => router.push("/goals")}
            >
              <FaTasks className={styles.quickLinkIcon} /> Goals
            </button>
            <button
              className={`${styles.quickLink} ${styles.resourcesLink}`}
              onClick={() => router.push("/resources")}
            >
              <FaBook className={styles.quickLinkIcon} /> Resources
            </button>
            <button
              className={`${styles.quickLink} ${styles.progressLink}`}
              onClick={() => router.push("/progress")}
            >
              <FaChartLine className={styles.quickLinkIcon} /> Progress
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
