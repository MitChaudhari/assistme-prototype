import React, { useState } from "react";
import {
  FaBookmark,
  FaRegBookmark,
  FaThumbsUp,
  FaThumbsDown,
  FaTimes,
  FaArrowLeft,
  FaHome,
} from "react-icons/fa";
import { AiFillFileText, AiOutlinePlayCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import styles from "../styles/Resources.module.css";

const Resources = () => {
  const router = useRouter();
  const [resources] = useState([
    {
      id: 1,
      title: "Mastering Time Management",
      description:
        "Discover techniques to plan your day, set priorities, and avoid procrastination.",
      category: ["Article", "Time Management"],
      content: `Time management is about creating a balance between productivity and relaxation. Key techniques include:
- **Prioritization** using frameworks like **Eisenhower's Matrix**.
- Utilizing tools like **Pomodoro timers**.
- Reviewing daily tasks in a **journal**.

By mastering these, you can enhance both academic and personal growth.`,
    },
    {
      id: 2,
      title: "Exam Preparation 101",
      description:
        "Step-by-step guide to prepare for exams efficiently and reduce stress.",
      category: ["Guide", "Study Skills"],
      content: `Preparing for exams requires a structured plan:
- Start early with daily revisions.
- Focus on understanding concepts rather than rote learning.
- Use flashcards for quick reviews and active recall.
- Take regular breaks to retain focus.

Tailor this guide to match your learning style for best results.`,
    },
    {
      id: 3,
      title: "The Art of Creating a Study Plan",
      description:
        "A personalized guide to designing a study schedule that fits your goals.",
      category: ["Guide", "Productivity"],
      content: `A good study plan includes:
- Dividing subjects into manageable chunks.
- Allocating time for breaks and leisure.
- Setting clear, measurable goals (e.g., solve 10 practice problems daily).
- Adjusting schedules based on progress.

Consistency and adaptability are key to successful study planning.`,
    },
    {
      id: 4,
      title: "Balancing Work and Study",
      description:
        "Tips to manage academic commitments alongside part-time jobs.",
      category: ["Article", "Work-Life Balance"],
      content: `Balancing work and study involves:
- Communicating your schedule clearly with employers.
- Setting realistic goals for both work and academics.
- Leveraging technology for reminders and scheduling.

Maintaining flexibility ensures smoother transitions between commitments.`,
    },
  ]);

  const [selectedResource, setSelectedResource] = useState(null);
  const [bookmarkedResources, setBookmarkedResources] = useState([]);

  const handleBookmarkToggle = (id) => {
    if (bookmarkedResources.includes(id)) {
      setBookmarkedResources(
        bookmarkedResources.filter((resourceId) => resourceId !== id)
      );
    } else {
      setBookmarkedResources([...bookmarkedResources, id]);
    }
  };

  const openResourceModal = (resource) => {
    setSelectedResource(resource);
  };

  const closeResourceModal = () => {
    setSelectedResource(null);
  };

  return (
    <div className={styles.resources}>
      <header className={styles.header}>
        <div className={styles.navigation}>
          <button className={styles.navButton} onClick={() => router.push("/goals")}>
            <FaArrowLeft className={styles.icon} /> Back to Goals
          </button>
          <button className={styles.navButton} onClick={() => router.push("/dashboard")}>
            <FaHome className={styles.icon} /> Dashboard
          </button>
        </div>
        <h1 className={styles.title}>Explore Your Resources</h1>
        <p className={styles.subtitle}>
          Handpicked content to guide you through your academic journey.
        </p>
      </header>

      <main className={styles.main}>
        <div className={styles.cards}>
          {resources.map((resource) => (
            <div
              key={resource.id}
              className={styles.card}
              onClick={() => openResourceModal(resource)}
            >
              <div className={styles.cardIcon}>
                {resource.category.includes("Article") && <AiFillFileText />}
                {resource.category.includes("Guide") && <AiOutlinePlayCircle />}
              </div>
              <h2 className={styles.cardTitle}>{resource.title}</h2>
              <p className={styles.cardDescription}>{resource.description}</p>
              <div className={styles.cardTags}>
                {resource.category.map((tag, index) => (
                  <span key={index} className={styles.cardTag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.cardActions}>
                <button
                  className={styles.bookmarkButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookmarkToggle(resource.id);
                  }}
                >
                  {bookmarkedResources.includes(resource.id) ? (
                    <FaBookmark />
                  ) : (
                    <FaRegBookmark />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedResource && (
          <div className={styles.modalOverlay} onClick={closeResourceModal}>
            <div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeResourceModal}>
                <FaTimes />
              </button>
              <h2 className={styles.modalTitle}>{selectedResource.title}</h2>
              <p className={styles.modalContent}>{selectedResource.content}</p>
              <div className={styles.modalTags}>
                {selectedResource.category.map((tag, index) => (
                  <span key={index} className={styles.modalTag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.modalActions}>
                <div className={styles.feedback}>
                  <button className={styles.feedbackButton}>
                    <FaThumbsUp /> Like
                  </button>
                  <button className={styles.feedbackButton}>
                    <FaThumbsDown /> Dislike
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Resources;
