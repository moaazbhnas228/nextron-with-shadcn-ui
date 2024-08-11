import _ from "lodash";

export function isIn(array: (string | number)[]) {
  return _.partial(_.includes, array);
}

export function propertyIn(path: string, array: (string | number)[]) {
  return _.flow(_.property(path), isIn(array));
}

export const unwind = _.curry(function unwind<T extends object>(
  path: string,
  data: T[]
) {
  data = _.cloneDeep(data);

  const unwinded = _.flatMap(data, function mapper(entry) {
    return _.map(_.propertyOf(entry)(path), function mapper(subEntry) {
      entry = _.cloneDeep(entry);
      return _.set(entry, path, subEntry);
    });
  });

  return unwinded;
});
