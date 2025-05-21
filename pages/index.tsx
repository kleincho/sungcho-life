import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const FULL_TEXT = "Building for something greater";
const TYPING_SPEED = 200;
const DELETING_SPEED = 200;
const PAUSE_DURATION = 500;

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        // If it was paused after typing, start deleting
        if (!isDeleting && currentIndex === FULL_TEXT.length) {
          setIsDeleting(true);
        }
        // If it was paused after deleting, start typing
        else if (isDeleting && currentIndex === 0) {
          setIsDeleting(false);
        }
      }, PAUSE_DURATION);
      return () => clearTimeout(timer);
    }

    const currentSpeed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(() => {
      if (!isDeleting) { // Typing
        if (currentIndex < FULL_TEXT.length) {
          setDisplayedText((prev) => prev + FULL_TEXT[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else { // Finished typing
          setIsPaused(true);
        }
      } else { // Deleting
        if (currentIndex > 0) {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
          setCurrentIndex((prev) => prev - 1);
        } else { // Finished deleting
          setIsPaused(true);
        }
      }
    }, currentSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, currentIndex, isDeleting, isPaused]);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4 typing-effect">{displayedText}</h1>
      <p className="text-lg mb-6">I’m Sung Cho, a builder at the intersection of philosophy, technology, and execution.</p>
      <blockquote className="italic text-gray-600 dark:text-gray-400">
        “Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.”
      </blockquote>
    </Layout>
  );
}
