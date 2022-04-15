import { useEffect } from 'react';
export default function Post() {
  useEffect(() => {
    const res = await fetch('');
  }, []);
  return <>
  </>;
}
