import {useRef} from "react";

const useCustomEffect = (effect, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  // First Render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = effect();
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }

  // Deps Changes and No Deps Array
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (depsChanged) {
    const cleanup = effect();
    // Cleanup
    if (cleanup && typeof cleanup === "function" && deps) {
      cleanup();
    }
  }

  prevDeps.current = deps || [];
};

export default useCustomEffect;
