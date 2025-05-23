import { useEffect } from 'react';

function withLogger<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    useEffect(() => {
      console.log(`Mounted: ${Component.name}`);
      return () => console.log(`Unmounted: ${Component.name}`);
    }, []);
    
    return <Component {...props} />;
  };
}

export default withLogger;
