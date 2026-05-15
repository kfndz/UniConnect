import { useState, useEffect } from "react";

interface Participation {
  [key: string]: boolean;
}

interface ParticipationCounts {
  [key: string]: number;
}

export function useParticipations(storageKey: string) {
  const [participations, setParticipations] = useState<Participation>(() => {
    const saved = localStorage.getItem(`${storageKey}-status`);
    return saved ? JSON.parse(saved) : {};
  });

  const [counts, setCounts] = useState<ParticipationCounts>(() => {
    const saved = localStorage.getItem(`${storageKey}-counts`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(
      `${storageKey}-status`,
      JSON.stringify(participations),
    );
  }, [participations, storageKey]);

  useEffect(() => {
    localStorage.setItem(
      `${storageKey}-counts`,
      JSON.stringify(counts),
    );
  }, [counts, storageKey]);

  const toggleParticipation = (
    id: string | number,
    initialCount = 0,
  ) => {
    const alreadyParticipating = participations[id];

    setParticipations((prev) => ({
      ...prev,
      [id]: !alreadyParticipating,
    }));

    setCounts((prev) => {
      const current =
        prev[id] !== undefined ? prev[id] : initialCount;

      return {
        ...prev,
        [id]: alreadyParticipating
          ? Math.max(current - 1, 0)
          : current + 1,
      };
    });
  };

  const isParticipating = (id: string | number) => {
    return participations[id] === true;
  };

  const getCount = (
    id: string | number,
    initialCount = 0,
  ) => {
    return counts[id] !== undefined
      ? counts[id]
      : initialCount;
  };

  return {
    participations,
    toggleParticipation,
    isParticipating,
    getCount,
  };
}