

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.title}>
          Welcome to, <span className={css.titleLogo}>my Phonebook</span>
        </h1>
      <p className={css.subtitleContainer}>
        Your convenient digital assistant for keeping all your contacts in one
        place. Easily add new contacts, edit them as needed, and remove
        unnecessary ones, keeping all the important information right at your
        fingertips.
      </p>
    </div>
  );
};

export default HomePage;