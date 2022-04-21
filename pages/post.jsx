import { useEffect } from 'react';
export default function Post() {
  useEffect(async () => {
    const res = await fetch('');
  }, []);
  return <></>;
}
