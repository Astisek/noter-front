import { CheckLoading } from '@/components/CheckLoading/CheckLoading';

const Loading = () => (
  <div className="flex-1 py-10 overflow-y-auto h-screen">
    <CheckLoading isLoading></CheckLoading>{' '}
  </div>
);

export default Loading;
