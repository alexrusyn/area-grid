import { useState, useEffect } from "react";

const useCtx = (ref, context = "2d") => {
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    setCtx(ref.current ? ref.current.getContext(context) : null);
  }, [ref, context]);

  return ctx;
};

export default useCtx;
