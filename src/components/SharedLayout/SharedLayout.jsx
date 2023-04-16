import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.page__container}>
      <header className={css.header}>
        <nav className={css.header__nav}>
          <Link className={css.header__navItem} to="/">
            Home
          </Link>
          <Link className={css.header__navItem} to="/movies">
            Movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
