import { AppDispatch, RootState } from '@Store/index';
import { useDispatch, useSelector } from 'react-redux';
import { sshApi } from '@Store/api';

const useResetCachedProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeFilters = useSelector((state: RootState) => state.filters);

  const resetCache = async () => {
    await dispatch(
      sshApi.util.updateQueryData(
        'getFilteredProducts',
        { page: 1, filtersList: activeFilters },
        (draftProducts) => {
          draftProducts.products = [];
          draftProducts.totalCount = 0;
        }
      )
    );
  };

  return { resetCache };
};

export default useResetCachedProducts;
