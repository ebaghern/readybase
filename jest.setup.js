import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import { toMatchDiffSnapshot } from 'snapshot-diff';
const mockEnvConfig = process.env;
expect.extend({ toMatchDiffSnapshot });
jest.mock('next/config', () => () => ({ publicRuntimeConfig: mockEnvConfig }));
