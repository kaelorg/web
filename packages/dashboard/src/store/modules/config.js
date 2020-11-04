export const config = {
  key: 'Kaeltec',
  createFullKey: insertKey => `${config.key}:${insertKey}`,
};

export function createActions(actions) {
  return Object.entries(actions)
    .map(([keyFunction, action]) => [
      keyFunction,
      payload => ({
        type: action,
        payload,
      }),
    ])
    .reduce((obj, [key, fn]) => Object.assign(obj, { [key]: fn }), {});
}
