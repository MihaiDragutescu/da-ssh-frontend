import Input from '@Components/form/Input';
import Search from '@Assets/images/search-icon.svg';
import './HeaderMobileSearch.scss';

interface HeaderSearchProps {
  menuScrolled: boolean;
  inputValue: string;
  handleSubmit: (
    event: React.MouseEvent<HTMLImageElement> | React.FormEvent<HTMLFormElement>
  ) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hideOverlay: () => void;
  handleFocus: () => void;
}

const HeaderMobileSearch: React.FC<HeaderSearchProps> = (
  props: HeaderSearchProps
) => {
  return (
    <div
      className={`ssh-header__col ssh-header__search-mobile ${
        props.menuScrolled ? 'hidden' : ''
      }`}
    >
      <form onSubmit={props.handleSubmit}>
        <Input
          className='ssh-header__input'
          placeholder='Search...'
          type='text'
          value={props.inputValue}
          onChange={props.handleChange}
          onBlur={props.hideOverlay}
          onFocus={props.handleFocus}
          icon={Search}
          iconClick={props.handleSubmit}
        />
      </form>
    </div>
  );
};

export default HeaderMobileSearch;
