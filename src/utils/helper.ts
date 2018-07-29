let id = 0;

export const generateId = () => {
  id = id + 1;
  return id;
};

export const delay = (ms: number) =>
  new Promise(res => {
    setTimeout(() => res(), ms);
  });
