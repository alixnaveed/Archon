import { mock } from 'bun:test';
import { writeSync } from 'node:fs';
import { join } from 'node:path';

writeSync(2, `[workflow-path-target-phase] ${Date.now()} pid=${process.pid} child-process-start\n`);

const bundledRoot = process.env.ARCHON_TEST_EMPTY_BUNDLED_ROOT;
if (bundledRoot === undefined) {
  throw new Error('ARCHON_TEST_EMPTY_BUNDLED_ROOT is required');
}

const realArchonPaths = await import('@archon/paths');
mock.module('@archon/paths', () => ({
  ...realArchonPaths,
  getDefaultWorkflowsPath: (): string => join(bundledRoot, 'defaults'),
  getDefaultCommandsPath: (): string => join(bundledRoot, 'defaults'),
}));
