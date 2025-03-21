import { Loader } from '@/components/Loader';
import { PropsWithChildren } from 'react';

interface CheckLoadingProps {
  isLoading: boolean;
}

export const CheckLoading = ({ isLoading, children }: PropsWithChildren<CheckLoadingProps>) =>
  isLoading ? <Loader /> : <>{children}</>;
