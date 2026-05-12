import { useState, useEffect } from "react";

interface Participation {
  [key: string]: boolean;
}

export function useParticipations(storageKey: string) {
  const [participations, setParticipations] = useState<Participation>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(participations));
  }, [participations, storageKey]);

  const toggleParticipation = (id: string | number) => {
    setParticipations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isParticipating = (id: string | number) => {
    return participations[id] === true;
  };

  return {
    participations,
    toggleParticipation,
    isParticipating,
  };
}
