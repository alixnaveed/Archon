import { writeSync } from 'node:fs';

writeSync(2, `[workflow-path-target-phase] ${Date.now()} pid=${process.pid} child-process-start\n`);
