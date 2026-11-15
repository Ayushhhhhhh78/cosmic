// Offline sanity check: syntax-parses every source file and verifies relative imports resolve.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
let bad = 0;
const walk = d => readdirSync(d).flatMap(f => statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]);
for (const f of walk('src').filter(f => f.endsWith('.js'))) {
  try { execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' }); }
  catch (e) { console.error('SYNTAX', f, String(e.stderr)); bad++; }
  for (const m of readFileSync(f, 'utf8').matchAll(/from\s+'(\.[^']+)'/g)) {
    if (!existsSync(resolve(dirname(f), m[1]))) { console.error('MISSING IMPORT', f, m[1]); bad++; }
  }
}
console.log(bad ? `${bad} problem(s)` : 'check passed');
process.exit(bad ? 1 : 0);
