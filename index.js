/**
 * @file    index.js
 *          Entrypoint for the dcp-echoes package. Returns the result
 *          of `require('dcp-client').initSync();` even if it has
 *          already been invoked.
 *
 *          NOTE: has the side effect of invoking dcp-client init if it
 *          has not been invoked yet!!! You have been warned!!!
 *
 * @author  Will Pringle <willkantorpringle@gmail.com>
 * @date    February 2024
 */

var dcpEcho = null;

if ('dcp/build' in require.cache)
{
  // these modules are not part of the object initSync returns
  const denyList = [
    'dcp/bank-util',
    'dcp/bootstrap-build',
    'dcp/client',
    'dcp/client-bundle',
    'dcp/env-native',
    'dcp/internal/dcp-default-config',
    'dcp/internal/debugging',
    'dcp/internal/engine-constructors',
    'dcp/internal/job-values'
  ];

  // decorate with identical properties to initSync
  dcpEcho = {};
  for (const name in require.cache)
  {
    if (!name.startsWith('dcp/') || denyList.includes(name))
      continue;

    const modName = name.slice(4);

    dcpEcho[modName] = require.cache[name]['exports'];
  }
}
else
  dcpEcho = require('dcp-client').initSync();

module.exports = dcpEcho;

