import { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";

interface LoaderProps {
  height?: number;
  width?: number;
}

function Loader(props: LoaderProps) {
  const { height = 80, width = 80 } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Rings
      color="#1EA4CE"
      height={height}
      width={width}
      ariaLabel="loading"
      visible={isVisible}
    />
  );
}

export default Loader;
