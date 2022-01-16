import { useState } from "react";

function useHomeLogic() {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => setShowFilter(!showFilter);

  const handlers = {
    toggleFilter,
  };

  const states = {
    showFilter,
  };

  return {
    states,
    handlers,
  };
}

export default useHomeLogic;
