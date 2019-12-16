export default function tryDynamicImport(moduleUrl) {
  try {
    const result = new Function(`return import('${moduleUrl}')`)();
    return result;
  } catch (err) {
    return Promise.reject(new Error('Dynamic import not supported'));
  }
};