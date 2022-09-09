/**
 * Returns a licence banner.
 * @param version lerna.json version field
 * @param homepage package.json author field
 * @param author package.json author field
 * @example banner('v1.0.0-alpha.0', 'https://alexbleggi.netlify.app/hive', 'Alex Bleggi <https://alexbleggi.netlify.app>');
 */
export const banner = (version: string, homepage: string, author: string) => {
  const year = new Date().getFullYear();

  return `/*!
  * Hive v${version} (${homepage})
  * Copyright ${year} ${author}
  * Licensed under MIT (https://github.com/alexbjr369/hive/LICENSE)
  */

`;
};
