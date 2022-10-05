import { fireEvent, render, screen } from '@testing-library/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { O } from 'ts-toolbelt';
import { mergeDeepRight } from 'ramda';
import useGetScreenSize from 'src/hooks/useGetScreenSize';
import { UserProfile } from '@h2know-how/identity-sdk';
import Marketplace from 'src/components/Marketplace';

import useAuth from 'src/hooks/useAuth';

import Header, { getBgColor } from './Header';

const SELECTED_COLOR = 'rgb(25, 118, 210)';

const mockedUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

const defaultAuth = {
  authenticatedUser: {
    displayName: 'displayName',
    givenName: 'givenName',
    surname: 'surname',
  },
};

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

jest.mock('src/services/api/useFetchMe', () => () => ({}));

jest.mock('src/hooks/useGetScreenSize');
jest.mock('src/components/Marketplace');

jest.mock('src/hooks/useAuth', () => jest.fn());
const mockedNavigate = jest.fn();
const mockedUseNavigate = useNavigate as jest.MockedFunction<typeof useNavigate>;
const mockedUseLocation = useLocation as jest.MockedFunction<typeof useLocation>;
const mockUseLocationValue = {
  key: '',
  pathname: '/',
  search: '',
  hash: '',
  state: null,
};

const mockedMarketplace = Marketplace as jest.Mock;

const mockedUseGetScreenSize = useGetScreenSize as jest.MockedFunction<typeof useGetScreenSize>;

const configureUseAuth = (auth: { authenticatedUser: O.Partial<UserProfile> | null } = defaultAuth) =>
  // @ts-ignore
  mockedUseAuth.mockImplementation(() => mergeDeepRight(defaultAuth, auth));

describe('Header', () => {
  beforeEach(() => {
    mockedUseNavigate.mockImplementation(() => mockedNavigate);
    mockedUseLocation.mockImplementation(() => mockUseLocationValue);
    mockedUseGetScreenSize.mockImplementation(() => ({
      isXs: false,
      isSm: false,
      isMd: true,
      isLg: false,
      isXL: false,
    }));

    configureUseAuth();
  });

  it('should navigate to lobby when logo is clicked', () => {
    // act
    render(<Header />);

    const headerLogo = screen.getByTestId('logo');
    fireEvent.click(headerLogo);

    // assert
    expect(mockedNavigate).toHaveBeenCalledWith('/');
  });

  it('should be set to position "fixed"', () => {
    // act
    render(<Header />);

    // assert
    expect(screen.getByRole('banner')).toHaveClass('MuiAppBar-positionFixed');
  });
});

describe('getBgColor', () => {
  describe('For the medium breakpoint and above', () => {
    it('returns "primary.main" as the background color', () => {
      // arrange
      const isMdAndAbove = true;

      // assert
      expect(getBgColor(isMdAndAbove)).toBe('primary.main');
    });
  });

  describe('For any other breakpoint below medium', () => {
    it('returns "unset" as the background color', () => {
      // arrange
      const isMdAndAbove = false;

      // assert
      expect(getBgColor(isMdAndAbove)).toBe('unset');
    });
  });

  describe('When screen size is small or extra small', () => {
    beforeEach(() => {
      mockedUseGetScreenSize.mockImplementation(() => ({
        isXs: false,
        isSm: true,
        isMd: false,
        isLg: false,
        isXL: false,
      }));
      mockedUseLocation.mockImplementation(() => mockUseLocationValue);
      mockedMarketplace.mockImplementation(() => <div>All Products</div>);

      configureUseAuth();
    });

    it('displays the links as tabs', () => {
      // act
      render(<Header />);
      const homeTab = screen.getByText('Home');
      const marketplaceTab = screen.getByText('Marketplace');

      // assert
      expect(homeTab).toHaveAttribute('role', 'tab');
      expect(marketplaceTab).toHaveAttribute('role', 'tab');
    });

    it('display the Home tab selected', () => {
      // act
      render(<Header />);

      const marketplaceTab = screen.getByText('Marketplace');
      const homeTab = screen.getByText('Home');
      fireEvent.click(homeTab);

      // assert
      expect(homeTab).toHaveStyle(`color: ${SELECTED_COLOR}`);
      expect(marketplaceTab).not.toHaveStyle(`color: ${SELECTED_COLOR}`);
    });

    it('display the Marketplace tab selected', () => {
      // act
      render(<Header />);

      const marketplaceTab = screen.getByText('Marketplace');
      const homeTab = screen.getByText('Home');
      fireEvent.click(marketplaceTab);

      // assert
      expect(marketplaceTab).toHaveStyle(`color: ${SELECTED_COLOR}`);
      expect(homeTab).not.toHaveStyle(`color: ${SELECTED_COLOR}`);
    });
  });
});
