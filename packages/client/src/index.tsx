import "normalize.css";
import "./index.css";

import { StrictMode } from "react";
import { render } from "react-dom";

import { TinaProvider, TinaCMS } from "tinacms";
import PouchDB from "pouchdb";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const BlogPostCreatorPlugin = {
//   __type: "content-creator",
//   name: "New Blog Post",
//   fields: [
//     {
//       label: "Title",
//       name: "title",
//       component: "text",
//       validation(title: string) {
//         if (!title) {
//           return "Required.";
//         }
//       },
//     },
//     {
//       label: "Body",
//       name: "body",
//       component: "textarea",
//       description: "The main content.",
//     },
//     {
//       label: "Date",
//       name: "date",
//       component: "date",
//       description: "The default will be today.",
//     },
//   ],
//   onSubmit() {
//     // // Call functions that create the new blog post. For example:
//     // cms.apis.someBackend.createPost(values)
//   },
// };

const cms = new TinaCMS({
  enabled: true,
  sidebar: true,
});

// cms.plugins.add(BlogPostCreatorPlugin);

const db = new PouchDB("posts");

render(
  <StrictMode>
    <TinaProvider cms={cms}>
      <App db={db} />
    </TinaProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
