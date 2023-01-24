import { ReactComponent as Arrow } from '@Assets/images/arrow-breadcrumbs.svg';
import { RouterPaths } from '@Types/routerPaths';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';
import { products } from '@Utils/mocks';
import './Breadcrumbs.scss';

const Breadcrumbs: React.FC = () => {
  const productsById: { [key: string]: string } = products.reduce(
    (acc, cur) => ({ ...acc, [cur.id]: cur.name }),
    {}
  );

  const breadcrumbs = useBreadcrumbs([
    {
      path: `${RouterPaths.SHOP}/:id`,
      breadcrumb: ({ match }) => {
        return <span>{productsById[match.params.id! ?? '']}</span>;
      },
    },
  ]);

  const breadcrumbsNew = breadcrumbs.map(({ match, breadcrumb }, index) => {
    return (
      <div key={match.pathname} className='ssh-breadcrumbs__item'>
        {index !== 0 ? <Arrow /> : ''}
        <Link to={match.pathname} className='ssh-breadcrumbs__link'>
          {breadcrumb}
        </Link>
      </div>
    );
  });

  return (
    <div className='ssh-breadcrumbs'>
      <div className='ssh-breadcrumbs__container ssh-container'>
        <div className='ssh-breadcrumbs__row ssh-row'>{breadcrumbsNew}</div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
