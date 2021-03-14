import { useForm, usePlugin } from "tinacms";

interface Props {
  db: PouchDB.Database;
}

export default function CreatePost({ db }: Props) {
  const formConfig = {
    id: 1,
    label: "Edit Page",
    fields: [
      {
        name: "title",
        label: "Title",
        component: "text",
      },
      {
        name: "body",
        label: "Body",
        component: "textarea",
      },
    ],
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit: async (formData: { title: string; body: string }) => {
      const newPost = {
        _id: new Date().toISOString(),
        date: Date.now(),
        ...formData,
      };
      await db.put(newPost);
      alert("Success");
    },
  };

  // 3. Create the form
  const [_, form] = useForm(formConfig);

  // 4. Register it with the CMS
  usePlugin(form);

  return null;
}
