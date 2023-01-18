import { ReactComponent as Arrow } from '@Assets/images/arrow-breadcrumbs.svg';
import useRedirectToUrl from '@Hooks/useRedirectToUrl';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './Breadcrumbs.scss';

const Breadcrumbs: React.FC = () => {
  const breadcrumbs = useBreadcrumbs();
  const redirect = useRedirectToUrl();

  const breadcrumbsNew = breadcrumbs.map(({ match, breadcrumb }, index) => (
    <div key={match.pathname} className='ssh-breadcrumbs__item'>
      {index !== 0 ? <Arrow /> : ''}
      <div
        className='ssh-breadcrumbs__link'
        onClick={() => redirect.handleRedirect(match.pathname)}
        key={match.pathname}
      >
        {breadcrumb}
      </div>
    </div>
  ));

  return (
    <div className='ssh-breadcrumbs'>
      <div className='ssh-breadcrumbs__container ssh-container'>
        <div className='ssh-breadcrumbs__row ssh-row'>{breadcrumbsNew}</div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
