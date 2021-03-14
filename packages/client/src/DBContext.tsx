import { useEffect, useRef, createContext, ReactNode, useContext } from "react";
import PouchDB from "pouchdb";

interface Props {
  children: ReactNode;
}

const REMOTE_POUCH = window.location.href + "db/posts";

const DBContext = createContext<PouchDB.Database | null>(null);

export default function DBProvider({ children }: Props) {
  const dbRef = useRef<PouchDB.Database | null>(null);

  useEffect(() => {
    dbRef.current = new PouchDB("posts");

    const opts = {
      live: true,
    };
    dbRef.current.replicate.to(REMOTE_POUCH, opts, () =>
      console.log("Sync Completed To")
    );
    dbRef.current.replicate.from(REMOTE_POUCH, opts, () =>
      console.log("Sync Completed From")
    );
  }, []);

  return (
    <DBContext.Provider value={dbRef.current}>{children}</DBContext.Provider>
  );
}

export function useDB() {
  const context = useContext(DBContext);
  if (context == null) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}
