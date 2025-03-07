"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const onClickHandler = () => {
    const retry = () => {
      router.refresh();
      reset();
    };

    startTransition(retry);
  };

  return (
    <div>
      <h3>An error occurred.</h3>
      <button onClick={onClickHandler}>Retry ...</button>
    </div>
  );
}
