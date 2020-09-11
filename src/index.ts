export type SortKeyParts = string[];
export type SortKey = string;

// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-sort-keys.html

export function generate(...parts: SortKeyParts): SortKey {
  return parts.map((item) => item.replace(/([\\#])/g, '\\$1')).join('#');
}

export function parse(key: SortKey): SortKeyParts {
  return (`#${key}`.match(/#(\\.|[^#])*/g) as string[]).map((item) =>
    item.replace(/\\(.)/g, '$1').substring(1),
  );
}

export default { generate, parse };
