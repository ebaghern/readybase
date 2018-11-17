import { isNil } from 'lodash';

const hasDocument = typeof document === 'object' && document !== null;
const hasWindow =
  typeof window === 'object' && window !== null && window.self === window;

const isBrowser = () =>
  !isNil(isBrowser.override) ? isBrowser.override : hasDocument && hasWindow;

export default isBrowser;
