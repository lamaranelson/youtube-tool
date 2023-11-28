import { YoutubeLoader } from "langchain/document_loaders/web/youtube";

const loader = YoutubeLoader.createFromUrl("https://www.youtube.com/watch?v=Yd0yQ9yxSYY", {
  language: "en",
  addVideoInfo: true,
});

const docs = await loader.load();

for (var doc in docs){
    console.log(docs[doc].pageContent)
    console.log("-----")
}
