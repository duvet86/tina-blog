import { useEffect, useState } from "react";

import Layout from "./Layout";
import CreatePost from "./CreatePost";
import PageContent from "./PageContent";

import { Post } from "./types";

const REMOTE_POUCH = window.location.href + "db/posts";

interface Props {
  db: PouchDB.Database;
}

export default function App({ db }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const opts = {
      live: true,
    };
    db.replicate.to(REMOTE_POUCH, opts, () => console.log("Sync Completed To"));
    db.replicate.from(REMOTE_POUCH, opts, () =>
      console.log("Sync Completed From")
    );

    db.allDocs<Post>({
      include_docs: true,
      descending: true,
    }).then((res) => {
      setPosts(res.rows.map((r) => r.doc!));
    });
  }, [db]);

  return (
    <Layout>
      <CreatePost db={db} />
      {posts.map((post) => (
        <PageContent key={post._id} post={post} />
      ))}
    </Layout>
  );
}
