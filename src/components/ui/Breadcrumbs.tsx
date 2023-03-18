import { ReactComponent as Arrow } from '@Assets/images/arrow-breadcrumbs.svg';
import { RouterPaths } from '@Types/routerPaths';
import useBreadcrumbs, {
  BreadcrumbComponentType,
  BreadcrumbsRoute,
} from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '@Store/index';
import useSetQueryParams from '@Hooks/useSetQueryParams';
import './Breadcrumbs.scss';

const Breadcrumbs: React.FC = () => {
  const { data, error } = useGetAllProductsQuery();
  const { route } = useSetQueryParams(RouterPaths.SHOP);

  let productsById: {
    [key: string]: string;
  };

  if (!error && data) {
    productsById = data.reduce(
      (acc, cur) => ({ ...acc, [cur.id]: cur.name }),
      {}
    );
  }

  const DynamicProductBreadcrumb: BreadcrumbComponentType = ({ match }) => {
    return productsById ? (
      <span>{productsById[match.params.id ?? '']}</span>
    ) : (
      <></>
    );
  };

  const routes: BreadcrumbsRoute[] = [
    {
      path: `${RouterPaths.SHOP}/:id`,
      breadcrumb: DynamicProductBreadcrumb,
    },
  ];

  const breadcrumbs = useBreadcrumbs(routes);

  const breadcrumbsNew = breadcrumbs.map(({ match, breadcrumb }, index) => {
    const myRoute =
      match.pathname === RouterPaths.SHOP ? route : match.pathname;

    return (
      <li key={match.pathname} className='ssh-breadcrumbs__item'>
        {index !== 0 ? <Arrow /> : ''}
        <Link to={myRoute} className='ssh-breadcrumbs__link'>
          {breadcrumb}
        </Link>
      </li>
    );
  });

  return (
    <nav className='ssh-breadcrumbs'>
      <div className='ssh-breadcrumbs__container ssh-container'>
        <div className='ssh-breadcrumbs__row ssh-row'>
          <ul className='ssh-breadcrumbs__list'>{breadcrumbsNew}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
