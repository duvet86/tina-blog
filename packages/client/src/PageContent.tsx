// import { useForm, usePlugin } from "tinacms";

import { Post } from "./types";

interface Props {
  post: Post;
}

export default function PageContent({ post }: Props) {
  // const formConfig = {
  //   id: post._id,
  //   label: "Edit Page",
  //   fields: [
  //     {
  //       name: "title",
  //       label: "Title",
  //       component: "text",
  //     },
  //     {
  //       name: "body",
  //       label: "Body",
  //       component: "textarea",
  //     },
  //   ],
  //   initialValues: {
  //     title: post.title,
  //     body: post.body,
  //   },
  //   onSubmit: async (formData: { title: string; body: string }) => {
  //     if (db == null) {
  //       throw new Error();
  //     }

  //     const newPost = {
  //       _id: post._id,
  //       _rev: post._rev,
  //       ...formData,
  //     };

  //     await db.put(newPost);

  //     alert("Success");
  //   },
  // };

  // // 3. Create the form
  // const [editableData, form] = useForm(formConfig);

  // // 4. Register it with the CMS
  // usePlugin(form);

  return (
    <section>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </section>
  );
}
