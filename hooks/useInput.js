import { useState, useCallback } from 'react';

// 계속 반복되는 hook 재사용 하기 위해
export default (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};
